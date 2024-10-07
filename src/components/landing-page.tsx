'use client'

import { useState } from 'react'
import { GraduationCap } from 'lucide-react'

export function LandingPage() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col">
      <header className="bg-black text-white p-4 rounded-full mx-auto mt-4 max-w-7xl w-[95%]">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="bg-[#ff9933] rounded-full p-2 mr-3">
              <GraduationCap className="text-black w-8 h-8" />
            </div>
            <span className="text-[#ff9933] text-2xl font-bold">ElliteEssayHub</span>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 text-xl">
              <li><a href="#" className="hover:text-[#ff9933]">About Us</a></li>
              <li><a href="#" className="hover:text-[#ff9933]">How To Order</a></li>
              <li><a href="#" className="hover:text-[#ff9933]">Services</a></li>
              <li><a href="#" className="hover:text-[#ff9933]">Reviews</a></li>
              <li><a href="#" className="hover:text-[#ff9933]">Blog</a></li>
            </ul>
          </nav>
          <button className="bg-gradient-to-r from-[#ff9933] to-[#ff5555] text-black px-6 py-3 rounded-full text-xl font-semibold">
            Contact Us
          </button>
        </div>
      </header>
      <main className="container mx-auto flex-grow flex flex-col justify-start mt-40 items-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Stress-Free Grades with Pro Writers<br />
          —Your Path to <span className="text-[#ff5555]">A+</span> Starts Here!
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl text-center">
          We guarantee on-time delivery, 100% human-written content, and
          personalized, plagiarism-free work. Your success is our priority,
          with full confidentiality and 24/7 support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-3xl">
          <input
            type="email"
            placeholder="Enter Your E-mail"
            className="px-6 py-3 rounded-full w-full sm:w-2/3 text-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-gradient-to-r from-[#ff9933] to-[#ff5555] text-white px-8 py-3 rounded-full text-lg font-semibold w-full sm:w-auto">
            Request a Quote
          </button>
        </div>
      </main>
    </div>
  )
}