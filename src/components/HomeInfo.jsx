import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";


const HomeInfo = ({ currentStage }) => {
  
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Salut! Je m'appelle 
        <span className='font-semibold mx-2 text-white'>René</span>
        👋
        <br /> 
        Développeur web à la recherche d'un contrat Pro.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          J'ai developpé des competence <br /> à travers des années pour me trouver face a vous
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Je suis passionné par le métier de développeur. <br />
    Je parle couramment anglais, espagnol et français. <br />
    Êtes-vous curieux de voir mon impact ?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visitez mon portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Cherchez-vous un Développeur web? <br/> Je suis à seulment quelque coup de clavier de distance 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        venez me parler!
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
