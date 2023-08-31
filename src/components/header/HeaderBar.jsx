import { useState } from "react";
import Lottie from "lottie-react";
import pulseIndicator from "../../assets/Indicators/data.json";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="h-[50px] bg-white flex justify-between items-center shadow-xl px-4">
      <Link to="/" className="text-blue-500 hover:text-blue-600">
        <h1 className="text-2xl font-bold">Podcaster</h1>
      </Link>
      {/* Indicador de carga */}
      {/* TODO: Sacar del context la carga de items */}
      <div className="w-12 h-12">
        {isLoading && <Lottie animationData={pulseIndicator} loop={true} />}
      </div>
    </div>
  );
};

export default HeaderBar;
