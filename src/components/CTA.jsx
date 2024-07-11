import { Link } from "react-router-dom";
<<<<<<< HEAD

const CTA = () => {
=======
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
const CTA = () => {
const timeline = gsap.timeline({
  repeat: -1, repeatDelay: 1, yoyo: true
})
  useGSAP(() =>{

    timeline.fromTo("#btn", {
      y: 100,
      rotation: 180,
      background:"gray",
      
 
},{
  y: 0,
  repeat: -1, 
    scale: 1.5,
    borderRadius: "50",
    repeatDelay: 2,
    yoyo: true,
    ease: "bounce.in",
    rotation: 360,
    background:"",
    
})
  })


>>>>>>> 83371ca (new update)
  return (
    <section className='cta'>
      <p className='cta-text'>
        Avez-vous un projet? <br className='sm:block hidden' />
        Nous pouvons le construire ensemble!
      </p>
<<<<<<< HEAD
      <Link to='/contact' className='btn'>
=======
      <Link to='/contact' className='btn' id='btn'>
>>>>>>> 83371ca (new update)
        Contact
      </Link>
    </section>
  );
};

export default CTA;
