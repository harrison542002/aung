"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { leftslide, rightslide } from "../util/animateVariants";
import SpacingLayout from "@/components/SpacingLayout";
import TypedHeading from "@/components/typeheading";

const EduCard = ({
  img,
  school,
  date,
  certificate,
}: {
  img: string;
  school: string;
  date: string;
  certificate: string;
}) => {
  return (
    <div className="bg-white py-5 px-3 border rounded-lg shadow-sm">
      <div className="mb-2">
        <Image
          src={img}
          width={50}
          height={50}
          alt="Lithan"
          className="rounded-full border shadow-sm"
        ></Image>
      </div>
      <h3 className="lg:text-sm text-xs font-semibold">{school}</h3>
      <h4 className="lg:text-lg text-base py-1">{certificate}</h4>
      <p className="text-gray-400 text-xs pt-1">{date}</p>
    </div>
  );
};

const Home = () => {
  return (
    <SpacingLayout>
      <div className="py-10">
        <TypedHeading heading="Hi, My Name is Aung Thiha Htun" />
        <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-1 py-10 gap-5">
          <div className="col-span-2">
            <div className="w-60">
              <motion.div
                className="relative aspect-square"
                transition={{ duration: 0.8, delay: 0.5 }}
                variants={leftslide}
                initial={"initialState"}
                animate={"animateState"}
              >
                <Image
                  src={"/img/profile.jpg"}
                  alt="Aung Thiha Htun"
                  className="absolute rounded-md shadow-xl border"
                  fill
                />
              </motion.div>
            </div>
            <motion.p
              transition={{ duration: 0.8, delay: 0.5 }}
              variants={rightslide}
              initial={"initialState"}
              animate={"animateState"}
              className="lg:py-10 md:py-8 py-5 text-sm text-justify"
            >
              <b className="block text-base">An Ambitious Youth On CS</b> I have
              been working and learning on software dev since 2020 and created
              lots of personal, academic and commercial projects. As a person, I
              am optimistic, passionate, fast to learn and timely on deadline.
            </motion.p>
          </div>
          <div className="col-span-4 lg:text-xl md:text-lg text-base font-light">
            <motion.div
              transition={{ duration: 0.8, delay: 0.5 }}
              variants={rightslide}
              initial={"initialState"}
              animate={"animateState"}
              className="bg-slate-50 rounded-md p-5 border shadow-md"
            >
              <div className="py-2 space-y-2">
                <EduCard
                  img="/img/edu/Lithan.png"
                  school="Lithan Academy"
                  certificate="Higher National Diploma In Computing"
                  date="Mar 2022 - Present"
                />
                <EduCard
                  img="/img/edu/myanmar.jpg"
                  school="Min Myanmar"
                  certificate="High School Degree"
                  date="2019 - 2020"
                />
              </div>
              <Link href="/experiences">
                <button className="shadow-md lg:p-3 md:p-2 p-2 lg:text-lg md:text-base text-sm bg-slate-950 my-5 text-slate-100 rounded-md hover:text-cyan-400 transition-all duration-700">
                  <p className="inline-block">Explore My Experiences</p>
                  <BsArrowUpRightSquare className="inline-block ml-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </SpacingLayout>
  );
};

export default Home;
