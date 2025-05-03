import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Achievements = () => {
  const achievements = [
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741421000/11_d38rft.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420879/1_mnpnak.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420878/15_kkevws.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420878/2_vhlxew.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420877/16_aw3zre.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/6_wluod0.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/3_mfjkbk.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/5_rauhtv.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/4_apiigu.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420875/7_si6pxd.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420875/8_hvjjc0.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420874/9_dywqim.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420873/10_uzgnc0.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420874/14_ommunx.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420873/13_bzzwtp.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420873/12_taac9v.png",
      description: "Some description",
    },
  ];

  const newspaperCuttings = [
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741421000/11_d38rft.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420879/1_mnpnak.png",
      description: "Some description",
    },
    {
      image: "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420878/2_vhlxew.png",
      description: "Some description",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % newspaperCuttings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Newspaper Cuttings Section */}
      <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#18995d] mb-4">
            Newspaper Cuttings
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Glimpses of our journey through the eyes of the press.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg h-[500px]">
          <AnimatePresence custom={direction}>
            <motion.img
              key={current}
              src={newspaperCuttings[current].image}
              alt={newspaperCuttings[current].description}
              custom={direction}
              initial={{ x: 300 * direction, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300 * direction, opacity: 0 }}
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>

      {/* Milestones Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-[#18995d] mb-4">
              Our Milestones
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Celebrating milestones that showcase our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={achievement.image}
                  alt={achievement.description}
                  className="object-cover w-full h-64"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
