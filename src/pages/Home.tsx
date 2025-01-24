import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Shield, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Innovation Meets Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transforming ideas into reality with cutting-edge solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold flex items-center mx-auto"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver excellence in every aspect of our work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-12 h-12" />,
                title: 'Innovation',
                description:
                  'Pushing boundaries with cutting-edge technology solutions',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Security',
                description:
                  'Your data protection is our top priority',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Team',
                description:
                  'Expert professionals dedicated to your success',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-indigo-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;