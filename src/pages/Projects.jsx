import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();

  useGSAP(() => {
    
    gsap.fromTo('#magical-background', {
      opacity: 0,
      scale: 1.1
    }, {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.out"
    });

   
    for (let i = 0; i < 15; i++) {
      gsap.to(`#floating-leaf-${i}`, {
        x: `random(-150, 150)`,
        y: `random(-100, 100)`,
        rotation: `random(0, 360)`,
        duration: `random(8, 15)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    }

    
    for (let i = 0; i < 8; i++) {
      gsap.to(`#firefly-${i}`, {
        x: `random(-200, 200)`,
        y: `random(-150, 150)`,
        duration: `random(6, 12)`,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.4
      });

      
      gsap.to(`#firefly-${i}`, {
        opacity: `random(0.3, 1)`,
        duration: `random(1, 3)`,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: i * 0.3
      });
    }

    
    gsap.to('.water-ripple', {
      scale: 3,
      opacity: 0,
      duration: 4,
      stagger: 1,
      repeat: -1,
      ease: "power2.out"
    });

    
    gsap.set("#head-text", { opacity: 0, y: 50 });
    gsap.to("#head-text", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    
    gsap.to("#projects-gradient", {
      backgroundPosition: "200% center",
      duration: 6,
      repeat: -1,
      ease: "none",
    });

    
    gsap.fromTo("#description-text", 
      {
        opacity: 0,
        y: 30,
        filter: 'blur(5px)'
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.,
        ease: "power3.out",
        delay: 1,
      }
    );

   
    const projectCards = gsap.utils.toArray(projectsRef.current.children);
    projectCards.forEach((card, index) => {
      // Entrada como hojas que caen
      gsap.fromTo(card, {
        opacity: 0,
        y: -100,
        rotation: -15,
        scale: 0.8,
        filter: 'blur(5px)'
      }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.5,
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top 70%",
          scrub: 1,
        },
        delay: index * 0.2,
      });
    });

  }, []);

  
  const CTA = () => (
    <div className="backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-6 md:p-12 border border-amber-200/50 hover:border-amber-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-amber-200/20 transform hover:-translate-y-2 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-green-600 to-blue-600">
        🚀 Prêt à collaborer ?
      </h3>
      <p className="text-base md:text-lg text-amber-900 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
        Je suis actuellement à la recherche d'une <span className="font-semibold text-green-700">alternance en CDA</span> pour approfondir mes compétences en architecture logicielle et développement d'applications IA. Contactez-moi pour discuter de vos projets !
      </p>
      <div className="flex justify-center">
        <a 
          href="mailto:contact.sparlar@gmail.com"
          className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center max-w-xs"
        >
          ✉️ Me contacter
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div 
        id="magical-background"
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: `
            radial-gradient(circle at 25% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 25%, rgba(34, 139, 34, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(255, 165, 0, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(240, 248, 255, 0.95) 0%, 
              rgba(230, 230, 250, 0.9) 25%,
              rgba(255, 250, 240, 0.9) 50%,
              rgba(240, 255, 240, 0.9) 75%,
              rgba(255, 248, 220, 0.95) 100%
            )
          `
        }}
      >
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            id={`floating-leaf-${i}`}
            className="absolute opacity-40 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 6}px`,
              color: ['#8B4513', '#228B22', '#FF8C00', '#DAA520'][Math.floor(Math.random() * 4)]
            }}
          >
            {['🍃', '🍂', '🌿', '🍁'][Math.floor(Math.random() * 4)]}
          </div>
        ))}

        
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            id={`firefly-${i}`}
            className="absolute w-8 h-8 md:w-2 md:h-2 rounded-full opacity-60 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, #FFD700 0%, transparent 100%)',
              boxShadow: '0 0 8px #FFD700'
            }}
          ></div>
        ))}

        
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="water-ripple absolute w-42 h-42 md:w-32 md:h-32 border-2 border-blue-300 rounded-full opacity-80"
              style={{
                bottom: '450px',
                left: '50%',
                transform: 'translateX(-50%)',
                animationDelay: `${i * 1}s`
              }}
            ></div>
          ))}
        </div>

       
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
      </div>

      <section className='max-container relative z-10 px-4 sm:px-6 lg:px-8 py-6 md:py-8'>
       
        <div className="text-center mb-8 md:mb-16 relative">
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 relative' id="head-text">
            <span className="text-amber-800">Mes</span>{" "}
            <span 
              className='font-bold text-transparent bg-clip-text relative inline-block' 
              id="projects-gradient"
              style={{
                backgroundImage: 'linear-gradient(45deg, #2563eb, #1d4ed8, #1e40af, #3b82f6, #2563eb)',
                backgroundSize: '300% 100%',
                textShadow: '0 0 20px rgba(37, 99, 235, 0.3)'
              }}
            >
              Projets
            </span>{" "}
            <span className="inline-block text-2xl sm:text-3xl md:text-4xl animate-bounce">🚀</span>
          </h1>

          {/* Decoración natural */}
          <div className="flex justify-center items-center gap-4 mb-6 md:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
            <div className="text-xl md:text-2xl">💻</div>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
          </div>

          {/* Descripción mejorada */}
          <div id="description-text" className='backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-200/50 hover:border-blue-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/20 transform hover:-translate-y-1 max-w-4xl mx-auto'>
            <p className='text-blue-900 leading-relaxed text-sm sm:text-base md:text-lg'>
              J'ai développé ces projets pour approfondir mes connaissances en <span className="font-semibold text-amber-700">programmation et design</span>. Chaque projet représente des heures de travail passionnant sur des <span className="font-semibold text-green-700">sites web interactifs</span> utilisant les dernières technologies comme <span className="font-semibold text-purple-700">React, Three.js, GSAP et TypeScript</span>.
            </p>
          </div>
        </div>

        {/* 🎨 GRID DE PROJETS MÁGICOS */}
        <div ref={projectsRef} className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 my-12 md:my-20'>
          {projects.map((project, index) => (
            <div 
              className='group relative backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-amber-200/50 hover:border-amber-300/70 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-200/30 transform hover:-translate-y-2 hover:scale-105 overflow-hidden' 
              key={project.name}
              style={{
                filter: 'drop-shadow(0 10px 20px rgba(139, 69, 19, 0.1))'
              }}
            >
              {/* Efecto de brillo mágico */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Decoración de esquina */}
              <div className="absolute top-2 right-2 text-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {['🌟', '✨', '🚀', '💎', '🦊', '🌸'][index % 6]}
              </div>

              {/* Ícono del proyecto con efectos mágicos */}
              <div className='relative mb-6'>
                <div className='block-container w-16 h-16 md:w-20 md:h-20 mx-auto group-hover:scale-110 transition-transform duration-300'>
                  <div className={`btn-back rounded-2xl ${project.theme} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className='btn-front rounded-2xl flex justify-center items-center bg-white/90 backdrop-blur-sm border-2 border-amber-200 group-hover:border-amber-400 transition-all duration-300'>
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className='w-1/2 h-1/2 object-contain group-hover:brightness-110 transition-all duration-300'
                    />
                  </div>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className='text-center relative z-10'>
                <h4 className='text-xl md:text-2xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-green-700 to-blue-700 group-hover:from-amber-600 group-hover:via-green-600 group-hover:to-blue-600 transition-all duration-300'>
                  {project.name}
                </h4>
                
                <p className='text-slate-700 leading-relaxed mb-6 text-sm md:text-base group-hover:text-slate-800 transition-colors duration-300'>
                  {project.description}
                </p>
                
                
                <div className='flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/link flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center'
                  >
                    <span>🌐 Live Demo</span>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-3 h-3 md:w-4 md:h-4 object-contain group-hover/link:translate-x-1 transition-transform duration-200'
                    />
                  </a>

                  <a
                    href={project.lien}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group/link flex items-center gap-2 bg-gradient-to-r from-amber-500 to-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:from-amber-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto justify-center'
                  >
                    <span>📁 GitHub</span>
                    <img
                      src={arrow}
                      alt='arrow'
                      className='w-3 h-3 md:w-4 md:h-4 object-contain group-hover/link:translate-x-1 transition-transform duration-200'
                    />
                  </a>
                </div>
              </div>

             
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-400 rounded-full animate-ping"
                    style={{
                      top: `${20 + i * 25}%`,
                      left: `${10 + i * 30}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center items-center py-8 md:py-12">
          <div className="flex items-center gap-4 md:gap-6 w-full max-w-2xl">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-purple-400 flex-1"></div>
            <div className="relative">
              <div className="text-2xl md:text-4xl animate-bounce">🚀</div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-lg"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-purple-400 via-amber-400 to-transparent flex-1"></div>
          </div>
        </div>

        {/* CTA Section Enhanced */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-amber-100/30 rounded-2xl md:rounded-3xl blur-xl"></div>
          <div className="relative z-10">
            <CTA />
          </div>
        </div>
      </section>

      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gentlePulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1); 
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(-50%); 
          }
          50% { 
            transform: translateY(-10px) translateX(-50%); 
          }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .magical-text {
          background: linear-gradient(45deg, #2563eb, #1d4ed8, #1e40af, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
          background-size: 300% 100%;
        }

        /* Scrollbar natural */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(37, 99, 235, 0.1);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1d4ed8, #6d28d9);
        }

        /* Asegurar que el navbar funcione */
        .header {
          position: relative;
          z-index: 9999 !important;
          pointer-events: auto !important;
        }

        .header * {
          pointer-events: auto !important;
        }

        /* Ajustes específicos para la clase max-container */
        .max-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Efectos especiales para cards de proyecto */
        .group:hover .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Responsive mejoras */
        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        @media (min-width: 768px) and (max-width: 1279px) {
          .md\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1280px) {
          .xl\\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;