import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { CTA } from "../components";
  import { experiences, skills } from "../constants";
  import {useGSAP} from "@gsap/react"
  import "react-vertical-timeline-component/style.min.css";
  import {ScrollTrigger} from "gsap/all"
  import gsap from "gsap";
  import { useRef } from "react";
  import { rene } from "../assets/images";
  
  
  gsap.registerPlugin(ScrollTrigger)
  
  const About = () => {
  const timeline = gsap.timeline({
    repeat: -1, repeatDelay: 1, yoyo: true
  });
  const scrollRef = useRef();
  
   useGSAP(() =>{
    const boxes = gsap.utils.toArray(
      scrollRef.current.children
    );
    boxes.forEach((box, index) => {
      gsap.fromTo(box,{
        
        opacity: 0,
        rotation: 0,
      
  
      },
      {
        rotation: 360,
        opacity: 1,
          
          duration: 1,
          ease: "elastic.out(1, 0.8)",
          scrollTrigger: {
            trigger: box,
            start: "top bottom-=100",
            end: "top 10%",
            scrub: 1,
  
        },
        delay: index * 0.1, // Staggered delay
      }
    );
   
  
    box.addEventListener('mouseenter', () => {
      gsap.to(box, {
        scale: 2,
        duration: 0.1,
        ease: "power2.out"
      });
    });
    box.addEventListener('mouseleave', () => {
      gsap.to(box, {
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    });
    })
  
  timeline.fromTo('#black-box', {
    x: 0,
    opacity: 0,
   ease: 'bounce-out',
   scale: 0.5
  
  },{
    x: 350,
    opacity: 1,
    
    borderRadius:'100%',
    duration: 2,
    scale: 1,
    ease: ''
  }
  )
  
  // timeline.to('#black-box', {
  //   y: 100,
  //   scale: 0.5,
  //   rotation: 360,
  //   duration: 2,
  //   ease: 'bounce.out',
  // })
  
  timeline.to('#black-box', {
    x: 500,
    y: 10,
    scale: 1,
    duration: 2,
  opacity: 0,
  ease:'back.inOut'
   
  
  }
  )
  
  
  
    gsap.set("#head-text .char", { opacity: 0, y: 50 });
    gsap.to("#head-text .char", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: "back.out(1.7)",
    });
  
    gsap.to("#name-gradient", {
      backgroundPosition: "200% center",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
  
    gsap.fromTo("#para", 
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1,
      }
    );
  
   },[]);




    return (
      <section className='max-container'>
        <h1 className='head-text' id="head-text">
          Bonjour, je m'appelle {" "}
          <span className='name-gradient font-bold' id="name-gradient">
            {" "}
            René
          </span>{" "}
          👋
        </h1>
  
        <div className="m-10 w-40 h-40 object-contain">
        <div  id="black-box"  className="rounded-full" >
          <img src={rene} alt=""  className="rounded-[100%]" />
          
        </div>
       
  </div>
  
        <div className='p-10 flex flex-col gap-3 text-slate-500'>
          <p id="para">
          Je suis étudiant en développement web à la recherche d'une alternance. Originaire du Salvador, je parle couramment anglais, français et espagnol. Déterminé, autodidacte et créatif, je suis prêt à apporter ma passion et mes compétences à votre équipe.
          </p>
        </div>
  
  

  
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>My Skills</h3>
  
          <div ref={scrollRef} className='mt-16 flex flex-wrap gap-12 '>
            {skills.map((skill) => (
              <div  className='block-container w-20 h-20 opacity-0' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div   className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                 
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        
 
  
  
        <div className='py-16'>
          <h3 className='subhead-text'>Experience Professionnelle.</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
            J'ai travaillé avec toutes sortes d'entreprises, améliorant mes compétences et collaborant avec des personnes intelligentes. Voici un aperçu :
            </p>
          </div>
  
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className='flex justify-center items-center w-full h-full'>
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>
                  }
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p
                      className='text-black-500 font-medium text-base'
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
  
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className='text-black-500/50 font-normal pl-1 text-sm'
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
  
        <hr className='border-slate-200' />
  
        <CTA />
      </section>
    );
  };
  
  export default About;
  