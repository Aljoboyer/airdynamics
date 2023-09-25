import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootContainer from '../../components/RootContainer'
import Header from '../../components/Headers/Headers'
import HeaderBottom from '../../components/Headers/HeaderBottom'
import DifferenceSection from '../../components/DifferenceSection/DifferenceSection'
import WhyHireMe from '../../components/WhyHire/WhyHire'
import LandingAbout from '../../components/LandingAbout/LandingAbout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
        <Header/>
        <HeaderBottom/>
        <WhyHireMe/>
        <DifferenceSection/>
        <LandingAbout/>
    </main>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <RootContainer>
        {page}
    </RootContainer>
  )
}