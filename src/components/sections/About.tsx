'use client';

import Image from 'next/image'
import React from 'react'
import { BackgroundBeamsCollide, FloatingDock, ShiningText } from '../atoms'
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';

const About = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500" />
      ),
      href: "#",
    },
 
    {
      title: "Github",
      icon: (
        <FaGithub className="h-full w-full text-neutral-500" />
      ),
      href: "#",
    },
    {
      title: "Stack Overflow",
      icon: (
        <FaStackOverflow className="h-full w-full text-neutral-500" />
      ),
      href: "#",
    },
    {
      title: "X aka Twitter",
      icon: (
        <FaTwitter className="h-full w-full text-neutral-500" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center text-slate">
      <BackgroundBeamsCollide>
        <div className='relative flex flex-col pt-[30px] items-center text-center px-8 lg:px-10 xl:px-12 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[80%]'>
          <h1 className='text-5xl font-serif w-[80%]'>More Than Just Code – <ShiningText variant='light'>I Build Experiences</ShiningText></h1>
          <h3 className='text-2xl font-sans mb-18 mt-3'>Driven by curiosity, focused on craft, and fueled by coffee & creativity</h3>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='flex-1 font-sans text-lg text-left leading-8 order-2 md:order-1'>
              <h4 className='text-sky mb-4 font-bold'>KNOW ABOUT ME</h4>
              <p className='mb-3'>Hey, I’m Deepesh Jain — a Fullstack Developer who’s obsessed with crafting interfaces that don’t just look good, but feel right.</p>
              <p className='mb-3'>I believe the best web experiences happen when design and engineering shake hands — and that’s exactly where I thrive. Whether I’m architecting a system or obsessing over a button’s hover state, I bring equal parts logic and love to both sides of the stack.</p>
              <p className='mb-3'>Performance, accessibility, responsive design, clean code — these aren’t buzzwords to me, they’re checkboxes I never skip. And while I’m comfortable juggling frontend, backend, and even deployment, I’ll always have a soft spot for bringing ideas to life in the browser.</p>
              <p className='mb-3'>When I’m not coding, I’m probably diving into a new tech tool, sipping coffee ☕, or mentoring fellow devs in the community.</p>
              <p className='mb-3'>Let’s build something that isn’t just functional — but unforgettable. 🚀</p>
              <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
              />
            </div>
            <div className='flex-1 flex justify-center order-1 md:order-2'>
              <Image
                src="/deepesh-jain-crop.png"  
                alt="Deepesh Jain"
                width={500}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsCollide>
    </div>
  )
}

export default About