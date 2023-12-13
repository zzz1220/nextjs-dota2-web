"use client";
import { useTranslation } from "@/app/i18n/index";
import { Select, SelectItem } from "@nextui-org/react";

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
];
export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "footer");
  return (
    <Select label={t("title")}>
      {animals.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
};
