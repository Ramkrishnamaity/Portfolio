"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  BsArrowUpRight,
  BsGithub
} from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/project/WorkSliderBtns";

const projects = [
  {
    no: "01",
    projectName: "RhythmChat",
    projectDesc: "A Real Time Chat Application (fully responsive) with audio call, video call and status share facilities.",
    techs: ["ReactJs", "NodeJs", "PeerJs", "Socket.io"],
    image: "/assets/projects/chatapp.png",
    repoUrl: "https://github.com/Ramkrishnamaity/rhythmchat-app-server/",
    liveUrl: "https://chat.ramkrishna.site/"
  },
  {
    no: "02",
    projectName: "Portfolio",
    projectDesc: "This is my Personal Portfolio (fully responsive) where you are currently exploring my work and achievements",
    techs: ["NextJs", "Shadcn UI", "Tailwind CSS"],
    image: "/assets/projects/portfolio.png",
    repoUrl: "https://github.com/Ramkrishnamaity/Portfolio/",
    liveUrl: "https://portfolio.ramkrishna.site/"
  },
  {
    no: "03",
    projectName: "NPM Plugin",
    projectDesc: "Npm package that provides ReactJs, NodeJs, NextJS project template in both JavaScript And TypeScript language that contains a very useful file structure with important configurations.",
    techs: ["NodeJs"],
    image: "/assets/projects/plugin.png",
    repoUrl: "https://github.com/Ramkrishnamaity/web-starter-kit/",
    liveUrl: "https://www.npmjs.com/package/web-plugin-kit/"
  }
];

const ProjectsPage = () => {

  const [project, setProject] = useState(projects[0]);

  function handleSlideChange(swiper: { activeIndex: any }) {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return (
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-[30px] py-5'>
        <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
          <div className='flex flex-col gap-[30px] h-[50%]'>

            {/* outline no */}
            <div className='text-8xl leading-none font-extrabold'>{project.no}
            </div>

            {/* title */}
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize'>{project.projectName}
            </h2>

            {/* desc */}
            <p className='text-white/60'>{project.projectDesc}</p>

            {/* techs */}
            <ul className='flex gap-4 flex-wrap'>
              {
                project.techs.map((item, index) => {
                  return <li key={index} className='text-xl text-accent'>
                    {item}
                    {index !== project.techs.length - 1 && ","}
                  </li>;
                })
              }
            </ul>

            <div className='border border-white/20'></div>

            {/* links */}
            <div className='flex items-center gap-4'>
              <Link href={project.liveUrl}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Url</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.repoUrl}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsGithub className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repo Url</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>

          </div>
        </div>
        <div className='w-full lg:w-[50%]'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className='lg:h-[520px]'
            onSlideChange={handleSlideChange}
          >
            {
              projects.map((project, index) => {
                return <SwiperSlide key={index}>
                  <div className="relative h-[460px] group flex justify-center items-center bg-pink-50/20">
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-cover' alt='Project Image' />
                    </div>
                  </div>
                </SwiperSlide>;
              })
            }
            {/* Slider Buttons */}
            <WorkSliderBtns
              containerStyle='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none'
              btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
            />
          </Swiper>

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;