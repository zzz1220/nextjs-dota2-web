import { Footer } from "./components/Footer";
import { useTranslation } from "../i18n";

export default async function Page({ params: { lng } }: any) {
  const { t } = await useTranslation(lng);

  return <></>;
}
