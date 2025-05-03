import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { products } from "../constant/products";

const Products = () => {
  // const products = [
  //   {
  //     name: "Enterprise Suite",
  //     description: "Complete business management solution",
  //     price: "$999/mo",
  //     features: [
  //       "Advanced Analytics",
  //       "Team Collaboration",
  //       "Custom Integrations",
  //       "24/7 Support",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  //   },
  //   {
  //     name: "Analytics Pro",
  //     description: "Data visualization and insights",
  //     price: "$499/mo",
  //     features: [
  //       "Real-time Analytics",
  //       "Custom Dashboards",
  //       "Data Export",
  //       "API Access",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  //   },
  //   {
  //     name: "Security Plus",
  //     description: "Enhanced security solutions",
  //     price: "$799/mo",
  //     features: [
  //       "Advanced Encryption",
  //       "Threat Detection",
  //       "Regular Audits",
  //       "Compliance Reports",
  //     ],
  //     image:
  //       "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
  //   },
  // ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-[#18995d] mb-4">
              Our Products
            </h1>
            <div className="rounded-xl shadow-md p-6 md:p-10 transition-all duration-300 hover:shadow-lg bg-white">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our products are thoughtfully designed with eco-conscious
                materials that are kind to the planet, yet strong enough to hold
                your leafy companions with love.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                They're lightweight, long-lasting, and crafted to reduce plastic
                waste without compromising on beauty or functionality. Whether
                you're a first-time plant parent or a seasoned grower, choosing
                one of these is more than a purchase — it's your step towards a
                greener, kinder tomorrow.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#ffde59] rounded-full p-2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#18995d] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-[#18995d] mb-6">
                    {product.price}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <ArrowRight className="w-4 h-4 text-[#18995d] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#18995d] text-white py-2 px-4 rounded-md hover:bg-[#13844d] transition-colors"
                  >
                    <a href={`https://wa.me/918090167117?text=Hi%2C%20I%27m%20interested%20in%20your%20product%20name:${product.name}%20Price:${product.price}%20${product.image}`}>
                      Order Now
                    </a>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
