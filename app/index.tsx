import Calculator from "@/component/Calculator";
import { Stack } from "expo-router";
import React from "react";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{title:'Calculator'}}/>
    <Calculator/>
    </>
  );
}
