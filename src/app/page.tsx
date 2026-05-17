"use client";

import React from "react";
import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  LayoutGrid,
  Eye,
  Link,
  CheckCircle,
  Diamond,
  MapPin,
  Mail,
  Phone,
  Layers,
  Briefcase,
  MessageCircle,
  GraduationCap,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";

const works = [
  {
    title: "Dreamora",
    category: "web",
    image: "/dreamora.png",
    link: "https://github.com/ajaykumarsaini231",
    preview: "https://client-delta-brown.vercel.app/profile",
  },
  {
    title: "Questivo",
    category: "ai",
    image: "/questivo.png",
    link: "https://questivo.vercel.app/",
    preview: "https://questivo.vercel.app/",
  },
  {
    title: "Laptop Solutions",
    category: "web",
    image: "/laptopshop.png",
    link: "https://laptopsolutions.shop/",
    preview: "https://laptopsolutions.shop/",
  },
];

const stats = [
  {
    icon: Briefcase,
    number: 25,
    label: "PROJECT WORKING",
  },
  {
    icon: CheckCircle,
    number: 40,
    label: "PROJECT DONE",
  },
  {
    icon: Diamond,
    number: 5,
    label: "ACHIEVEMENTS",
  },
  // {
  //   icon: Heart,
  //   number: 20,
  //   label: "HAPPY CLIENTS"
  // }
];

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
];
export default function PortfolioHome() {
  const navItems = ["Home", "About", "Services", "Resume", "Work", "Contact"];

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const details = [
    { label: "Name", value: "Ajay Kumar Saini" },
    { label: "Degree", value: "B.Tech, Materials Engineering" }, // Resume se academic focus
    { label: "Institution", value: "IIT Patna" }, // High value stat
    { label: "CPI", value: "7.82" },
    { label: "Technical Lead", value: "Anwesha / E-Cell (IITP)" },
    { label: "e-mail", value: "nabalsaini231@gmail.com" }, // Resume se Contact
    { label: "Location", value: "Patna, Bihar" },
    { label: "JEE Rank (Top %)", value: "Top 2% (Advanced)" }, // High Value Stat
  ];

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        {
          name: "React.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Prisma",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        },
      ],
    },
  ];

  const services = [
    {
      icon: LayoutGrid,
      title: "Front-End Development",
      desc: "Building responsive interfaces using React, Next.js and Tailwind with modern UI architecture.",
    },
    {
      icon: Layers,
      title: "Full Stack Systems",
      desc: "Designing scalable applications using Node.js, PostgreSQL and optimized backend APIs.",
    },
    {
      icon: Briefcase,
      title: "AI Web Platforms",
      desc: "Developing AI powered systems with LLMs, vector search and real-time inference.",
    },
    {
      icon: MessageCircle,
      title: "Technical Consulting",
      desc: "Guidance on architecture, performance optimization and production deployment.",
    },
  ];

  const cardAnimation = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  };

  const education = [
    {
      title: "B.Tech – Metallurgical Engineering | IIT Patna",
      year: "2023 – 2027",
      desc: "Currently pursuing B.Tech at IIT Patna with focus on algorithms, backend systems and scalable web applications.",
    },
    {
      title: "Class XII – Board of Secondary Education Rajasthan",
      year: "2021 – 2022",
      desc: "Completed senior secondary education with strong academic performance.",
    },
    {
      title: "Class X – Govt. Sr. Sec. School Mahukalan",
      year: "2020",
      desc: "Completed 10th with 91.17% under the Board of Secondary Education Rajasthan.",
    },
  ];

  const experience = [
    {
      title: "Research Intern – IIT Jodhpur",
      year: "May 2025 – Jul 2025",
      desc: "Worked on hot tearing susceptibility in Al 206 alloy using constrained rod casting and DICTRA simulations with SEM and XRD validation.",
    },
    {
      title: "Head – Sponsorship & Marketing | E-Cell IIT Patna",
      year: "Apr 2025 – Present",
      desc: "Leading sponsorship outreach, corporate partnerships and strategic collaborations for E-Cell events.",
    },
    {
      title: "Coordinator – Anwesha IIT Patna",
      year: "Jun 2025 – Present",
      desc: "Managing development projects and overseeing technical operations for the cultural fest platform.",
    },
    {
      title: "Sub-Coordinator – Web & Development | Anwesha",
      year: "Dec 2024 – May 2025",
      desc: "Developed web systems using Next.js and Django and managed inter-college participant data.",
    },
    {
      title: "Coordinator – MatES IIT Patna",
      year: "Jun 2025 – Present",
      desc: "Leading initiatives within the Materials Engineering Society and coordinating technical activities.",
    },
    {
      title: "RSP Coordinator – Celesta IIT Patna",
      year: "Apr 2025 – Present",
      desc: "Coordinated sponsorship outreach and operational planning for IIT Patna's techno-management fest.",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? works : works.filter((item) => item.category === filter);
  return (
    <div className="min-h-screen bg-white font-[Poppins]">
      {/* HEADER */}

      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>

            <a
              href="https://www.linkedin.com/in/ajay-kumar-saini-44b99a284/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-12 w-23 overflow-hidden"
            >
              <Image
                src="/logo.png"
                alt="Ajay Saini Logo"
                fill
                className="object-contain scale-150"
                priority
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-wider text-slate-600 hover:text-cyan-500 transition"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
      >
        {/* Background */}

        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Hi This Is */}

          <motion.h3
            variants={fadeInUp}
            className="text-3xl md:text-4xl mb-4 font-['Kaushan_Script']"
          >
            Hi This Is
          </motion.h3>

          {/* Typing Name */}

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
          >
            <TypeAnimation
              sequence={[
                "Ajay Kumar Saini",
                2000,
                "Full Stack Developer",
                2000,
                "Technical Lead",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
            />
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            variants={fadeInUp}
            className="text-gray-200 text-xl md:text-2xl mb-10 font-['Patrick_Hand']"
          >
            Full-Stack Web Developer & Technical Lead
          </motion.p>

          {/* Social Icons */}

          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-5 mb-10"
          >
            <a
              href="https://github.com/ajaykumarsaini231"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-cyan-500 transition"
            >
              <Github size={18} />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-cyan-500 transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-kumar-saini-44b99a284/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-cyan-500 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://www.instagram.com/saini.4_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-cyan-500 transition"
            >
              <Instagram size={18} />
            </a>
          </motion.div>
          {/* Button */}
          <a href="/resume.pdf" target="_self">
            <motion.button
              variants={fadeInUp}
              className="px-10 py-4 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 transition"
            >
              Download Resume
            </motion.button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-2 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}

      <section id="about" className="py-24 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Profile Photo */}

          <motion.div
            {...fadeInUp}
            viewport={{ once: true }}
            className="bg-white p-3 shadow-2xl rounded-sm border border-slate-100 flex justify-center"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-sm group">
              <Image
                src={images[current]}
                alt="Ajay Kumar Saini"
                fill
                className="object-cover transition-all duration-700"
                priority
              />

              <div className="absolute inset-0 bg-black/10" />

              {/* Previous button */}
              <button
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded"
              >
                ‹
              </button>

              {/* Next button */}
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded"
              >
                ›
              </button>
            </div>
          </motion.div>

          {/* Details */}

          <motion.div
            {...fadeInUp}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-8 md:pt-4"
          >
            {/* Header */}

            <div>
              <h2 className="text-5xl font-extrabold text-[#111] mb-2 tracking-tight">
                Hi Guys!
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl font-light">
                MERN Stack developer and problem-solver currently pursuing
                B.Tech at IIT Patna. I work on scalable web applications,
                full-stack systems and AI platforms. Ranked in the top 2% of JEE
                Advanced and actively leading technical development projects for
                major institute bodies.
              </p>
            </div>

            {/* Details Table */}

            <div className="border border-slate-100 rounded-sm bg-slate-50/50 p-6 md:p-8 grid grid-cols-1 gap-y-4">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 pb-3 border-b border-slate-100 last:border-b-0"
                >
                  <span className="w-48 font-semibold text-slate-800 uppercase tracking-widest text-xs">
                    {item.label}
                    <span className="hidden md:inline float-right pr-4">:</span>
                  </span>

                  <span className="flex-1 text-slate-600 font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end mt-4">
              <a href="/resume.pdf" target="_self" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center gap-2 justify-center px-8 py-3 bg-[#00B4D8] text-white font-bold text-sm tracking-widest rounded shadow-xl hover:bg-[#0096B4] transition-all uppercase">
                  Download Resume
                </button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center gap-2 justify-center px-8 py-3 bg-[#E94361] text-white font-bold text-sm tracking-widest rounded shadow-xl hover:bg-[#CC2A48] transition-all uppercase">
                  Contact Me
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-center text-4xl font-bold text-gray-800 mb-16">
            What I do
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  {...cardAnimation}
                  className="bg-white p-10 rounded shadow hover:shadow-lg transition text-center"
                >
                  <Icon size={40} className="mx-auto text-cyan-500 mb-6" />

                  <h3 className="font-bold text-gray-700 mb-4 tracking-wide">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section id="skills" className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header with Floating Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic">
              Technical{" "}
              <span className="text-[#00B4D8] not-italic">Expertise</span>
            </h2>
            <div className="relative w-24 h-1.5 bg-[#00B4D8] mx-auto rounded-full overflow-hidden">
              <motion.div
                animate={{ x: [-100, 100] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 bg-white/40 w-1/2"
              />
            </div>
            <p className="mt-6 text-slate-500 font-medium tracking-wide max-w-xl mx-auto uppercase text-xs">
              Solved 650+ DSA problems [cite: 42, 46] & building scalable
              full-stack systems with modern architectures.
            </p>
          </motion.div>

          {/* Skills Grid - Modern Glass Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative group bg-white rounded-3xl p-1 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-10px_rgba(0,180,216,0.15)] transition-all duration-500"
              >
                {/* Subtle Gradient Border Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-[#00B4D8]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative bg-white rounded-[22px] p-8 h-full border border-slate-50">
                  <h3 className="text-sm font-black text-[#00B4D8] mb-10 tracking-[0.2em] uppercase border-b border-slate-100 pb-4">
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-y-10 gap-x-6">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex flex-col items-center gap-4 group/item"
                      >
                        <div className="relative w-14 h-14 flex items-center justify-center">
                          {/* Floating background effect for icons */}
                          <div className="absolute inset-0 bg-slate-50 rounded-2xl group-hover/item:bg-[#00B4D8]/5 group-hover/item:rotate-12 transition-all duration-500" />

                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10 relative z-10 object-contain transition-all duration-500 transform group-hover/item:scale-125 group-hover/item:-translate-y-1"
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-400 group-hover/item:text-slate-900 tracking-widest uppercase transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="resume" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* EDUCATION */}

          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-cyan-500 w-12 h-12 flex items-center justify-center rounded-full text-white">
                <GraduationCap size={22} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Education
              </h2>
            </div>

            <div className="space-y-8 border-l-2 border-gray-300 pl-6">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[34px] top-2 w-3 h-3 bg-cyan-500 rounded-full" />

                  <div className="bg-gray-200 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-800">{item.title}</h3>

                    <p className="text-sm text-gray-600 mt-1">{item.year}</p>

                    <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}

          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="bg-cyan-500 w-12 h-12 flex items-center justify-center rounded-full text-white">
                <Briefcase size={22} />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 uppercase">
                Experience
              </h2>
            </div>

            <div className="space-y-8 border-l-2 border-gray-300 pl-6">
              {experience.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[34px] top-2 w-3 h-3 bg-cyan-500 rounded-full" />

                  <div className="bg-gray-200 p-6 rounded shadow-sm">
                    <h3 className="font-bold text-gray-800">{item.title}</h3>

                    <p className="text-sm text-gray-600 mt-1">{item.year}</p>

                    <p className="text-gray-600 text-sm mt-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="work" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}

          <h2 className="text-center text-4xl font-bold mb-10">
            My Remarkable Works
          </h2>

          {/* Filters */}

          <div className="flex justify-center gap-4 mb-14 flex-wrap">
            {["all", "web", "ai"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-6 py-2 rounded border text-sm font-semibold uppercase tracking-wide transition
              
              ${
                filter === item
                  ? "bg-cyan-500 text-white"
                  : "bg-white text-gray-700 hover:bg-cyan-500 hover:text-white"
              }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative group rounded shadow-lg overflow-hidden bg-white"
              >
                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}

                <div className="absolute inset-0 bg-cyan-600/80 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                  <a
                    href={work.preview}
                    className="bg-white p-3 rounded shadow hover:scale-110 transition"
                  >
                    <Eye size={18} />
                  </a>

                  <a
                    href={work.link}
                    target="_blank"
                    className="bg-white p-3 rounded shadow hover:scale-110 transition"
                  >
                    <Link size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative py-28 text-white justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 justify-center" />

        <div className="relative max-w-6xl mx-auto px-6 grid  grid-cols-1 md:grid-cols-3 gap-10 text-center justify-center">
          {stats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="flex flex-col items-center">
                <Icon size={40} className="text-cyan-400 mb-4" />

                <h3 className="text-4xl font-bold mb-2">
                  <CountUp end={item.number} duration={2} />
                </h3>

                <p className="text-sm tracking-widest text-gray-300">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase text-gray-700">
              Contact Form
            </h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border p-3 w-full focus:outline-none focus:border-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 w-full focus:outline-none focus:border-cyan-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border p-3 w-full focus:outline-none focus:border-cyan-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="border p-3 w-full focus:outline-none focus:border-cyan-500"
              />

              <button
                type="submit"
                className="bg-cyan-500 text-white px-8 py-3 font-semibold rounded hover:bg-cyan-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT ADDRESS */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase text-gray-700">
              Contact Address
            </h3>

            <div className="bg-white p-8 shadow rounded space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-cyan-500 mt-1" />
                <p className="text-gray-600">IIT Patna, Bihta, Bihar, India</p>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-cyan-500 mt-1" />
                <p className="text-gray-600">nabalsaini231@gmail.com</p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-cyan-500 mt-1" />
                <p className="text-gray-600">+91-8107469345</p>
              </div>
            </div>
          </div>
        </div>

        {/* GOOGLE MAP */}

        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="w-full h-[400px] overflow-hidden rounded shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14400.328066277949!2d84.83481710781251!3d25.5356448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1774892735061!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className="bg-[#0f1117] py-16 text-center text-white">
        {/* Icons */}

        <div className="flex justify-center gap-4 mb-6">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/saini.4_"
            target="_blank"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"
          >
            <Instagram size={18} />
          </a>

          {/* Email */}
          <a
            href="mailto:nabalsaini231@gmail.com"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"
          >
            <Mail size={18} />
          </a>

          {/* Google (Gmail profile or search link) */}
          <a
            href="https://www.linkedin.com/in/ajay-kumar-saini-44b99a284/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/ajaykumarsaini231"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Copyright */}

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Ajay Kumar Saini. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
