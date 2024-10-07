'use client'

import { Card, CardContent } from "@/components/ui/card"

export function WritingServicesComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0] p-4">
      <Card className="w-full max-w-6xl bg-orange-400 overflow-hidden rounded-[2rem] h-[550px]">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)"
        }} />
        <CardContent className="relative z-10 text-black text-center p-12 space-y-6 h-full flex flex-col justify-center">
          <h2 className="text-7xl font-bold mb-8">Writing</h2>
          <p className="text-3xl mx-auto max-w-3xl">
            Our comprehensive writing services cover everything from dissertation writing to scholarship essays.
          </p>
          <p className="py-4 text-3xl mx-auto max-w-3xl">
            Whether you need help with narrative writing, argumentative essays, or in-depth research papers, our experts are here to craft top-quality, original content that meets your academic goals.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}