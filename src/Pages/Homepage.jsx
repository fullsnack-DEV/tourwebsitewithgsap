import React from "react";
import { Header } from "../Components/Header";
import { HeroSec } from "../Components/HeroSec";
import { Main } from "../Components/main-sec";
import { Main2 } from "../Components/Main-sec2";

export const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSec />
      <Main />
      <Main2 />
    </>
  );
};
