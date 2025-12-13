import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="md:w-1/3">
          <div className="w-36 h-36 rounded-full bg-gray-100 flex items-center justify-center bg-[url(/profilePicture.jpeg)] bg-cover">
            {/* <img src="/profilePicture.jpeg" alt="My Profile Picture" className='w-36 h-36 rounded-full' /> */}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="md:w-2/3">
          <h4 className="text-xl font-semibold">About me</h4>
          <p className="mt-3 text-brandMuted max-w-2xl">
            I'm a recent college graduate specializing in front-end development who loves turning ideas into interactive, high-performance web apps using React. I love learning new technologies and I try to focus on clean UI and accessibility.
            <br/><br/>
            Available for full-time roles. Download my resume or contact me below.
          </p>
          <div className="mt-6 flex gap-4">
            <a className="px-5 py-2 rounded-xxl bg-black text-white" href="/Trevor-Cruz-Resume.pdf" download="Trevor Cruz Resume" target="_blank" rel="noreferrer">Download Resume</a>
            <a className="px-5 py-2 rounded-xxl border border-gray-200" href="mailto:trevorcruz182@gmail.com">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
