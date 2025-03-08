import { motion } from "framer-motion";

const Achievements = () => {
  const achievements = [
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741421000/11_d38rft.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420879/1_mnpnak.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420878/15_kkevws.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420878/2_vhlxew.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420877/16_aw3zre.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/6_wluod0.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/3_mfjkbk.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/5_rauhtv.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420876/4_apiigu.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420875/7_si6pxd.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420875/8_hvjjc0.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420874/9_dywqim.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420873/10_uzgnc0.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420874/14_ommunx.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420873/13_bzzwtp.png",
      description: "Some description",
    },
    {
      image:
        "https://res.cloudinary.com/dgwnivpsz/image/upload/v1741420873/12_taac9v.png",
      description: "Some description",
    },
  ];
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Milestones
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating milestones that showcase our commitment to excellence
              and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 items-center">
            {achievements.map(
              (achievement: { image: string; description: string }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative group"
                >
                  {/* Card with Image */}
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
                    <img
                      src={achievement.image}
                      alt="Team collaboration"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center p-4">
                      <p className="text-lg font-semibold">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
