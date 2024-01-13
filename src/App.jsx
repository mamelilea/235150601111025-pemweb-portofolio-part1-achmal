import Hero from './pages/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function App() {

  return (
    <>
          <div className='overflow-hidden'>
            <Hero></Hero>
          </div>
    </>
  )
}
