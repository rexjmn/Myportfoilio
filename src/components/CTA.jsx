import { Link } from "react-router-dom";

// import {useGSAP} from "@gsap/react"
// import gsap from "gsap";
const CTA = () => {
// const timeline = gsap.timeline({
//   repeat: -1, repeatDelay: 1, yoyo: true
// })
//   useGSAP(() =>{

//     timeline.fromTo("#btn", {
//       y: 100,
//       rotation: 180,
//       background:"gray",
      
 
// },{
//   y: 0,
//   repeat: -1, 
//     scale: 1.5,
//     borderRadius: "50",
//     repeatDelay: 2,
//     yoyo: true,
//     ease: "bounce.in",
//     rotation: 360,
//     background:"",
    
// })
//   })



  return (
    <section className='cta'>
      <p className='cta-text'>
        Avez-vous un projet? <br className='sm:block hidden' />
        Nous pouvons le construire ensemble!
      </p>

      <Link to='/contact' className='btn' id='btn'>

        Contactez-Moi
      </Link>
    </section>
  );
};

export default CTA;
