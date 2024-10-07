import React from 'react';

export function WhyUs() {
  return (
    <section className="flex items-center py-16 bg-[#fdf6f0]">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#ff9933] rounded-3xl p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-left">On-Time Delivery, Every Time</h3>
            <p className="text-left text-xl">We never miss a deadline. Your work is delivered on time, every time—guaranteed.</p>
          </div>
          <div className="bg-black text-white rounded-3xl p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-left">100% Human-Written Content</h3>
            <p className="text-left text-xl">Our experts craft original, high-quality work without using AI. You get personalized, plagiarism-free results.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-[#ff5555] text-white rounded-3xl p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-left">Free Revisions</h3>
              <p className="text-left text-xl">We want you to be completely satisfied.</p>
            </div>
            <div className="bg-white border-2 border-black rounded-3xl p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2 text-left">Confidentiality and Support</h3>
              <p className="text-left text-xl">We prioritize your privacy and offer 24/7 support to ensure your satisfaction at every step.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
