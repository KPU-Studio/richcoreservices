
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, User, Briefcase, MessageSquare } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    service: false,
    message: false
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Optional field - valid if empty or matches phone pattern
    if (!phone.trim()) return true;
    // Accepts formats: +1234567890, (123) 456-7890, 123-456-7890, 123.456.7890, 1234567890
    return /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(phone.replace(/\s/g, ''));
  };

  const getFieldError = (field: 'name' | 'email' | 'phone' | 'service' | 'message') => {
    if (!touched[field]) return null;

    // Phone and service are optional, so only validate format if provided
    if (field === 'phone') {
      if (formData[field].trim() && !validatePhone(formData[field])) {
        return 'Please enter a valid phone number';
      }
      return null;
    }

    if (field === 'service') {
      // Service is optional
      return null;
    }

    if (!formData[field].trim()) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    if (field === 'email' && !validateEmail(formData[field])) return 'Please enter a valid email address';
    return null;
  };

  const isFormValid = () => {
    return formData.name.trim() &&
           formData.email.trim() &&
           validateEmail(formData.email) &&
           formData.message.trim() &&
           recaptchaToken;
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Mark all fields as touched for validation
    setTouched({ name: true, email: true, phone: true, service: true, message: true });

    if (!recaptchaToken) {
      setError('Please complete the reCAPTCHA verification');
      return;
    }

    if (!isFormValid()) {
      setError('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...formData, recaptchaToken })
      // });

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTouched({ name: false, email: false, phone: false, service: false, message: false });
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('An error occurred while sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
                    onClick={() => {
                      setSubmitted(false);
                      setError(null);
                      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                      setTouched({ name: false, email: false, phone: false, service: false, message: false });
                      setRecaptchaToken(null);
                      recaptchaRef.current?.reset();
                    }}
                    className="mt-8 text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div role="alert" aria-live="polite" className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-sm font-medium text-red-800">{error}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onBlur={() => setTouched({ ...touched, name: true })}
                          placeholder="John Doe"
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                            getFieldError('name')
                              ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                              : touched.name && formData.name.trim()
                              ? 'border-green-500 focus:ring-2 focus:ring-green-500'
                              : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                          }`}
                        />
                      </div>
                      {getFieldError('name') && (
                        <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onBlur={() => setTouched({ ...touched, email: true })}
                          placeholder="john@company.com"
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                            getFieldError('email')
                              ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                              : touched.email && validateEmail(formData.email)
                              ? 'border-green-500 focus:ring-2 focus:ring-green-500'
                              : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                          }`}
                        />
                      </div>
                      {getFieldError('email') && (
                        <p className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onBlur={() => setTouched({ ...touched, phone: true })}
                        placeholder="+1 (555) 123-4567"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                          getFieldError('phone')
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : touched.phone && formData.phone.trim() && validatePhone(formData.phone)
                            ? 'border-green-500 focus:ring-2 focus:ring-green-500'
                            : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        }`}
                      />
                    </div>
                    {getFieldError('phone') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        onBlur={() => setTouched({ ...touched, service: true })}
                        placeholder="e.g., Cloud Migration, Cybersecurity Audit, IT Strategy..."
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all ${
                          getFieldError('service')
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : touched.service && formData.service.trim()
                            ? 'border-green-500 focus:ring-2 focus:ring-green-500'
                            : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        }`}
                      />
                    </div>
                    {getFieldError('service') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('service')}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onBlur={() => setTouched({ ...touched, message: true })}
                        placeholder="Tell us about your project or challenges..."
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border outline-none transition-all resize-none ${
                          getFieldError('message')
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : touched.message && formData.message.trim()
                            ? 'border-green-500 focus:ring-2 focus:ring-green-500'
                            : 'border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        }`}
                      />
                    </div>
                    {getFieldError('message') && (
                      <p className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
                    )}
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                      onChange={handleRecaptchaChange}
                      theme="light"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !recaptchaToken || !isFormValid()}
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
