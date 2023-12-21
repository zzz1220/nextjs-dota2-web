"use client";
import { useTranslation } from "@/app/i18n/index";
import {
  Button,
  Card,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { languages } from "@/app/i18n/settings";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { updateUser, updateUser2 } from "@/app/actions";

const languageOptions = [
  {
    label: "english",
    value: languages[0],
  },
  {
    label: "简体中文",
    value: languages[1],
  },
];

export const Footer = ({ lng }: { lng: string }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="flex flex-row items-center rounded-none justify-between px-24 py-6">
        <div className="w-96">
          Dota and the Dota logo are trademarks and/or registered trademarks of
          Valve Corporation. 2023 Valve Corporation, all rights reserved.
        </div>
        <div className="w-3">
          <Button radius="full" onClick={onOpen}>
            当前语言{lng}
          </Button>
        </div>
      </Card>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex justify-around pt-6 pb-6">
                  {languageOptions.map(({ value, label }) => (
                    <Link key={value} className="m-2" href={"/" + value}>
                      {label}
                    </Link>
                  ))}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
