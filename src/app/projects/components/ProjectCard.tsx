"use client";
import Link from "next/link";
import clsx from "clsx";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import Image from "next/image";
const ProjectCard = ({
  github,
  project_title,
  description,
  project_image,
  icons,
  view,
}: {
  github?: string;
  view?: string;
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
                {github && (
                  <Link href={github} target="_blank">
                    <FaGithub size={50} className="opacity-100" />
                  </Link>
                )}
                {view && (
                  <Link href={view} target="_blank">
                    <FaEye size={50} className="opacity-100" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <Image
            src={project_image}
            alt={project_title}
            className="rounded-t-md"
            width={500}
            height={30}
          />
        </div>
        <div className="p-5 bg-black rounded-b-md">
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold ">
            {project_title}
          </h3>
          <p className="lg:text-sm text-xs py-5 text-justify">{description}</p>
          <div className="flex gap-3 text-xl py-3">{icons}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
