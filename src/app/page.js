import Image from 'next/image'
import Partners from './components/partners'
import { CeoMessage } from './utils/data'
import OurTrends from './components/ourTrends'
import AboutUs from './components/aboutus'
import Projects from './components/projects'
import Header from './components/header'

export default function Home() {
  return (
    <main className="w-full">
      <Header/>
      <AboutUs/>
      <Projects/>
      <OurTrends/>
      <Partners />
    </main>
  )
}
