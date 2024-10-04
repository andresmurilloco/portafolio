import LayoutMain from './components/layout'
import './components/css/maintenance.css'
import maintenanceImage from "@/public/assets/img/maintenance.png"
import Image from 'next/image'
export default function Home() {
  
  return (
    <LayoutMain>
      <div className="techContainer">
        <Image src={maintenanceImage} alt='In maintenance logo' className="maintenanceImage"/>
        <h1 className="announcement">Lo siento, el portafolio está en proceso de mejora!😊</h1>
      </div>
    </LayoutMain>
  )
}