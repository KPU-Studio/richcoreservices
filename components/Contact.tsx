
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     formData: new FormData(e.target as HTMLFormElement),
      //     recaptchaToken
      //   })
      // });

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitted(true);
      // Reset reCAPTCHA
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="lg:grid lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-blue-600 p-10 lg:p-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Let's build something <br />resilient together.</h2>
              <p className="text-blue-100 mb-12 text-lg">
                Ready to optimize your infrastructure or secure your data? Reach out today for a discovery session.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">Email Us</p>
                    <p className="text-xl font-medium">strategy@richcoreit.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">Call Us</p>
                    <p className="text-xl font-medium">+1 (555) 890-2345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm uppercase tracking-wider font-bold">Headquarters</p>
                    <p className="text-xl font-medium">Alexandria, VA</p>
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
                  <p className="text-slate-500 text-lg">
                    Thank you for reaching out. One of our technical advisors will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Business Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Service of Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none bg-white">
                      <option>Cloud Migration</option>
                      <option>Cybersecurity Audit</option>
                      <option>IT Strategy Consultation</option>
                      <option>Managed Services</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your project or challenges..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                    ></textarea>
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
                    disabled={isSubmitting || !recaptchaToken}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
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
