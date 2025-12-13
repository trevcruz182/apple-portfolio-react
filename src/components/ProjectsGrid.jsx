import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectsGrid({ projects }) {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.h4 className="text-xl font-semibold" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>All Projects</motion.h4>

        <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-44 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">{p.name}</h5>
                </div>
                <p className="mt-2 text-sm text-brandMuted">{p.description}</p>
                <div className="mt-4 flex gap-2">
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-black text-white rounded-xxl">Demo</a>
                  <a href={p.repoUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 border border-gray-200 rounded-xxl">Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
