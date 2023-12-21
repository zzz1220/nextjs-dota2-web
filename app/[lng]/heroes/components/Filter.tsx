"use client";
import { Card, Checkbox, CheckboxGroup } from "@nextui-org/react";
import AttrCheckbox from "./AttrCheckbox";
import { useEffect, useState } from "react";

export function Filter() {
  const [groupSelected, setGroupSelectrd] = useState([]);

  useEffect(() => {
    location.hash = groupSelected.length
      ? `#filter=${groupSelected.join(",")}`
      : "";
  }, [groupSelected]);
  return (
    <>
      <Card className="flex flex-row gap-1 p-3">
        <CheckboxGroup
          className="gap-1"
          label="attr"
          orientation="horizontal"
          value={groupSelected}
          onChange={setGroupSelectrd}
        >
          <AttrCheckbox value="str">力量</AttrCheckbox>
          <AttrCheckbox value="int">智力</AttrCheckbox>
          <AttrCheckbox value="agi">敏捷</AttrCheckbox>
          <AttrCheckbox value="all">全才</AttrCheckbox>
        </CheckboxGroup>
      </Card>
    </>
  );
}
