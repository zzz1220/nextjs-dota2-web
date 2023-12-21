import { useTranslation } from "../../i18n";
import Heroes from "./components/heroes";
import { Filter } from "./components/Filter";

async function getHeroes() {
  const res = await fetch(`https://api.opendota.com/api/heroes`);
  const heros = await res.json();
  return heros;
}

export default async function Page({ params: { lng } }: any) {
  const heroes = await getHeroes();

  const { t } = await useTranslation(lng);

  return (
    <>
      <Filter />
      <Heroes heroes={heroes} />
    </>
  );
}
