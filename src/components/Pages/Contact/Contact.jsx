import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

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

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      localStorage.setItem('formData', JSON.stringify(formData));

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
    <div className="mx-auto mt-10 bg-gradient-to-r from-slate-300 via-slate-600 to-slate-900  max-w-sm px-6 py-8  rounded-2xl shadow-xl">
      <div className="text-center text-slate-50 mb-6">
        <h2 className="text-3xl mb-2">Contact Us</h2>
        <p className="text-lg">Have a question or want to work together?</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Full Name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@email.com"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`text-black bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}

export default ContactUs;
