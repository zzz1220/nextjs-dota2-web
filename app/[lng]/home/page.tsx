import { Card, Link } from "@nextui-org/react"
import { useTranslation } from '../../i18n'
async function getHeros() {
  const res = await fetch(`https://api.opendota.com/api/heroes`)
  const heros = await res.json()
  return heros
}


export default async function Page({ params: { lng } }: any) {
  const heros = await getHeros()
  const { t } = await useTranslation(lng)

  return (<><Card>
    {JSON.stringify(heros)}
    {t('title')}
  </Card>
  <Link href={`/${lng}`}>
        back
      </Link>
  </>)
}

