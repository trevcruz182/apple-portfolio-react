import React from 'react'
import { motion } from 'framer-motion'

const techLogos = [
    {
        name: 'React',
        svg: (<svg width="40" height="40" viewBox="0 0 256 256"><circle cx="128" cy="128" r="30" fill="#61dafb"/></svg>)
    },
    {
        name: 'Tailwind',
        svg: (<svg width="40" height="40" viewBox="0 0 256 256"><circle cx="128" cy="128" r="30" fill="#06b6d4"/></svg>)
    },
    {
        name: 'Framer',
        svg: (<svg width="40" height="40" viewBox="0 0 256 256"><circle cx="128" cy="128" r="30" fill="#0055ff"/></svg>)
    },
    {
        name: 'Vite',
        svg: (<svg width="40" height="40" viewBox="0 0 256 256"><circle cx="128" cy="128" r="30" fill="#646cff"/></svg>)
    }
]

export default function TechShowcase(){
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
          Built with performance, clarity, and precision.
        </motion.h3>

        <motion.div className="mt-8 flex items-center justify-center gap-10">
          {techLogos.map(t => (
            <div key={t.name} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                {t.svg}
              </div>
              <div className="text-sm text-white/70">{t.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
