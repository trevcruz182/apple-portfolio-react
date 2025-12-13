import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[78vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[60vw] h-[60vh] bg-blob opacity-40 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-brandText"
        >
          Building modern, fast<br/> React-powered experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-brandMuted"
        >
          I design and develop clean, minimal, interactive web apps — focused on performance, accessibility, and delightful motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="inline-block rounded-xxl bg-black text-white px-6 py-3 font-medium shadow-soft-lg">
            View Projects
          </a>
          <a href="https://github.com/trevcruz182" target="_blank" rel="noreferrer" className="inline-block rounded-xxl border border-gray-200 px-6 py-3 text-brandText font-medium">
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
