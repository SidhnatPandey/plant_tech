import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Teams = () => {
  const team = [
    {
      name: 'Himanshi Kushwaha',
      role: 'Founder',
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418952/founder_qjkobi.png",
      socials: {
        linkedin: 'https://www.linkedin.com/in/himanshi-kushwaha/',
        github: '#',
        email: '2008himanshi@gmail.com',
      },
    },
    {
      name: 'Harshit Sengar',
      role: 'Research & Development',
      image: 'https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418953/developer_qy4k1f.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/harshitsengar/',
        github: 'https://github.com/Hrshitsngr',
        email: 'harshitsengar8545@gmail.com',
      },
    },
    // {
    //   name: 'Devendra Srivastava',
    //   role: 'Research & Development',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    //   socials: {
    //     linkedin: '#',
    //     github: '#',
    //     email: 'devendra@example.com',
    //   },
    // },
    {
      name: 'Sidhant Pandey',
      role: 'Tech Development',
      image: 'https://res.cloudinary.com/dgwnivpsz/image/upload/v1746272801/two_jbryic.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/sidhant-pandey01/',
        github: 'https://github.com/SidhnatPandey',
        email: 'sidhantpandeynp6@gmail.com',
      },
    },
    {
      name: 'Kanchan Kushwaha',
      role: 'PR Media Associate',
      image: 'https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418953/mentor_jge1f6.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/alokpandeyentrepreneur/',
        github: '#',
        email: 'iteche@rediffmail.com',
      },
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-4 text-[#18995d]">Our Team</h1>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-[#18995d] bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#ffde59] transition-colors"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#ffde59] transition-colors"
                    >
                      <Github />
                    </a>
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="text-white hover:text-[#ffde59] transition-colors"
                    >
                      <Mail />
                    </a>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-[#18995d]">{member.name}</h3>
                  <p className="text-gray-700">{member.role}</p>
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
