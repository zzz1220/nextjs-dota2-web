"use client";
import Image from "next/image";
import type { ImageLoader } from "next/image";

const imageLoader: ImageLoader = ({ src }) => {
  return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${src}`;
};

export default function HeroAvatar({ imgSrc }: any) {
  return (
    <Image
      loader={imageLoader}
      src={imgSrc}
      width="200"
      height={"200"}
      alt=""
    />
  );
}
