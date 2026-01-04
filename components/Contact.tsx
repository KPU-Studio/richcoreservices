
import React, { useState, useRef } from 'react'; // useRef temporarily disabled for localhost testing
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, Loader2, User, Briefcase, MessageSquare } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

interface FormData {
  name: string;
  email: string;
  phone: string;
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
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      'h-captcha-response': '',
    }
  });

  // Watch form values for conditional styling
  const watchedValues = watch();

  // TEMPORARILY DISABLED FOR LOCALHOST TESTING - RE-ENABLE BEFORE PRODUCTION
  const handleCaptchaVerify = (token: string) => {
    setValue('h-captcha-response', token, { shouldValidate: true });
  };

  const handleCaptchaExpire = () => {
    setValue('h-captcha-response', '', { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setError(null);

    // TEMPORARILY DISABLED FOR LOCALHOST TESTING - RE-ENABLE BEFORE PRODUCTION
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
        captchaRef.current?.resetCaptcha(); // TEMPORARILY DISABLED FOR LOCALHOST TESTING
      } else {
        throw new Error(result.message || 'Form submission failed');
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
    captchaRef.current?.resetCaptcha(); // TEMPORARILY DISABLED FOR LOCALHOST TESTING
  };

  // Helper to get field classes with validation states
  const getFieldClasses = (fieldName: keyof FormData, hasValue: boolean) => {
    const baseClasses = "w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all";

    if (errors[fieldName]) {
      return `${baseClasses} border-red-500 focus:ring-2 focus:ring-red-500`;
    }

    if (touchedFields[fieldName] && hasValue) {
      return `${baseClasses} border-green-500 focus:ring-2 focus:ring-green-500`;
    }

    return `${baseClasses} border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent`;
  };

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="lg:grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-blue-600 p-10 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Let's build something <br />resilient together.</h2>
              <p className="text-blue-50 mb-12 text-lg">
                Ready to optimize your infrastructure or secure your data? Reach out today for a discovery session.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">Email Us</p>
                    <a
                      href="mailto:info@richcoreit.net"
                      className="text-xl font-medium hover:underline"
                    >
                      info@richcoreit.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">Call Us</p>
                    <a
                      href="tel:+15558902345"
                      className="text-xl font-medium hover:underline"
                    >
                      +1 (703) 665-9101
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">Headquarters</p>
                    <p className="text-xl font-medium">Woodbridge, VA</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-blue-500/30">
                <p className="text-blue-200 text-sm">Follow our technical insights:</p>
                <div className="flex space-x-6 mt-4">
                  {['LinkedIn', 'Facebook','Instagram'].map(social => (
                    <a key={social} href="#" className="hover:text-blue-200 transition-colors font-medium underline decoration-blue-400 underline-offset-4">{social}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-10 lg:p-16">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-green-100 p-6 rounded-full mb-6">
                    <Send className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
                  <p className="text-slate-600 text-lg">
                    Thank you for reaching out. One of our technical advisors will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={handleSendAnother}
                    className="mt-8 text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {error && (
                    <div role="alert" aria-live="polite" className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-sm font-medium text-red-800">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="John Doe"
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
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Business Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          placeholder="john@company.com"
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
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone Number (Optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className={getFieldClasses('phone', !!watchedValues.phone)}
                        {...register('phone', {
                          pattern: {
                            value: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/,
                            message: 'Please enter a valid phone number'
                          }
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject (Optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g., Cloud Migration, Cybersecurity Audit, IT Strategy..."
                        className={getFieldClasses('service', !!watchedValues.service)}
                        {...register('service')}
                      />
                    </div>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project or challenges..."
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
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

    
                  {/* hCaptcha */}
                  <div className="flex justify-center">
                    <HCaptcha
                      ref={captchaRef}
                      sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY}
                      onVerify={handleCaptchaVerify}
                      onExpire={handleCaptchaExpire}
                      theme="light"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !watchedValues['h-captcha-response']} // CAPTCHA CHECK TEMPORARILY DISABLED FOR LOCALHOST TESTING
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form, you agree to our privacy policy.
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
