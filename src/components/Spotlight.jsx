import React from 'react'
import { motion } from 'framer-motion'

export default function Spotlight(){
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Front-end Developer. React Specialist.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl mx-auto text-brandMuted"
        >
          I craft highly-performant user interfaces with meticulous attention to motion, accessibility, and polished design — inspired by product-led experiences.
        </motion.p>

        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{ scale: 0.98, y: 8 }}
            whileInView={{ scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-[900px] max-w-full rounded-2xl shadow-soft-lg overflow-hidden bg-white"
          >
            {/* screenshot collage or a mock browser window here */}
            <div className="w-full h-60 bg-gradient-to-r from-slate-50 to-white flex items-center justify-center text-sm text-brandMuted">
                <img src="/devSetup.jpeg" alt="Stock Development Picture" className='object-cover' />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
