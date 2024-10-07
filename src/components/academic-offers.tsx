'use client'

export function AcademicOffers() {
  return (
    <div className="bg-[#fdf6f0] min-h-screen flex items-center justify-center p-4">
      <div className="max-w-7xl w-full h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHBhdGggZD0iTTAgMGg1MHY1MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoMXY1MEgwem00OSAwaDFWNTBoLTF6TTAgMHY1MGg1MFYwem0wIDQ5aDUwTTAgMWg1ME0xIDBoNDl2NDlIMS4wMDEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RkZCIgc3Ryb2tlLXdpZHRoPSIuNSIvPgo8L3N2Zz4=')] h-full">
          <div className="flex items-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-800">Our Offers</h1>
          </div>
          <div className="space-y-8 flex flex-col justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700">
              Take advantage of our broad range of academic support services.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700">
              Whether you need help with online exams, classes, homework, or assignments, we are here to provide expert assistance.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700">
              From thesis writing to PowerPoint presentations, our services are designed to meet all your academic needs with precision and care.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}