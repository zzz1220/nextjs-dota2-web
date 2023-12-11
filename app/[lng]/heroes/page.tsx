import { Card, Link } from "@nextui-org/react";
import { useTranslation } from "../../i18n";
import HeroAvatar from "../components/HeroAvatar";

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
      <Card className="flex flex-wrap justify-around">
        {heroes
          .slice(0, 2)
          .map(({ localized_name, name, roles }: any, index: number) => (
            <Card
              key={index}
              className="w-[200px] space-y-5 p-4 m-2"
              radius="md"
            >
              <div className="h-24 rounded-lg bg-default-300">
                <HeroAvatar
                  imgSrc={`${name.replace("npc_dota_hero_", "")}.png`}
                />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-3/5">{localized_name}</div>
                <div className="h-3 w-4/5">{roles.join(",")}</div>
                <div className="h-3 w-2/5"></div>
              </div>
            </Card>
          ))}
      </Card>
    </>
  );
}
