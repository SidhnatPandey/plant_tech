// import { motion } from 'framer-motion';
// import { Mail, MapPin, Phone } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="min-h-screen pt-16">
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Get in Touch
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Have questions? We'd love to hear from you. Send us a message and
//               we'll respond as soon as possible.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-gray-50 p-8 rounded-xl"
//             >
//               <form className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700 mb-1"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows={4}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
//                   ></textarea>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
//                 >
//                   Send Message
//                 </motion.button>
//               </form>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-8"
//             >
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Address</h3>
//                   <p className="mt-1 text-gray-600">
//                     123 Innovation Street
//                     <br />
//                     Tech City, TC 12345
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <Phone className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Phone</h3>
//                   <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <Mail className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Email</h3>
//                   <p className="mt-1 text-gray-600">contact@company.com</p>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <img
//                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
//                   alt="Office"
//                   className="w-full h-64 object-cover rounded-lg"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

// import { motion } from 'framer-motion';
// import { Mail, MapPin, Phone } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="min-h-screen pt-16">
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Have questions? We'd love to hear from you. Fill out the form below, and we'll respond as soon as possible.
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Google Form Embed */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-gray-50 p-8 rounded-xl"
//             >
//               <iframe
//                 src="https://docs.google.com/forms/d/e/1FAIpQLSdBGsTkEvNmEU3gb1qoQzIh9nMGV2y7-y7ykZal6CuKRa7gdA/viewform?embedded=true"
//                 width="100%"
//                 height="500px"
//                 frameBorder="0"
//                 marginHeight={0}
//                 marginWidth={0}
//                 className="rounded-md"
//               >
//                 Loading…
//               </iframe>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//               className="space-y-8"
//             >
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Address</h3>
//                   <p className="mt-1 text-gray-600">
//                     123 Innovation Street
//                     <br />
//                     Tech City, TC 12345
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <Phone className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Phone</h3>
//                   <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <Mail className="w-6 h-6 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Email</h3>
//                   <p className="mt-1 text-gray-600">contact@company.com</p>
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <img
//                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
//                   alt="Office"
//                   className="w-full h-64 object-cover rounded-lg"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const scriptURL = "https://script.google.com/macros/s/AKfycbzd8D9Vzab9cC-0tdCSlC2Nfzwwby_p8Oj-rSy65xT-TQRDmGSMLbOCe6f-YIBOFX6o/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error occurred while sending.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Submission */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-xl shadow">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18995d] focus:border-[#18995d]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18995d] focus:border-[#18995d]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#18995d] focus:border-[#18995d]"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#18995d] text-white py-2 px-4 rounded-md hover:bg-[#157f4d] transition-colors"
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
                {status && <p className="text-center text-sm mt-2 text-gray-700">{status}</p>}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#18995d]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-700">+91 8090167117</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#18995d]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-700">plantechinn@gmail.com</p>
                </div>
              </div>

              <div className="mt-8">
                <img src="src/assets/contact.png" alt="Office" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
