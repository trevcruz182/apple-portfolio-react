import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectShowcase({ project, reversed = false }) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row items-center gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-soft-lg border border-gray-100">
              <img src={project.image} alt={project.name} className="w-full object-cover h-[360px] projImg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold">{project.name}</h3>
            <p className="mt-4 text-brandMuted">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-gray-100 text-brandMuted">{t}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-block rounded-xxl bg-[#252525] text-white px-5 py-2 font-medium">
                Live Demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="inline-block rounded-xxl border border-gray-200 px-5 py-2 text-brandText font-medium">
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
