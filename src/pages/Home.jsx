import { HeroSection, LegalAreas } from '../components';

export function Home() {
  return (
    <div className="py-8">
      <HeroSection />

      <div className="mt-8">
        <LegalAreas />
      </div>
    </div>
  );
}
