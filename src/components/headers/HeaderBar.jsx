import { useState } from "react";
import { Link } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";
import pulseIndicator from "../../assets/Indicators/data.json";
import Lottie from "lottie-react";

const HeaderBar = () => {

  const isFetching = useIsFetching();

  return (
    <div className="h-[50px] bg-white flex justify-between items-center shadow-md px-4">
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        <h1 className="text-2xl font-bold">Podcaster</h1>
      </Link>
      {/* Indicador de carga */}
      {/* TODO: Sacar del context la carga de items */}
      <div className="w-12 h-12">
        {isFetching > 0 && <Lottie animationData={pulseIndicator} loop={true} />}
      </div>
    </div>
  );
};

export default HeaderBar;
