"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs
} from "react-icons/fa";

import {
  BsGithub
} from "react-icons/bs";

import {
  SiTailwindcss, 
  SiNextdotjs, 
  SiPostman, 
  SiPostgresql, 
  SiMongodb, 
  SiTypescript,
  SiExpress
} from "react-icons/si";

const about = {
  title: "About me",
  desc: "A Passionate Full stack developer skilled in ReactJs, NodeJs, NextJs, Non Relational and Relational Databases. Apart from Web Technologies, i am doing programming in different languages like C, Java, Python etc",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ramkrishna Maity",
    },
    {
      fieldName: "Email",
      fieldValue: "ramkrishnamaity4146@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9832804146",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali",
    },
    {
      fieldName: "Address",
      fieldValue: "Saltlake, Kolkata, West Bengal, India",
    }
  ]
};

const experience = [
  {
    company: "Webhibe Technologies.",
    position: "Jr MERN Stack Developer",
    duration: "Janury 2024 - Present"
  },
  {
    company: "Freelancing",
    position: "Full Stack Developer",
    duration: "2023 - Present"
  }
];

const education = [
  {
    institute: "GMIT",
    degree: "Bachelor in Technology",
    duration: "2020 - 2024"
  },
  {
    institute: "Sevayatan Vidyalaya",
    degree: "Higher Secondary Education",
    duration: "2018 - 2020"
  },
  {
    institute: "Chichra High School",
    degree: "Secondary Education",
    duration: "2013 - 2018"
  }
];

const skills = [
  {
    icon: <FaReact />,
    name: "ReactJs"
  },
  {
    icon: <FaNodeJs />,
    name: "NodeJs"
  },
  {
    icon: <SiExpress />,
    name: "ExpressJs"
  },
  {
    icon: <SiNextdotjs />,
    name: "NextJs"
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB"
  },
  {
    icon: <SiPostgresql />,
    name: "Postgres"
  },
  {
    icon: <FaJs />,
    name: "JavaScript"
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript"
  },
  {
    icon: <FaJava />,
    name: "Java"
  },
  {
    icon: <FaHtml5 />,
    name: "Html 5"
  },
  {
    icon: <FaCss3 />,
    name: "Css 3"
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind"
  },
  {
    icon: <BsGithub />,
    name: "Git"
  },
  {
    icon: <SiPostman />,
    name: "Postman"
  }
];

const AboutPage = () => {
  return (
    <section className='w-full lg:py-10 py-5'>
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
          className='flex flex-col lg:flex-row gap-[30px] lg:gap-[60px]'
        >
          <TabsList className='flex flex-col h-max lg:h-[400px] justify-center w-full max-w-[380px] mx-auto lg:mx-0 gap-6'>
            <TabsTrigger defaultChecked value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='w-full'>

            {/* experience */}
            <TabsContent value='experience' className='w-full'>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                  {
                    experience.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-2 sm:px-10 rounded-xl flex flex-col items-center md:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center md:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/80'>{item.company}</p>
                        </div>
                      </li>;
                    })
                  }
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* education */}
            <TabsContent value='education' className='w-full'>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                  {
                    education.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 sm:px-10 rounded-xl flex flex-col items-center md:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center md:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/80'>{item.institute}</p>
                        </div>
                      </li>;
                    })
                  }
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* skills */}
            <TabsContent value='skills'>
              <ScrollArea className='h-[400px]'>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-[30px] gap-4'>
                  {
                    skills.map((item, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })
                  }
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* about */}
            <TabsContent value='about' className='w-full text-center lg:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{about.desc}</p>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0'>
                  {
                    about.info.map((item, index) => {
                      return <li key={index} className={`${index === about.info.length - 1 && "lg:col-span-2"} flex items-center justify-center lg:justify-start xs:gap-4 gap-2`}>
                        <span className='xs:text-base text-sm'>{item.fieldName}</span>
                        <span className='text-white/60 xs:text-base text-sm'>{item.fieldValue}</span>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutPage;