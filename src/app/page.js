// import Image from 'next/image'
import MediaCard from '@/components/Media/Media'
import styles from './page.module.css'
import NavBar from '@/components/NavBar/NavBar'
import PartnerCompanies from '@/components/PartnerCompanies/PartnerCompanies'
import ContactForm from '@/components/ContactForm/ContactForm'
export default function Home() {
  return (
    <div>
      <NavBar/>
      <MediaCard/>
      <PartnerCompanies/>
      <ContactForm/>
    </div>
  )
}
