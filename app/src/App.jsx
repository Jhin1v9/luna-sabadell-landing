import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Demo from './components/Demo.jsx';
import { Benefits, HowItWorks, PricingModel } from './components/Sections.jsx';
import { Plans, Faq, Cta } from './components/PlansFaqCta.jsx';

export default function App() {
  return (
    <div className="antialiased">
      <Nav />
      <Hero />
      <Demo />
      <Benefits />
      <HowItWorks />
      <PricingModel />
      <Plans />
      <Faq />
      <Cta />
    </div>
  );
}
