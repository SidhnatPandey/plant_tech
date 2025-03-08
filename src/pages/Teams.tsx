import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Teams = () => {
  const team = [
    {
      name: 'Himanshi Kushwaha',
      role: 'CEO & Founder',
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418952/founder_qjkobi.png",
      socials: {
        linkedin: 'https://www.linkedin.com/in/himanshi-kushwaha/',
        github: '#',
        email: '2008himanshi@gmail.com',
      },
    },
    {
      name: 'Alok Pandey',
      role: 'Mentor',
      image: 'https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418953/mentor_jge1f6.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alokpandeyentrepreneur/',
        github: '#',
        email: 'iteche@rediffmail.com',
      },
    },
    {
      name: 'Harshit Sengar',
      role: 'Product Development Lead',
      image: 'https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418953/developer_qy4k1f.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/harshitsengar/',
        github: 'https://github.com/Hrshitsngr',
        email: 'harshitsengar8545@gmail.com',
      },
    },
    {
      name: 'Devendra',
      role: 'R & D Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      socials: {
        linkedin: '#',
        github: '#',
        email: 'devendra@example.com',
      },
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the talented individuals who make our company exceptional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={member.socials.linkedin}
                      className="text-white hover:text-indigo-200 transition-colors"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href={member.socials.github}
                      className="text-white hover:text-indigo-200 transition-colors"
                    >
                      <Github />
                    </a>
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="text-white hover:text-indigo-200 transition-colors"
                    >
                      <Mail />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;