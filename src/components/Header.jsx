import React from 'react'

export default function Header() {
  return (
    <header className="
        flex items-center justify-between
        px-6 py-4
        border-b border-gray-200
      ">
        <h1 className="text-lg font-semibold tracking-tight">
          Trevor Cruz — Project Portfolio
        </h1>
        <div className='flex gap-2 scale-125'>
          <a href="https://github.com/trevcruz182" target='_blank'>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/trevor-cruz-rit" target='_blank'>
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:trevorcruz182@gmail.com" target='_blank'>
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </header>
  )
}
