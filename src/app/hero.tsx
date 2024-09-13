"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FaArrowRightLong } from "react-icons/fa6";

const fadeInUp = {
  initial: { opacity: 0, y: 20, transition: { duration: 0.8 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <section className="relative h-screen z-10">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-2]">
        <Image
          src="/img/hero.png"
          alt="Remote teamwork concept illustration"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          loading="eager"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        className="mx-auto max-w-screen-xl h-screen flex items-center px-4 py-32 mobile:px-6 lg:px-8"
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-xl">
          {/* Title */}
          <motion.h1
            className="text-3xl font-extrabold text-white mobile:text-4xl md:text-5xl"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Instant collaboration for remote teams
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 max-w-lg text-white mobile:text-sm md:text-lg/relaxed font-light"
            variants={fadeInUp}
            transition={{ delay: 0.5 }}
          >
            All-in-one place for your remote team to chat, collaborate, and
            track project progress.
          </motion.p>

          {/* Input and Button */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 text-center"
            variants={fadeInUp}
            transition={{ delay: 0.7 }}
          >
            {/* Input with Icon */}
            <Input
              className="w-full md:w-96"
              label="email"
              placeholder="Enter your email"
              icon={<FaArrowRightLong />}
              aria-label="Enter your email address"
            />

            {/* Call-to-action Button */}
            <Button
              label="Get Early Access"
              aria-label="Get early access to the platform"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
