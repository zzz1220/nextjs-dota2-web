import { Footer } from './components/Footer'
import { useTranslation } from '../i18n'
import Navbar from './components/Navbar'

export default async function Page({ params: { lng } } : any) {
  const {t} = await useTranslation(lng)
  return (
    <>
      <Navbar/>
      <Footer lng={lng}/>
    </>
  )
}