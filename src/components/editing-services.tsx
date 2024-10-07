'use client'

import { Card, CardContent } from "@/components/ui/card"

export function EditingServicesComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6f0] p-4">
      <Card className="w-full max-w-6xl bg-black overflow-hidden rounded-[2rem] h-[550px] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[length:8px_8px]" />
        <CardContent className="relative z-10 text-white p-12 h-full flex items-center justify-center">
          <div className="flex items-center space-x-8">
            <div className="max-w-2xl">
              <p className="text-2xl leading-relaxed max-w-xl">
                We offer specialized editing services to polish and perfect your dissertation. Our editors focus on clarity, structure, and academic integrity, ensuring your work is error-free and ready for submission.
              </p>
            </div>
            <h2 className="text-7xl font-bold px-12">Editing</h2>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}