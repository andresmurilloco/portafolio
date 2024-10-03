import LayoutMain from './components/layout'
import style from './components/css/maintenance.module.css'
import maintenanceImage from "@/public/assets/img/maintenance.png"
import Image from 'next/image'
export default function Home() {
  
  return (
    <LayoutMain>
      <div className={style.techContainer}>
        <Image src={maintenanceImage} alt='In maintenance logo' className={style.maintenanceImage}/>
        <h1>Lo siento, el portafolio está en proceso de mejora!😊</h1>
      </div>
    </LayoutMain>
  )
}