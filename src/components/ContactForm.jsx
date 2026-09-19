import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: '' });

    // Simulate form submission delay
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  if (status.submitted) {
    return (
      <div className="p-8 rounded-none bg-[#151515] border border-white/20 text-center space-y-4">
        <div className="flex justify-center text-white mb-2">
          <CheckCircle size={40} />
        </div>
        <h4 className="font-montserrat text-xl text-white">Thank you!</h4>
        <p className="font-roboto font-extralight text-[15px] text-[#e5e5e5]">
          Thanks for contacting us! We will be in touch with you shortly.
        </p>
        <button
          onClick={() => setStatus({ submitting: false, submitted: false, error: '' })}
          className="mt-4 text-xs font-montserrat uppercase tracking-wider text-white underline hover:text-gray-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status.error && (
        <div className="p-3 text-sm text-red-400 bg-red-950/40 border border-red-800 rounded-none">
          {status.error}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="form-name" className="block font-montserrat text-xs uppercase tracking-wider text-white mb-2">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="form-name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#111518] border border-white/20 rounded-none px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="form-email" className="block font-montserrat text-xs uppercase tracking-wider text-white mb-2">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="form-email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#111518] border border-white/20 rounded-none px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="form-subject" className="block font-montserrat text-xs uppercase tracking-wider text-white mb-2">
          Subject
        </label>
        <input
          id="form-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-[#111518] border border-white/20 rounded-none px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="form-message" className="block font-montserrat text-xs uppercase tracking-wider text-white mb-2">
          Comment or Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#111518] border border-white/20 rounded-none px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors min-h-[140px]"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status.submitting}
          className="btn-ghost-white px-8 py-3.5 text-sm tracking-widest disabled:opacity-50 rounded-none"
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}

