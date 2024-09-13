"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

interface FeatureSectionProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
}

const FeatureSection = ({
  title,
  description,
  imgSrc,
  imgAlt,
  reverse = false,
}: FeatureSectionProps) => {
  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
          reverse ? "md:flex md:flex-row-reverse" : ""
        }`}
      >
        {/* Image section */}
        <div className="relative w-full h-80 rounded-lg overflow-hidden lg:h-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text section */}
        <div>
          <h2 className="text-3xl font-bold text-secondary md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-secondary">{description}</p>

          <a
            href="#"
            className="mt-6 inline-flex items-center text-primary hover:underline font-medium text-md"
          >
            <span>Learn more</span>
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default FeatureSection;
