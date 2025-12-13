import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center text-sm text-brandMuted">
        <div>© {new Date().getFullYear()} Trevor Cruz — Built with React & ❤️</div>
        <div className="mt-2">
          <a href="https://github.com/trevcruz182" target="_blank" rel="noreferrer" className="mx-2">GitHub</a>
          <a href="https://www.linkedin.com/in/trevor-cruz-rit" target="_blank" rel="noreferrer" className="mx-2">LinkedIn</a>
          <a href="mailto:trevorcruz182@gmail.com" className="mx-2">Email</a>
        </div>
      </div>
    </footer>
  )
}