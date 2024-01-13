import Hero from './pages/Hero'
import Contact from './pages/contact'
import Footer from './components/footer'
import CarouselSkill from '../src/components/CarouselSkill'
import Project from '../src/components/project'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import About from './pages/about'

export default function App() {

  return (
    <>
      <div className='overflow-hidden'>
        <Hero></Hero>
        <About></About>
        <CarouselSkill></CarouselSkill>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      
    </>
  )
}
