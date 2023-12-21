import { Card } from "@nextui-org/react";
import HeroAvatar from "@/app/[lng]/components/HeroAvatar";
import Link from "next/link";

function Heroes({ heroes, filters = [] }: any) {
  return (
    <Card radius="none" className="flex-row flex-wrap justify-around">
      {heroes.map(
        ({ localized_name, name, roles, primary_attr }: any, index: number) => (
          <Link key={index} href={`/heroes/${name}`}>
            <Card
              className={`w-[140px] space-y-5 px-2 m-4 ${
                filters.includes(primary_attr) ? "invisible" : ""
              }`}
              radius="md"
            >
              <div className="rounded-lg bg-default-300">
                <HeroAvatar
                  imgSrc={`${name.replace("npc_dota_hero_", "")}.png`}
                />
              </div>
              <div className="space-y-3">
                <div className="h-3 text-nowrap break-keep">
                  {localized_name}
                </div>
                <div className="m-h-6 text-wrap break-words">
                  {roles.join(",")}
                </div>
                <div className="h-3 w-2/5"></div>
              </div>
            </Card>
          </Link>
        ),
      )}
    </Card>
  );
}

export default Heroes;
