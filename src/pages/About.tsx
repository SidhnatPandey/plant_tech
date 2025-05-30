import { motion } from "framer-motion";
import { Award, Target, TrendingUp } from "lucide-react";
import { vedios } from "../constant/Videos";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision to revolutionize the industry, we've grown
              from a small startup to a leading force in innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://res.cloudinary.com/dgwnivpsz/image/upload/v1741418954/Plantech_innovation_vo6z7o.png"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To deliver innovative solutions that empower businesses and
                  individuals to achieve their full potential.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the global leader in technological innovation and
                  digital transformation.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { icon: <Award />, label: "10+ Awards" },
                  { icon: <Target />, label: "95% Success" },
                  { icon: <TrendingUp />, label: "Growing" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="text-green-600 flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <p className="text-sm font-semibold">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="grid md:grid-cols-3 gap-6 m-10">
          {vedios.map((vedio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl shadow-md overflow-hidden"
            >
              <iframe
                width="100%"
                height="250"
                src={`https://www.youtube.com/embed/${vedio.split("/").pop()}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
