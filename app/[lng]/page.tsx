import Link from 'next/link'
import { Footer } from './components/Footer'
import { useTranslation } from '../i18n'

export default async function Page({ params: { lng } } : any) {
  const {t} = await useTranslation(lng)
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/home`}>
        home
      </Link>
      <Footer lng={lng}/>
    </>
  )
}