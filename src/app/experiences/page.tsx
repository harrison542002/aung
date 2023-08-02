"use client";

import React from "react";
import { motion } from "framer-motion";
import { leftslide, variant } from "../../util/animateVariants";
import {
  SiOpenai,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiNextdotjs,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { BsFiletypePhp, BsFillBootstrapFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";
import TypedHeading from "@/components/typeheading";

type Props = {};

const SkillIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="border-cyan-500 border-2 p-2 rounded-md text-cyan-500">
      {icon}
    </div>
  );
};

const SkillExpress = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="lg:text-7xl md:text-6xl text-5xl flex justify-center items-center border-gray-900 border-2 p-2 rounded-md text-white bg-black aspect-square hover:bg-white hover:text-black transition-all duration-500">
      {icon}
    </div>
  );
};

const ExperienceCard = ({
  description,
  job_title,
  icons,
}: {
  description: string;
  job_title: string;
  icons: React.ReactNode;
}) => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-md shadow-md border">
      <p className="text-justify lg:text-sm md:text-sm text-xs">
        {description}
      </p>
      <h2 className="font-semibold lg:text-2xl md:text-xl text-lg py-5">
        {job_title}
      </h2>
      <div className="text-xl flex gap-5">{icons}</div>
      <div>
        <p className="text-gray-500 text-xs pt-5">Dec 2022 - Apr 2023</p>
      </div>
    </div>
  );
};

function About({}: Props) {
  return (
    <div className="lg:mx-20 mx-10 py-10">
      <TypedHeading heading="Explores What I Have Done" />
      <motion.div
        transition={{ duration: 0.5, delay: 0.02 }}
        variants={variant}
        initial="initialState"
        animate="animateState"
      >
        <div className="py-5">
          <h2 className="text-cyan-500 font-bold">Career Experiences</h2>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 py-5">
            <ExperienceCard
              description="As a technology associate at Lithan, I am responsible to do R&D of how
        to integrate OpenAI API into product management system along with PHP.
        Beyond that, I am also responsible to create the product management
        system from scratch with my teammate."
              job_title="Software Technology Associate"
              icons={
                <>
                  <SkillIcon icon={<BsFiletypePhp />} />
                  <SkillIcon icon={<SiOpenai />} />
                  <SkillIcon icon={<GrMysql />} />
                </>
              }
            />
            <ExperienceCard
              description="As a NodeJS Backend Developer in PathwayPlus, I am responsible
            to create a NodeJS backend engine along with Express and MongoDB
            to manage proofreading sessions for different users.
            Furthermore, APIs for admin panel are also implementated."
              job_title="NodeJS Backend Developer"
              icons={
                <>
                  <SkillIcon icon={<SiExpress />} />
                  <SkillIcon icon={<SiMongodb />} />
                  <SkillIcon icon={<SiVercel />} />
                </>
              }
            />
          </div>
        </div>
        <div className="py-5">
          <h2 className="text-cyan-500 font-bold">Skills I Have</h2>
          <div className="lg:grid-cols-6 md:grid-cols-4 grid-cols-3 grid gap-10 py-5 ">
            <SkillExpress icon={<FaReact />} />
            <SkillExpress icon={<SiNextdotjs />} />
            <SkillExpress icon={<SiExpress />} />
            <SkillExpress icon={<SiMongodb />} />
            <SkillExpress icon={<GrMysql />} />
            <SkillExpress icon={<SiSpring />} />
            <SkillExpress icon={<SiTailwindcss />} />
            <SkillExpress icon={<BsFillBootstrapFill />} />
            <SkillExpress icon={<SiTypescript />} />
            <SkillExpress icon={<SiJavascript />} />
            <SkillExpress icon={<FaHtml5 />} />
            <SkillExpress icon={<FaCss3Alt />} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
