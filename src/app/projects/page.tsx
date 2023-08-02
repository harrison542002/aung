"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { variant } from "../../util/animateVariants";
import Link from "next/link";
import ReactTyped from "react-typed";
import clsx from "clsx";
import { SiTailwindcss, SiJavascript, SiJquery } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";

import { FaGithub, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import SpacingLayout from "@/components/SpacingLayout";
type Props = {};

const ProjectCard = ({
  github,
  project_title,
  description,
  project_image,
  icons,
}: {
  github: string;
  project_title: string;
  description: string;
  project_image: string;
  icons: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "20% 0% 0% 0%" });
  return (
    <div>
      <div
        ref={ref}
        className={clsx(
          `text-slate-100 rounded-md border shadow-md group transition-all duration-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`
        )}
      >
        <div className="relative">
          <div className="absolute bg-black rounded-t-md w-full h-full group-hover:opacity-30 opacity-0 transition-all duration-500">
            <div className="text-white flex justify-center items-center h-full w-full">
              <div>
                <Link href={github} target="_blank">
                  <FaGithub size={50} className="opacity-100" />
                </Link>
              </div>
            </div>
          </div>
          <img
            src={project_image}
            alt={project_title}
            className="rounded-t-md"
          />
        </div>
        <div className="p-5 bg-black rounded-b-md">
          <h3 className="text-2xl font-semibold">{project_title}</h3>
          <p className="text-sm py-5">{description}</p>
          <div className="flex gap-3 text-xl py-3">{icons}</div>
        </div>
      </div>
    </div>
  );
};

const Projects = async (props: Props) => {
  return (
    <SpacingLayout>
      <div className="py-10">
        <h1 className="lg:text-6xl text-5xl font-extrabold">
          <ReactTyped
            strings={["Projects I Have Accomplished"]}
            typeSpeed={50}
            backSpeed={50}
            showCursor={false}
          />
        </h1>
        <div className="py-5">
          <motion.h2
            transition={{ duration: 0.8, delay: 0.5 }}
            variants={variant}
            initial={"initialState"}
            animate={"animateState"}
            className="text-cyan-500 font-bold"
          >
            Personal And Academic Projects
          </motion.h2>
          <div className="py-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
            <ProjectCard
              project_title="Jumpstart E-commerce"
              description="This project is a real-world e-commerce website in which customer can
    order and add products into cart. Furthermore, admin and organization
    dashboards are also implemented in order to manage products and
    brands."
              github="https://github.com/harrison542002/jumpstart-ecommerce"
              project_image={"/img/project-image/jumpstart.png"}
              icons={
                <>
                  <FaReact />
                  <SiTailwindcss />
                  <BiLogoSpringBoot />
                  <BiLogoTypescript />
                  <GrMysql />
                </>
              }
            />
            <ProjectCard
              project_title="Car Sale Portal"
              description="A portal for user to post new car for sale and get appointment. Admin panel is included for assign admin authority to user and manage car sale, manage appoinment as well as transaction."
              github="https://github.com/harrison542002/car-sale-spring-boot"
              project_image={"/img/project-image/carsale.png"}
              icons={
                <>
                  <SiTailwindcss />
                  <SiJavascript />
                  <BiLogoSpringBoot />
                  <GrMysql />
                </>
              }
            />
            <ProjectCard
              project_title="Job Portal"
              description="This project allows user to search, apply jobs and message to each other. STOMP which is sub-protocol of Websocket is used in real-time messaging feature."
              github="https://github.com/harrison542002/JobPortal-spring-project"
              project_image={"/img/project-image/jobportal.png"}
              icons={
                <>
                  <SiJquery />
                  <BsFillBootstrapFill />
                  <BiLogoSpringBoot />
                </>
              }
            />
            <ProjectCard
              project_title="Merry Meal (team project)"
              description="This project is an e-commerce project in which user can order foods. Each role of user will posses unique dashboard. In the team, I performs as a leader."
              github="https://github.com/Khushboo004/Merry-Meal"
              project_image={"/img/project-image/merrymeal.png"}
              icons={
                <>
                  <FaReact />
                  <SiTailwindcss />
                  <BiLogoTypescript />
                  <BiLogoSpringBoot />
                  <GrMysql />
                </>
              }
            />
            <ProjectCard
              project_title="Know Your Neighbourhood"
              description="This project focuses on demonstration of SpringBoot API on how user can authenticate based on JWT token-based authentication and with OAuth2 servers authentication along with React Frontend Application."
              github="https://github.com/harrison542002/know-your-neighbour-bk"
              project_image={"/img/project-image/kn.png"}
              icons={
                <>
                  <FaHtml5 />
                  <FaCss3Alt />
                  <SiJquery />
                </>
              }
            />
            <ProjectCard
              project_title="ABC Learning Center"
              description="This project focus on frontend design only with raw HTML, CSS and JQuery. The website allows student to view avaliable courses and schedules."
              github="https://github.com/harrison542002/abc-learning-center"
              project_image={"/img/project-image/abclearning.png"}
              icons={
                <>
                  <FaHtml5 />
                  <FaCss3Alt />
                  <SiJquery />
                </>
              }
            />
          </div>
        </div>
      </div>
    </SpacingLayout>
  );
};

export default Projects;
