import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hey, salut !
        <span className="font-semibold mx-2 text-white">Moi, c’est Rene,</span>
        👋
        <br />
        développeur web passionné toujours à l'affût d'un nouveau contrat Pro.{" "}
        <br />
        pour devenir une personne capable de créer un impact énorme ^^
        <br />
        <span className="font-bold  text-sm border-b-4 border-white">
          {" "}
          Clique sur le avion et fais un tour autour de mon petit coin de
          paradis.<br />
           active le son pour une meilleure expérience utilisateur.^^
          {" "}
        </span> 
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Mon objectif ? Continuer à me cultiver, <br />
          dans le développement et dans la vie en général.<br />
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          En savoir plus
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          <span className="font-bold ">Ce qui me fait vibrer ? </span> <br />
          Le code, la création, et l’innovation. <br />
          Je parle anglais, espagnol et français, <br />
          donc que vous soyez ici ou à l’autre bout du monde, a<br />
          on peut bosser ensemble sans souci.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visitez mon portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
       <span className="font-bold"> Envie de voir ce que je peux faire ?</span> <br />
         Jetez un œil à mon portfolio, ça parle plus que des mots. <br />
<span className="font-bold">Besoin d’un dev web cool et efficace ?</span> <br />
 Je suis littéralement à quelques clics de clavier. Let's go !


        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          venez me parler!
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
