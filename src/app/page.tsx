import { AcademicOffers } from '@/components/academic-offers';
import { LandingPage } from '../components/landing-page'
import { WhyUs } from '../components/why-us'
import { WritingServicesComponent } from '@/components/writing-services';
import { EditingServicesComponent } from '@/components/editing-services';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf6f0] flex flex-col">
      <LandingPage />
      <div className="min-h-screen flex flex-col mt-4">
        <WhyUs />
      </div>
      <div className="min-h-screen flex flex-col">
        <AcademicOffers />
      </div>
      <div className="min-h-screen flex flex-col">
        <WritingServicesComponent />
      </div>
      <div className="min-h-screen flex flex-col">
        <EditingServicesComponent />
      </div>
    </div>
  );
}
