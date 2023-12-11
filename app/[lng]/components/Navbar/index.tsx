"use client";
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "./logo.svg";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { useTranslation } from "@/app/i18n/client";

export default function App({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "translation");

  return (
    <Navbar>
      <NavbarBrand>
        <Image src={logo} width={48} height={48} alt="logo" />
        <p className="font-bold text-inherit">{t("navbar.logo")}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarItem>
          <Link color="foreground" href="/heroes">
            {t("navbar.heroes")}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/matches" aria-current="page">
            Matches
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/">
            Data
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
