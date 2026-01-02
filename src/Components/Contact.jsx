import { User, Mail, Github, Linkedin, Twitter, MessageCircleMore, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ theme }) {
  const t = theme || {};
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'Freelance Project',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Initialize EmailJS (only once)
  useEffect(() => {
    if (!window.emailJSInitialized) {
      try {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (!publicKey) {
          console.error('❌ EmailJS Public Key is missing in .env.local');
        } else {
        emailjs.init(publicKey);
        console.log('✓ EmailJS initialized successfully');
        window.emailJSInitialized = true;
      }
    } catch (error) {
      console.error('❌ EmailJS initialization failed:', error);
    }
  }}, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields' });
      return;
    }

    console.log('🔍 Checking env variables...');
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Present' : 'Missing');

    setLoading(true);
    setFeedback(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      console.log('🔄 Sending email with:', { serviceId, templateId });

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      );

      console.log('✓ Email sent successfully:', response);
      setFeedback({ type: 'success', message: '✓ Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ fullName: '', email: '', subject: 'Freelance Project', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setFeedback(null), 5000);
    } catch (error) {
      console.error('❌ Email send error:', error);
      setFeedback({ type: 'error', message: `✗ Failed to send message: ${error.text || error.message}` });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
    const message = `New Portfolio Contact 🚀\nName: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className={`py-20 ${t.bg || 'bg-muted-red-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <User className={`w-12 h-12 ${t.icon || 'text-muted-red-600'} mx-auto mb-4`} />
          <h2 className="text-4xl font-semibold text-text-gray-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-text-gray">Let's discuss your next project</p>
        </div>

        <div>
          {/* Contact Form */}
          <div className={`bg-white rounded-2xl border-2 ${t.cardBorder || 'border-muted-red-200'} p-8 max-w-2xl mx-auto`}>
            <h3 className="text-2xl font-semibold text-text-gray-dark mb-6">Send me a message</h3>
            
            <form onSubmit={handleSendEmail} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-text-gray-dark mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} focus:outline-none focus:border-current transition-colors text-text-gray-dark placeholder-gray-400`}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-text-gray-dark mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} focus:outline-none focus:border-current transition-colors text-text-gray-dark placeholder-gray-400`}
                  required
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label className="block text-sm font-medium text-text-gray-dark mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} focus:outline-none focus:border-current transition-colors text-text-gray-dark`}
                >
                  <option>Freelance Project</option>
                  <option>Job Opportunity</option>
                  <option>Collaboration</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-text-gray-dark mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} focus:outline-none focus:border-current transition-colors text-text-gray-dark placeholder-gray-400 resize-none`}
                  required
                ></textarea>
              </div>

              {/* Feedback Message */}
              {feedback && (
                <div className={`p-4 rounded-lg ${feedback.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-700' 
                  : 'bg-red-50 border border-red-200 text-red-700'}`}>
                  {feedback.message}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  disabled={!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()}
                  className={`flex-1 group flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} rounded-lg font-medium text-text-gray transition-all hover:bg-muted-red-50 disabled:opacity-50`}
                >
                  <MessageCircleMore className="w-4 h-4" />
                  WhatsApp
                </button>
                <button
                  type="submit"
                  onClick={() => window.location.href = 'mailto:parthjadav.cg@gmail.com'}
                  disabled={!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()}
                  className={`flex-1 group flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} rounded-lg font-medium text-text-gray transition-all hover:bg-muted-red-50 disabled:opacity-50`}
                >
                  <Mail className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Send Email'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-text-gray-dark mb-2">Connect with me</h3>
            <p className="text-text-gray">Follow my work and projects</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <a
              href="https://github.com/PARTH-JADAV20"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} ${t.cardHoverBg || 'hover:bg-muted-red-100'} transition-all hover:-translate-y-1`}
            >
              <Github className={`w-8 h-8 mb-3 ${t.icon || 'text-muted-red-600'}`} />
              <p className={`text-text-gray ${t.textHover || 'group-hover:text-muted-red-700'} transition-colors font-medium text-sm`}>GitHub</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jadav-parth/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} ${t.cardHoverBg || 'hover:bg-muted-red-100'} transition-all hover:-translate-y-1`}
            >
              <Linkedin className={`w-8 h-8 mb-3 ${t.icon || 'text-muted-red-600'}`} />
              <p className={`text-text-gray ${t.textHover || 'group-hover:text-muted-red-700'} transition-colors font-medium text-sm`}>LinkedIn</p>
            </a>

            <a
              href="https://x.com/parthjadav_2004"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} ${t.cardHoverBg || 'hover:bg-muted-red-100'} transition-all hover:-translate-y-1`}
            >
              <Twitter className={`w-8 h-8 mb-3 ${t.icon || 'text-muted-red-600'}`} />
              <p className={`text-text-gray ${t.textHover || 'group-hover:text-muted-red-700'} transition-colors font-medium text-sm`}>X</p>
            </a>

            <a
              href="https://leetcode.com/u/Jadav_Parth"
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} ${t.cardHoverBg || 'hover:bg-muted-red-100'} transition-all hover:-translate-y-1`}
            >
              <Code className={`w-8 h-8 mb-3 ${t.icon || 'text-muted-red-600'}`} />
              <p className={`text-text-gray ${t.textHover || 'group-hover:text-muted-red-700'} transition-colors font-medium text-sm`}>LeetCode</p>
            </a>

            <a
              href="mailto:parthjadav.cg@gmail.com"
              className={`group flex flex-col items-center px-4 py-6 bg-white rounded-lg border-2 ${t.cardBorder || 'border-muted-red-200'} ${t.cardHover || 'hover:border-muted-red-400'} ${t.cardHoverBg || 'hover:bg-muted-red-100'} transition-all hover:-translate-y-1`}
              title="parthjadav.cg@gmail.com"
            >
              <Mail className={`w-8 h-8 mb-3 ${t.icon || 'text-muted-red-600'}`} />
              <p className={`text-text-gray ${t.textHover || 'group-hover:text-muted-red-700'} transition-colors font-medium text-sm`}>Email</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
