/* eslint-disable react/no-unescaped-entities */

import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      icon: <FaEnvelope className="text-4xl text-cyan-500" />,
      title: "Email",
      value: "rishabh1259@gmail.com",
      link: "mailto:rishabh1259@gmail.com"
    },
    {
      icon: <FaPhone className="text-4xl text-cyan-500" />,
      title: "Phone",
      value: "+91 9661590417",
      link: "tel:+919661590417"
    },
    {
      icon: <FaLinkedin className="text-4xl text-cyan-500" />,
      title: "LinkedIn",
      value: "Rishabh Kumar",
      link: "https://www.linkedin.com/in/rishabh-kumar-472563272/"
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-cyan-500" />,
      title: "Address",
      value: "Kumaraswamy Layout, Bengaluru, Karnataka - 560078",
      link: "https://maps.google.com"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendEmail(formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div name="Contact" className="w-full h-full text-white relative z-10 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
          <p className="py-6 text-gray-400">Feel free to reach out to me for any opportunities or just to say hi!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => (
            <a 
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  {contact.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cyan-500">{contact.title}</h3>
                  <p className="text-gray-300 mt-2">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-cyan-500 mb-6">Send me a message</h3>
            <form className="space-y-6" action="https://getform.io/f/allymvna"
            method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-bold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
