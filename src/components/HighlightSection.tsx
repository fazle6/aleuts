"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Highlight = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative h-64 sm:h-80 lg:h-full w-full lg:ml-24 lg:mr-[-100px] lg:order-last"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            alt="Team chat highlight"
            src="/img/demo.png"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        {/* Text section */}
        <div className="relative pl-4 lg:py-24 z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Chats for your distributed teams
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Team combines the immediacy of real-time chat with an email
            threading model. With Team, you can catch up on important
            conversations while ignoring irrelevant ones.
          </motion.p>

          <a
            href="#"
            className="mt-8 inline-flex items-center rounded text-sm font-medium underline text-primary hover:no-underline focus:outline-none"
          >
            <span className="pr-2">Learn more</span>
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
