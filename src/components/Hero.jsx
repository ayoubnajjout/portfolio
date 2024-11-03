import React from "react";
import { Aura } from "./ui/aura";
import { Navbar } from "./ui/Navbar";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/FlipWords";

const words = ["Software Engineer", "Ai & Data Science Enthusiast"];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About me", link: "/about" },
  { name: "Tools", link: "/tools" },
  { name: "Projects", link: "/projects" },
];

export default function Hero() {
  return (
    <div className="flex flex-col">
      <Aura>
        <Navbar navItems={navItems} />
        <div className="flex flex-row">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-start justify-center px-4"
          >
            <div className="text-2xl md:text-5xl font-bold dark:text-white text-left">
              Hello , My name is Ayoub Najjout
            </div>
            <FlipWords className="text-2xl font-bold" words={words} /> <br />
          </motion.div>
          {/* <div className="p-10">3d model</div> */}
        </div>
      </Aura>
    </div>
  );
}
