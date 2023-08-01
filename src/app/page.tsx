"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowUpRightSquare } from "react-icons/bs";
import ReactTyped from "react-typed";
import { variant, leftslide, rightslide } from "../util/animateVariants";
export default function Home() {
  const path = usePathname();
  return (
    <motion.div className="mx-10 py-10" key={path}>
      <motion.h1
        className="lg:text-6xl text-5xl font-extrabold"
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={variant}
        initial={"initialState"}
        animate={"animateState"}
        exit={"existState"}
      >
        <ReactTyped
          strings={["Hi, My Name is Aung Thiha Htun"]}
          typeSpeed={50}
          backSpeed={50}
          showCursor={false}
        />
      </motion.h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-1 py-10 gap-5">
        <motion.div
          className="col-span-2 relative aspect-square"
          transition={{ duration: 0.8, delay: 0.8 }}
          variants={leftslide}
          initial={"initialState"}
          animate={"animateState"}
          exit={"existState"}
        >
          <Image
            src={"/img/profile.jpg"}
            alt="Aung Thiha Htun"
            className="absolute rounded-md"
            fill
          />
        </motion.div>
        <div className="col-span-4 lg:text-2xl md:text-xl text-lg font-light">
          <motion.p
            transition={{ duration: 0.8, delay: 0.5 }}
            variants={rightslide}
            initial={"initialState"}
            animate={"animateState"}
            exit={"existState"}
            className="text-justify"
          >
            I have been working and learning on software dev since 2020 and
            created lots of personal, academic and commercial projects. As a
            person, I am optimistic, passionate, fast to learn and timely on
            deadline.
          </motion.p>
          <Link href="/experiences">
            <motion.button
              transition={{ duration: 0.8, delay: 0.5 }}
              variants={rightslide}
              initial={"initialState"}
              animate={"animateState"}
              exit={"existState"}
              className="p-5 bg-slate-950 my-5 text-slate-100 rounded-md hover:text-cyan-400 transition-all duration-700"
            >
              <p className="inline-block">Explore My Experiences</p>
              <BsArrowUpRightSquare className="inline-block ml-5" size={30} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
