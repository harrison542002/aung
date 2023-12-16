"use client";

import { variant } from "../../util/animateVariants";
import { motion } from "framer-motion";
import {
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
} from "react-icons/si";
import { BsArrowUpRightSquare, BsFillBootstrapFill } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import SpacingLayout from "@/components/SpacingLayout";
import TypedHeading from "@/components/typeheading";
import ProjectCard from "./components/ProjectCard";
import Button from "../../components/Button";
type Props = {};

const Projects = (props: Props) => {
  return (
    <SpacingLayout>
      <div className="py-10">
        <TypedHeading heading="Projects I Have Accomplished" />
        <div className="py-5">
          <motion.h2
            transition={{ duration: 0.8, delay: 0.5 }}
            variants={variant}
            initial={"initialState"}
            animate={"animateState"}
            className="text-cyan-500 font-bold"
          >
            Personal and Academic Projects
          </motion.h2>
          <div className="py-5 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
            <ProjectCard
              project_title="Whizz Web Landing Page"
              description="This project is to design a company landing page for a service provider called Whizz Web. Animation and cursor effects were implemented to interate with visitiors."
              view="https://whizzweb.tech/"
              project_image={"/img/project-image/whizzweb.tech.png"}
              icons={
                <>
                  <SiNextdotjs />
                  <FaReact />
                  <SiTailwindcss />
                  <BiLogoTypescript />
                </>
              }
            />
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
              project_title="Portfolio With Blogging"
              description="This project is built using NextJS. The features offered by this app are Visual Editing with Tina CMS, Content storage in Markdown files, Animated Divs with Framer Motion, Typing effect on sub titles."
              github="https://github.com/harrison542002/aung"
              project_image={"/img/project-image/portfolio.png"}
              icons={
                <>
                  <SiNextdotjs />
                  <FaReact />
                  <SiTailwindcss />
                  <BiLogoTypescript />
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
          </div>
          <div className="py-2 flex justify-center">
            <Button
              href="/contact"
              content={
                <>
                  <p className="inline-block">Let's Discuss With Me!</p>
                  <BsArrowUpRightSquare className="inline-block lg:ml-3 md:ml-2 ml-2" />
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
