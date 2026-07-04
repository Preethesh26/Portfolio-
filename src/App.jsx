import { Routes, Route } from 'react-router-dom';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfessionalDetail from './pages/ProfessionalDetail';
import AcademyProV2Detail from './pages/AcademyProV2Detail';
import AcademyProV1Detail from './pages/AcademyProV1Detail';
import MoneyFlowXDetail from './pages/MoneyFlowXDetail';
import ScrollToTop from './components/ScrollToTop';

function Portfolio() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <Internships />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/summary" element={<ProfessionalDetail />} />
        <Route path="/academypro-v1" element={<AcademyProV1Detail />} />
        <Route path="/academypro-v2" element={<AcademyProV2Detail />} />
        <Route path="/moneyflowx" element={<MoneyFlowXDetail />} />
      </Routes>
    </>
  );
}
