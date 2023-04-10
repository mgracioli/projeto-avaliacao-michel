import React from "react";
import { HomePageProps } from "./@types/types";
import HomeFrame from "../../frames/home";

const HomePage = ({ feedbacksUsuarios }: HomePageProps) => {
  return (
    <HomeFrame feedbacksUsuarios={feedbacksUsuarios} />
  )
}

export default HomePage;
