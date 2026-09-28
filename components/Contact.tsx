
import React, { useState, useRef, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2, User, Briefcase, MessageSquare } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import PhoneInput from 'react-phone-number-input';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import type { E164Number } from 'libphonenumber-js/core';
import 'react-phone-number-input/style.css';
import { SITE } from '../site';

interface FormData {
  name: string;
  email: string;
  phone: E164Number | undefined;
  service: string;
  message: string;
  'h-captcha-response': string;
}

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null); // TEMPORARILY DISABLED FOR LOCALHOST TESTING

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, touchedFields },
    setValue,
    reset,
    watch,
    control,
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: undefined,
      service: '',
      message: '',
      'h-captcha-response': '',
    }
  });

  // Watch form values for conditional styling
  const watchedValues = watch();

  // Debug: Log hCaptcha configuration on mount
  useEffect(() => {
    const siteKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.error('❌ VITE_HCAPTCHA_SITE_KEY is not set!');
      setError('Configuration error: hCaptcha site key is missing. Please contact support.');
    }
  }, []);

  const handleCaptchaVerify = (token: string) => {
    setValue('h-captcha-response', token, { shouldValidate: true });
  };

  const handleCaptchaExpire = () => {
    setValue('h-captcha-response', '', { shouldValidate: true });
  };

  const handleCaptchaError = (error: string) => {
    setError('hCaptcha failed to load. Please refresh the page or contact us directly.');
  };

  const onSubmit = async (data: FormData) => {
    setError(null);

    // Check if captcha is completed
    if (!data['h-captcha-response']) {
      setError('Please complete the hCaptcha verification');
      return;
    }

    try {

      // Web3Forms endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          phone: data.phone || 'Not provided',
          subject: data.service || 'General Inquiry',
          message: data.message,
          'h-captcha-response': data['h-captcha-response'],
          // Optional: Add these for better email formatting
          from_name: data.name,
          replyto: data.email,
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        captchaRef.current?.resetCaptcha();
      } else {
        // Show the actual error message from Web3Forms
        const errorMessage = result.message || 'Form submission failed';
        console.error('Web3Forms error:', errorMessage);
        setError(`Submission failed: ${errorMessage}. Please try again or contact us directly.`);
        return;
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred while sending your message. Please try again or contact us directly.');
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setError(null);
    reset();
    captchaRef.current?.resetCaptcha();
  };

  // Helper to get field classes with validation states (editorial: square, black borders)
  const getFieldClasses = (fieldName: keyof FormData, hasValue: boolean) => {
    const baseClasses = "w-full pl-12 pr-4 py-3 font-serif rounded-none border outline-none transition-colors bg-white";

    if (errors[fieldName]) {
      return `${baseClasses} border-error focus:border-error`;
    }

    if (touchedFields[fieldName] && hasValue) {
      return `${baseClasses} border-black focus:border-accent`;
    }

    return `${baseClasses} border-hairline focus:border-black`;
  };

  // Helper for PhoneInput container classes
  const getPhoneInputClasses = (hasError: boolean, hasValue: boolean, isTouched: boolean) => {
    const baseClasses = "w-full rounded-none border transition-colors bg-white";

    if (hasError) {
      return `${baseClasses} border-error focus-within:border-error`;
    }

    if (isTouched && hasValue) {
      return `${baseClasses} border-black focus-within:border-accent`;
    }

    return `${baseClasses} border-hairline focus-within:border-black`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-black">
          <div className="lg:grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-black p-10 lg:p-16 text-white">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.15em] text-accent mb-4">
                Get In Touch
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight mb-6">
                Let&rsquo;s build something resilient together.
              </h2>
              <p className="font-serif text-lg text-white/60 mb-12 leading-relaxed">
                Ready to optimize your infrastructure or secure your data? Reach out today for a
                discovery session.
              </p>

              <div className="border-t border-white/15">
                <div className="flex items-start gap-4 py-5 border-b border-white/15">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-white/50">Email Us</p>
                    <a href={`mailto:${SITE.email}`} className="font-serif text-lg hover:text-accent transition-colors">
                      {SITE.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-5 border-b border-white/15">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-white/50">Call Us</p>
                    <a href={SITE.phoneHref} className="font-serif text-lg hover:text-accent transition-colors">
                      {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 py-5 border-b border-white/15">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-white/50">Headquarters</p>
                    <p className="font-serif text-lg">{SITE.address.locality}, {SITE.address.region}</p>
                  </div>
                </div>
              </div>

              <p className="font-serif text-sm text-white/60 leading-relaxed mt-10">
                Prefer to talk it through? Call us directly &mdash; we respond to most requests within
                one business hour.
              </p>
            </div>

            {/* Form */}
            <div className="p-10 lg:p-16">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="border border-black p-6 mb-6">
                    <Send className="h-10 w-10 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-3xl text-black mb-4">Message received.</h3>
                  <p className="font-serif text-lg text-body">
                    Thank you for reaching out. One of our technical advisors will contact you within
                    24 business hours.
                  </p>
                  <button
                    onClick={handleSendAnother}
                    className="mt-8 font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {error && (
                    <div role="alert" aria-live="polite" className="p-4 border border-error">
                      <p className="font-serif text-sm text-error">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-body" strokeWidth={1.5} />
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="John Doe"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'contact-name-error' : undefined}
                          className={getFieldClasses('name', !!watchedValues.name)}
                          {...register('name', {
                            required: 'Name is required',
                            minLength: {
                              value: 2,
                              message: 'Name must be at least 2 characters'
                            }
                          })}
                        />
                      </div>
                      {errors.name && (
                        <p id="contact-name-error" role="alert" className="mt-1 font-serif text-sm text-error">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label htmlFor="contact-email" className="block font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-2">Business Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-body" strokeWidth={1.5} />
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="john@company.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'contact-email-error' : undefined}
                          className={getFieldClasses('email', !!watchedValues.email)}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: 'Please enter a valid email address'
                            }
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p id="contact-email-error" role="alert" className="mt-1 font-serif text-sm text-error">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-2">Phone Number</label>
                    <div className="relative">
                      <Controller
                        name="phone"
                        control={control}
                        rules={{
                          validate: (value) => {
                            if (!value) return true;  // Optional field
                            return isPossiblePhoneNumber(value) || 'Please enter a valid phone number';
                          }
                        }}
                        render={({ field: { onChange, value, onBlur } }) => (
                          <PhoneInput
                            id="phone"
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            defaultCountry="US"
                            international={false}
                            countryCallingCodeEditable={false}
                            className={getPhoneInputClasses(
                              !!errors.phone,
                              !!value,
                              !!touchedFields.phone
                            )}
                            numberInputProps={{
                              className: 'w-full pl-4 pr-4 py-3 font-serif rounded-none border-0 outline-none transition-all bg-transparent',
                              'aria-invalid': errors.phone ? 'true' : 'false',
                              'aria-describedby': errors.phone ? 'contact-phone-error' : undefined,
                            }}
                          />
                        )}
                      />
                    </div>
                    {errors.phone && (
                      <p id="contact-phone-error" role="alert" className="mt-1 font-serif text-sm text-error">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject (Optional) */}
                  <div>
                    <label htmlFor="contact-subject" className="block font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-2">Subject</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-body" strokeWidth={1.5} />
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="e.g., Managed IT, Microsoft 365, Help Desk..."
                        className={getFieldClasses('service', !!watchedValues.service)}
                        {...register('service')}
                      />
                    </div>
                    {errors.service && (
                      <p className="mt-1 font-serif text-sm text-error">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block font-sans text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-body" strokeWidth={1.5} />
                      <textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell us about your project or challenges..."
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'contact-message-error' : undefined}
                        className={`${getFieldClasses('message', !!watchedValues.message)} resize-none`}
                        {...register('message', {
                          required: 'Message is required',
                          minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters'
                          }
                        })}
                      />
                    </div>
                    {errors.message && (
                      <p id="contact-message-error" role="alert" className="mt-1 font-serif text-sm text-error">{errors.message.message}</p>
                    )}
                  </div>


                  {/* hCaptcha */}
                  <div className="flex justify-center">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                      onVerify={handleCaptchaVerify}
                      onExpire={handleCaptchaExpire}
                      onError={handleCaptchaError}
                      theme="light"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !watchedValues['h-captcha-response']}
                    className="w-full py-4 bg-black text-white font-sans text-[15px] font-bold uppercase tracking-[0.05em] rounded-none border border-black hover:bg-accent hover:border-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-black"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                  <p className="font-serif text-xs text-body text-center">
                    We&rsquo;ll only use your details to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
