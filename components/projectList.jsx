import React from "react";
import Image from "next/image";
import factVImg from "@/public/images/fact-v.png";
import dinnerImg from "@/public/images/whatsForDinner.png";
import byteImg from "@/public/images/byteSizeBlog.png";
import glampingImg from "@/public/images/atlanticGlamping.jpeg";
import schedulerImg from "@/public/images/scheduler.png";
import dashboardImg from "@/public/images/weatherDashboard.png";

const ProjectList = [
  {
    repoLink:
      "https://github.com/Terence-A/fact-v-tech-lounge?tab=readme-ov-file",
    portTitle: "Fact-V-Lounge",
    image: factVImg,
    deployLink: "",
    id: 1,
  },
  {
    repoLink: "https://github.com/Terence-A/WhatsForDinner",
    portTitle: "Whats for Dinner",
    image: dinnerImg,
    deployLink: "https://terence-a.github.io/WhatsForDinner/",
    id: 2,
  },
  {
    repoLink: "https://github.com/Terence-A/ByteSizeBlog",
    portTitle: "Byte Size Blogs",
    image: byteImg,
    deployLink: "",
    id: 3,
  },
  {
    repoLink: "https://github.com/Terence-A/Atlantic-Glamping",
    portTitle: "Atlantic Glamping",
    image: glampingImg,
    deployLink: "",
    id: 4,
  },
  {
    repoLink: "https://github.com/Terence-A/workDayScheduler",
    portTitle: "Work Day Scheduler",
    image: schedulerImg,
    deployLink: "https://terence-a.github.io/workDayScheduler/",
    id: 5,
  },
  {
    repoLink: "https://github.com/Terence-A/WeatherDashboard",
    portTitle: "Weather Dashboard",
    image: dashboardImg,
    deployLink: "https://terence-a.github.io/WeatherDashboard/",
    id: 6,
  },
];

export default ProjectList;
