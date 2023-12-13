import Image from 'next/image';
import HeroSection from "./components/HeroSection";
import { Container } from 'postcss';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <container className="container mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
      </container>
    </main>
  )
}
