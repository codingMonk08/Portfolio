import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

// Load environment variables
const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      localStorage.setItem('formData', JSON.stringify(formData));

      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setFormData({ name: '', email: '', message: '' });
        toast.success('Message sent successfully!');
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl  mt-10 rounded-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="contact-us text-indigo-500 bg-indigo-500 mt-2 rounded-lg shadow-md p-4">
        <h2 className="text-xl text-center font-semibold mb-2">Contact Us</h2>
        <p className="mx-auto text-center">Have a question or want to work together?</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message!"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`text-white shadow-xl hover:text-white hover:bg-indigo-600 rounded-full font-semibold px-4 py-2 transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        <Toaster />
      </div>
    </div>
  );
}

export default ContactUs;
