"use client";

import React from "react";
import { motion } from "framer-motion";
import { variant } from "../../util/animateVariants";
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
  SiReact,
} from "react-icons/si";
import {
  BsArrowUpRightSquare,
  BsFiletypePhp,
  BsFillBootstrapFill,
} from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";

import "react-multi-carousel/lib/styles.css";
import TypedHeading from "@/components/typeheading";
import SpacingLayout from "@/components/SpacingLayout";
import Button from "../../components/Button";

type Props = {};

const icons = [
  <FaReact />,
  <SiNextdotjs />,
  <SiExpress />,
  <SiMongodb />,
  <GrMysql />,
  <SiSpring />,
  <SiTailwindcss />,
  <BsFillBootstrapFill />,
  <SiTypescript />,
  <SiJavascript />,
  <FaHtml5 />,
  <FaCss3Alt />,
];

const SkillIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="border-cyan-500 border-2 p-2 rounded-md text-cyan-500">
      {icon}
    </div>
  );
};

const SkillExpress = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="lg:text-7xl md:text-6xl text-5xl flex justify-center items-center border-gray-900 border-2  rounded-md text-white bg-black aspect-square hover:bg-white hover:text-black transition-all duration-500">
      {icon}
    </div>
  );
};

const ExperienceCard = ({
  description,
  job_title,
  company,
  icons,
  period,
}: {
  description: string;
  job_title: string;
  company: string;
  icons: React.ReactNode;
  period: string;
}) => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 rounded-md shadow-md border">
      <h2 className="font-semibold lg:text-2xl md:text-xl text-lg">
        {job_title}
      </h2>
      <h3 className="lg:text-xl md:text-lg">{company}</h3>
      <p className="text-justify lg:text-sm md:text-sm text-xs py-5">
        {description}
      </p>
      <div className="text-xl flex gap-5">{icons}</div>
      <div>
        <p className="text-gray-500 text-xs pt-5">{period}</p>
      </div>
    </div>
  );
};

const experiences = [
  {
    description:
      "Responsible for the developmenet of full stack applications and communicating with different clients to identify requirements. The areas of project comprise of e-commerce, LMS, Video Streaming, CMS and so on.",
    job_title: "Full Stack Software Developer",
    icons: (
      <>
        <SkillIcon icon={<BsFiletypePhp />} />
        <SkillIcon icon={<SiExpress />} />
        <SkillIcon icon={<SiReact />} />
        <SkillIcon icon={<GrMysql />} />
      </>
    ),
    period: "Aug 2023 - Present",
    company: "Viabells",
  },
  {
    description:
      "As a technology associate in Lithan, I am responsible to do R&D of how to integrate OpenAI API into product management system along with PHP and MySQL. Beyond that, I am also responsible to create the product management system from scratch with my teammate.",
    job_title: "Software Technology Associate",
    icons: (
      <>
        <SkillIcon icon={<BsFiletypePhp />} />
        <SkillIcon icon={<SiOpenai />} />
        <SkillIcon icon={<GrMysql />} />
      </>
    ),
    period: "Apr 2023 - Jul 2023",
    company: "Lithan eduClass",
  },
];

function About({}: Props) {
  return (
    <SpacingLayout>
      <div className="py-10">
        <TypedHeading heading="Explores What I Have Done" />
        <motion.div
          transition={{ duration: 0.5, delay: 0.02 }}
          variants={variant}
          initial="initialState"
          animate="animateState"
        >
          <div className="py-5">
            <h2 className="text-cyan-500 font-bold">Career Experiences</h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10 py-5">
              {experiences.map((experience) => (
                <>
                  <ExperienceCard {...experience} />
                </>
              ))}
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-cyan-500 font-bold">Skills I Have</h2>
            <div className="xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-3 grid gap-10 py-5 ">
              {icons.map((icon) => (
                <>
                  <SkillExpress icon={icon} />
                </>
              ))}
            </div>
          </div>
          <div className="py-2 flex justify-center">
            <Button
              href="/projects"
              content={
                <>
                  <p className="inline-block">See My Projects</p>
                  <BsArrowUpRightSquare className="inline-block lg:ml-3 md:ml-2 ml-2" />
                </>
              }
            />
          </div>
        </motion.div>
      </div>
    </SpacingLayout>
  );
}

export default About;
