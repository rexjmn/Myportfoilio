import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences, skills } from "../constants";
import { useGSAP } from "@gsap/react";
import "react-vertical-timeline-component/style.min.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";
import { rene } from "../assets/images";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 4,
    yoyo: true
  });
  const scrollRef = useRef();
  const profileRef = useRef();
  const sectionRef = useRef();

  useGSAP(() => {
    // Animation globale d'apparition de la page
    gsap.fromTo('#magical-background', {
      opacity: 0,
      scale: 1.1
    }, {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.out"
    });

    // Animation des éléments flottants - corrigé pour correspondre au JSX
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

    // Animation des lucioles - corrigé pour correspondre au JSX
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

      // Effet de clignotement des lucioles
      gsap.to(`#firefly-${i}`, {
        opacity: `random(0.3, 1)`,
        duration: `random(1, 3)`,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: i * 0.3
      });
    }

    // Animation des ondulations d'eau
    gsap.to('.water-ripple', {
      scale: 3,
      opacity: 0,
      duration: 4,
      stagger: 1,
      repeat: -1,
      ease: "power2.out"
    });

    // Section des compétences avec animation naturelle
    const boxes = gsap.utils.toArray(
      scrollRef.current.children
    );
    boxes.forEach((box, index) => {
      // Animation d'entrée progressive
      gsap.fromTo(box, {
        opacity: 0,
        y: -200,
        rotation: -90,
        scale: 0.3,
        filter: 'blur(10px)'
      }, {
        rotation: 0,
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 2,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: box,
          start: "top bottom-=100",
          end: "top 60%",
          scrub: 1,
        },
        delay: index * 0.15,
      });

      // Effets de survol interactifs
      box.addEventListener('mouseenter', () => {
        gsap.to(box, {
          scale: 1.3,
          y: -10,
          rotation: `random(-15, 15)`,
          filter: 'brightness(1.3) saturate(1.4) drop-shadow(0 10px 20px rgba(139, 69, 19, 0.3))',
          duration: 0.4,
          ease: "back.out(1.7)"
        });

        // Effet d'éléments qui tombent
        gsap.fromTo(box.querySelector('.leaf-effect'), {
          scale: 0,
          opacity: 1,
          y: 0
        }, {
          scale: 1.5,
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out"
        });
      });

      box.addEventListener('mouseleave', () => {
        gsap.to(box, {
          scale: 1,
          y: 0,
          rotation: 0,
          filter: 'brightness(1) saturate(1) drop-shadow(0 5px 15px rgba(139, 69, 19, 0.2))',
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });
      });
    })

    // Animation de la photo de profil - avec délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
      const profileContainer = document.getElementById('profile-container');
      if (profileContainer) {
        gsap.fromTo('#profile-container', {
          scale: 0,
          opacity: 0,
          y: -100,
          filter: 'blur(20px)',
          rotation: -30
        }, {
          scale: 1,
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          rotation: 0,
          duration: 2.5,
          ease: "elastic.out(1, 0.6)",
          delay: 0.3
        });
      }
    }, 100);

    // Animation de l'aura flottante - avec vérification
    setTimeout(() => {
      const magicAuras = document.querySelectorAll('.magic-aura');
      if (magicAuras.length > 0) {
        gsap.fromTo('.magic-aura', {
          opacity: 0.3,
          scale: 0.8
        }, {
          opacity: 0.8,
          scale: 1.2,
          duration: 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
    }, 150);

    // Animation de lévitation douce - avec vérification et délai
    setTimeout(() => {
      const profileImage = document.getElementById('profile-image');
      if (profileImage) {
        timeline.fromTo('#profile-image', {
          y: 0,
          rotation: 0,
          filter: 'brightness(1) contrast(1) saturate(1)',
        }, {
          y: -15,
          rotation: 3,
          filter: 'brightness(1.1) contrast(1.05) saturate(1.2)',
          duration: 4,
          ease: "sine.inOut"
        }).to('#profile-image', {
          y: 15,
          rotation: -3,
          filter: 'brightness(0.95) contrast(1.1) saturate(0.9)',
          duration: 4,
          ease: "sine.inOut"
        });
      }
    }, 300);

    // Animation des particules en orbite - avec vérification
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        const particle = document.getElementById(`magic-particle-${i}`);
        if (particle) {
          gsap.to(`#magic-particle-${i}`, {
            rotation: 360,
            transformOrigin: '0 80px',
            duration: 10 + i,
            repeat: -1,
            ease: "none"
          });
        }
      }
    }, 200);

    // Effets de survol interactifs - avec délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
      const profileContainer = document.getElementById('profile-container');
      
      if (profileContainer) {
        profileContainer.addEventListener('mouseenter', () => {
          // Vérifier que l'élément existe avant d'animer
          const profileImage = document.getElementById('profile-image');
          if (profileImage) {
            // Transformation principale
            gsap.to('#profile-image', {
              scale: 1.15,
              filter: 'brightness(1.3) contrast(1.2) saturate(1.5) drop-shadow(0 0 30px rgba(255, 165, 0, 0.6))',
              duration: 0.5,
              ease: "back.out(1.7)"
            });
          }
          
          // Animation d'explosion d'éléments
          for (let i = 0; i < 12; i++) {
            const petal = document.getElementById(`petal-${i}`);
            if (petal) {
              gsap.fromTo(`#petal-${i}`, {
                scale: 0,
                opacity: 1,
                x: 0,
                y: 0
              }, {
                scale: 1,
                opacity: 0,
                x: `random(-80, 80)`,
                y: `random(-80, 80)`,
                rotation: `random(0, 360)`,
                duration: 1.5,
                ease: "power2.out"
              });
            }
          }

          // Animation d'onde expansive
          const magicWave = document.getElementById('magic-wave');
          if (magicWave) {
            gsap.fromTo('#magic-wave', {
              scale: 0,
              opacity: 0.8
            }, {
              scale: 2.5,
              opacity: 0,
              duration: 1.2,
              ease: "power2.out"
            });
          }

          // Animation du reflet doré
          const goldenGlow = document.querySelector('.golden-glow');
          if (goldenGlow) {
            gsap.to('.golden-glow', {
              opacity: 0.9,
              scale: 1.3,
              duration: 0.5,
              ease: "power2.out"
            });
          }
        });

        profileContainer.addEventListener('mouseleave', () => {
          // Vérifier que l'élément existe avant d'animer
          const profileImage = document.getElementById('profile-image');
          if (profileImage) {
            // Reset progressif
            gsap.to('#profile-image', {
              scale: 1,
              filter: 'brightness(1) contrast(1) saturate(1) drop-shadow(0 0 0px rgba(255, 165, 0, 0))',
              duration: 0.8,
              ease: "elastic.out(1, 0.5)"
            });
          }
          
          const goldenGlow = document.querySelector('.golden-glow');
          if (goldenGlow) {
            gsap.to('.golden-glow', {
              opacity: 0.4,
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut"
            });
          }
        });
      }
    }, 400);

    // Effet de mouvement naturel continu - avec vérification et délai
    let breezeInterval;
    setTimeout(() => {
      breezeInterval = setInterval(() => {
        const profileImage = document.getElementById('profile-image');
        if (profileImage && Math.random() > 0.7) {
          gsap.to('#profile-image', {
            rotation: `random(-2, 2)`,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "sine.inOut"
          });
        }
      }, 3000);
    }, 500);

    // Nettoyage de l'interval quand le composant se démonte
    return () => {
      if (breezeInterval) {
        clearInterval(breezeInterval);
      }
    };

    // Animation du texte principal
    gsap.set("#head-text", { opacity: 0, y: 50 });
    gsap.to("#head-text", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    // Effet de dégradé animé sur le nom
    gsap.to("#name-gradient", {
      backgroundPosition: "200% center",
      duration: 6,
      repeat: -1,
      ease: "none",
    });

    // Animation du texte descriptif
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
        duration: 2,
        ease: "power3.out",
        delay: 1.5,
      }
    );

    // Animation de la timeline d'expérience
    gsap.fromTo('.vertical-timeline', {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 1.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.vertical-timeline',
        start: "top 95%",
      }
    });

  }, []);

  // Composant Call-to-Action intégré - section contact uniquement
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
          href="/contact"
          className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center max-w-xs"
        >
          ✉️ Me contacter
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Arrière-plan avec dégradés et effets visuels */}
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
        {/* Éléments flottants décoratifs - optimisé pour mobile */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            id={`floating-leaf-${i}`}
            className="absolute opacity-20 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 20}px`,
              color: ['#8B4513', '#228B22', '#FF8C00', '#DAA520'][Math.floor(Math.random() * 4)]
            }}
          >
            {['🍃', '🍂', '🌿', '🍁'][Math.floor(Math.random() * 4)]}
          </div>
        ))}

        {/* Points lumineux animés - optimisé pour mobile */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            id={`firefly-${i}`}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full opacity-60 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)',
              boxShadow: '0 0 8px #FFD700'
            }}
          ></div>
        ))}

        {/* Effets d'ondulation en bas de page */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="water-ripple absolute w-20 h-20 md:w-32 md:h-32 border-2 border-blue-300 rounded-full opacity-20"
              style={{
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                animationDelay: `${i * 1}s`
              }}
            ></div>
          ))}
        </div>

        {/* Effet de lumière diffuse */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
      </div>

      <section className='max-container relative z-10 px-4 sm:px-6 lg:px-8 py-6 md:py-8'>
        {/* En-tête principal */}
        <div className="text-center mb-8 md:mb-16 relative">
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 relative' id="head-text">
            <span className="text-amber-800">Transformons vos idées en réalité numérique,</span>{" "}
            <br className="sm:hidden" />
            <span 
              className='font-bold text-transparent bg-clip-text relative inline-block' 
              id="name-gradient"
              style={{
                backgroundImage: 'linear-gradient(45deg, #8B4513, #FF8C00, #DAA520, #228B22, #8B4513)',
                backgroundSize: '300% 100%',
                textShadow: '0 0 20px rgba(255, 140, 0, 0.3)'
              }}
            >
              Créateur d'expériences numériques sur mesure
            </span>{" "}
            <span className="inline-block text-2xl sm:text-3xl md:text-4xl animate-bounce">🧙🏼‍♂️</span>
          </h1>

          {/* Séparateur décoratif */}
          <div className="flex justify-center items-center gap-4 mb-6 md:mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
            <div className="text-xl md:text-2xl">🦊</div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
          </div>
        </div>
      
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 md:gap-16 lg:gap-12 my-12 md:my-20">
          <div className="flex-1 space-y-4 md:space-y-6 order-2 lg:order-1 w-full" id="description-text">
            <div className="backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-amber-200/50 hover:border-amber-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-amber-200/20 transform hover:-translate-y-1">
              <p className="text-amber-900 leading-relaxed text-sm sm:text-base md:text-lg">
                <span className="text-amber-700 font-semibold">🌟 René Jiménez, Développeur Full-Stack</span> passionné, originaire du Salvador et vivant en France. Actuellement en formation à <span className="text-green-700 font-semibold">La Fabrique Numérique Paloise</span>, je vise le titre de <span className="text-blue-700 font-semibold">Concepteur Développeur d'Applications (CDA)</span>.
              </p>
            </div>
            
            <div className="backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-green-200/50 hover:border-green-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/20 transform hover:-translate-y-1">
              <p className="text-green-900 leading-relaxed text-sm sm:text-base md:text-lg">
                <span className="text-blue-700 font-semibold">💻 Compétences actuelles :</span> React.js, Node.js, Three.js, TypeScript, NestJS, MongoDB, SQL, AWS, Docker, CI/CD, PHP/Symfony, React Native. <span className="text-purple-700 font-semibold">🚀 Prochaines technologies :</span> Architecture microservices, DevSecOps, IA/MLOps, Big Data & Azure/GCP.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-200/50 hover:border-blue-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/20 transform hover:-translate-y-1">
              <p className="text-blue-900 leading-relaxed text-sm sm:text-base md:text-lg">
                <span className="text-red-700 font-semibold">🌍 Polyglotte :</span> français, anglais et espagnol. Je donne également des <span className="text-purple-700 font-semibold">cours de langues particuliers</span>, ce qui développe mes compétences pédagogiques et ma capacité à expliquer des concepts complexes de manière claire.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-purple-200/50 hover:border-purple-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-purple-200/20 transform hover:-translate-y-1">
              <p className="text-purple-900 leading-relaxed text-sm sm:text-base md:text-lg">
                <span className="text-amber-700 font-semibold">🎯 Objectif :</span> Recherch­e activement une <span className="text-green-700 font-semibold">alternance en CDA</span> pour approfondir l'architecture logicielle, le développement d'applications IA et contribuer à des projets innovants. Passionné par la création d'expériences utilisateur exceptionnelles ! 🦊✨
              </p>
            </div>
          </div>

          {/* Section photo de profil avec animation centrale */}
          <div className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto mb-8 lg:mb-0">
            <div className="flex justify-center w-full px-4 sm:px-8 md:px-12 lg:px-0">
              <div 
                id="profile-container" 
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 cursor-pointer overflow-visible mx-auto"
                style={{
                  filter: 'drop-shadow(0 10px 20px rgba(139, 69, 19, 0.2))',
                  margin: '60px auto' // Espace supplémentaire pour les animations
                }}
              >
                {/* Aura lumineuse de fond */}
                <div 
                  className="magic-aura absolute inset-6 md:inset-8 rounded-full opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, rgba(255, 165, 0, 0.4) 40%, rgba(139, 69, 19, 0.2) 70%, transparent 100%)',
                    filter: 'blur(15px)'
                  }}
                ></div>

                {/* Onde d'expansion au survol */}
                <div 
                  id="magic-wave"
                  className="absolute inset-0 rounded-full border-2 border-gold opacity-0"
                  style={{
                    borderColor: '#FFD700',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%'
                  }}
                ></div>

                {/* Particules en orbite autour de la photo */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    id={`magic-particle-${i}`}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 opacity-70"
                    style={{
                      top: '40%',
                      left: '50%',
                      transformOrigin: '0 80px',
                      transform: `rotate(${i * 45}deg)`
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-full"
                      style={{
                        background: ['#FFD700', '#FF8C00', '#32CD32', '#87CEEB'][i % 4],
                        boxShadow: `0 0 6px ${['#FFD700', '#FF8C00', '#32CD32', '#87CEEB'][i % 4]}`
                      }}
                    ></div>
                  </div>
                ))}

                {/* Éléments décoratifs pour l'effet de survol */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    id={`petal-${i}`}
                    className="absolute text-lg md:text-2xl opacity-0"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {['🌸', '🌺', '🌻', '🌼'][i % 4]}
                  </div>
                ))}
                
                {/* Effet de brillance doré */}
                <div 
                  className="golden-glow absolute inset-8 md:inset-12 rounded-full opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%)',
                    filter: 'blur(10px)'
                  }}
                ></div>

                {/* Conteneur principal de l'image */}
                <div className="absolute inset-8 md:inset-12 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl md:shadow-2xl relative bg-gradient-to-br from-orange-100 to-amber-50">
                  {/* Effet de rotation décoratif */}
                  <div 
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      background: `repeating-conic-gradient(
                        from 0deg at 50% 50%,
                        transparent 0deg,
                        rgba(255, 215, 0, 0.1) 30deg,
                        transparent 60deg
                      )`,
                      animation: 'spin 20s linear infinite'
                    }}
                  ></div>

                  <img 
                    id="profile-image"
                    src={rene} 
                    alt="René - Développeur Magique" 
                    className="w-full h-full object-cover transition-all duration-500 relative z-10"
                    style={{
                      filter: 'contrast(1.05) saturate(1.1) brightness(1.02)'
                    }}
                  />
                </div>
                
                {/* Points lumineux aux angles */}
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 md:w-4 md:h-4 rounded-full opacity-60"
                    style={{
                      background: `radial-gradient(circle, ${
                        ['#FFD700', '#FF8C00', '#32CD32', '#87CEEB'][i]
                      } 0%, transparent 70%)`,
                      [['top', 'right', 'bottom', 'left'][i]]: '6px',
                      [['right', 'bottom', 'left', 'top'][i]]: '6px',
                      animation: `gentlePulse ${3 + i * 0.5}s ease-in-out infinite`,
                      boxShadow: `0 0 10px ${['#FFD700', '#FF8C00', '#32CD32', '#87CEEB'][i]}`
                    }}
                  ></div>
                ))}

                {/* Texte descriptif flottant */}
                <div 
                  className="absolute -bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 opacity-60 text-xs md:text-sm font-mono text-amber-700 text-center px-2"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                >
                  ✨ Créateur d'expériences magiques ✨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section des compétences avec animation naturelle */}
        <div className='py-12 md:py-16'>
          <div className="text-center mb-8 md:mb-12">
            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-green-600 to-blue-600 mb-4 md:mb-6'>
              🌟 Mes Compétences
            </h3>
            <div className="flex justify-center items-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
              <div className="text-xl md:text-2xl">🦊</div>
              <div className="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
            </div>
          </div>

          <div ref={scrollRef} className='mt-8 md:mt-16 flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center px-2 sm:px-4'>
            {skills.map((skill, index) => (
              <div  
                className='relative block-container w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 opacity-0 group' 
                key={skill.name}
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(139, 69, 19, 0.2))'
                }}
              >
                {/* Effet décoratif au survol */}
                <div className="leaf-effect absolute inset-0 text-lg md:text-2xl flex items-center justify-center opacity-0">
                  🍃
                </div>
                
                {/* Bordure avec dégradé */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-300 via-green-300 to-blue-300 opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className='btn-back rounded-xl md:rounded-2xl bg-amber-50/80 backdrop-blur-sm' />
                <div className='btn-front rounded-xl md:rounded-2xl flex justify-center items-center bg-white/90 backdrop-blur-sm border border-amber-200 md:border-2 group-hover:border-amber-400 transition-all duration-500 relative overflow-hidden'>
                  {/* Effet de brillance au passage */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain relative z-10 group-hover:brightness-110 transition-all duration-500'
                  />
                </div>
                
                {/* Infobulle de compétence - positionnement optimisé */}
                <div className="absolute -top-12 sm:-top-14 md:-top-16 left-1/2 transform -translate-x-1/2 bg-amber-100 text-amber-800 px-2 md:px-3 py-1 md:py-2 rounded-lg text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap border border-amber-300 shadow-lg z-50">
                  ✨ {skill.name}
                  {/* Flèche indicatrice */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 md:border-l-4 md:border-r-4 md:border-t-4 border-transparent border-t-amber-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section de l'expérience professionnelle */}
        <div className='py-12 md:py-20'>
          <div className="text-center mb-8 md:mb-16">
            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-amber-600 to-blue-600 mb-4 md:mb-6'>
              🌿 Mon Parcours Professionnel
            </h3>
            <div className="flex justify-center items-center gap-4 mb-6 md:mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
              <div className="text-xl md:text-2xl">🌳</div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
            </div>
            
            <div className='backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-green-200/50 max-w-2xl mx-auto'>
              <p className="text-green-800 leading-relaxed text-sm sm:text-base md:text-lg">
                🦊 J'ai collaboré avec diverses entreprises, cultivant mes compétences et travaillant avec des équipes talentueuses dans ce voyage magique :
              </p>
            </div>
          </div>

          <div className='mt-8 md:mt-12 flex justify-center'>
            <div className="vertical-timeline relative max-w-4xl w-full">
              <VerticalTimeline>
                {experiences.map((experience, index) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    iconStyle={{ 
                      background: experience.iconBg,
                      boxShadow: `0 0 15px ${experience.iconBg}40`,
                      border: `2px solid ${experience.iconBg}`,
                      transform: 'scale(1.05)'
                    }}
                    icon={
                      <div className='flex justify-center items-center w-full h-full relative'>
                        <img
                          src={experience.icon}
                          alt={experience.company_name}
                          className='w-[60%] h-[60%] object-contain'
                        />
                        {/* Aura colorée autour de l'icône */}
                        <div 
                          className="absolute inset-0 rounded-full opacity-40"
                          style={{
                            background: `radial-gradient(circle, ${experience.iconBg}60 0%, transparent 70%)`,
                            animation: 'gentlePulse 3s ease-in-out infinite'
                          }}
                        ></div>
                      </div>
                    }
                    contentStyle={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 248, 220, 0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${experience.iconBg}40`,
                      borderRadius: '20px',
                      boxShadow: `0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(139, 69, 19, 0.1)`,
                      color: '#4a5568',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    contentArrowStyle={{
                      borderRight: `7px solid rgba(255, 255, 255, 0.9)`
                    }}
                  >
                    <div className="relative z-10">
                      {/* Ligne décorative en haut */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-green-400 to-blue-400 opacity-60 rounded-t-full"></div>
                      
                      <h3 className='text-amber-800 text-base sm:text-lg md:text-xl font-bold mb-2 relative'>
                        <span className="bg-gradient-to-r from-amber-700 to-green-700 bg-clip-text text-transparent">
                          🌟 {experience.title}
                        </span>
                      </h3>
                      <p className='text-green-700 font-semibold text-sm md:text-base mb-3 md:mb-4 relative'>
                        🏢 {experience.company_name}
                      </p>

                      <ul className='space-y-2 md:space-y-3 relative'>
                        {experience.points.map((point, pointIndex) => (
                          <li
                            key={`experience-point-${pointIndex}`}
                            className='text-slate-700 font-normal text-xs sm:text-sm leading-relaxed flex items-start gap-2 md:gap-3'
                          >
                            <span className="text-base md:text-lg mt-0.5 flex-shrink-0">🍃</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Élément décoratif dans le coin */}
                    <div className="absolute top-2 right-2 text-xl md:text-2xl opacity-20">
                      {['🌸', '🌿', '🦊', '✨'][index % 10]}
                    </div>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
          </div>
        </div>

        {/* Séparateur décoratif */}
        <div className="flex justify-center items-center py-8 md:py-12">
          <div className="flex items-center gap-4 md:gap-6 w-full max-w-2xl">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-green-400 flex-1"></div>
            <div className="relative">
              <div className="text-2xl md:text-4xl animate-bounce">🦊</div>
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-green-400 rounded-full opacity-20 blur-lg"></div>
            </div>
            <div className="h-px bg-gradient-to-r from-green-400 via-blue-400 to-transparent flex-1"></div>
          </div>
        </div>

        {/* Section Call-to-Action améliorée - contact uniquement */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-green-100/30 to-blue-100/30 rounded-2xl md:rounded-3xl blur-xl"></div>
          <div className="relative z-10">
            <CTA />
          </div>
        </div>
      </section>

      {/* Styles CSS personnalisés */}
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
          background: linear-gradient(45deg, #8B4513, #FF8C00, #DAA520, #228B22);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
          background-size: 300% 100%;
        }

        .nature-glow {
          text-shadow: 
            0 0 10px rgba(139, 69, 19, 0.3),
            0 0 20px rgba(255, 140, 0, 0.2),
            0 0 30px rgba(218, 165, 32, 0.1);
        }

        /* Espace supplémentaire pour le conteneur de la photo de profil */
        #profile-container {
          padding: 40px;
        }

        @media (max-width: 768px) {
          #profile-container {
            padding: 60px 20px;
            margin: 80px auto !important;
          }
        }

        /* S'assurer que la navigation fonctionne correctement */
        .header {
          position: relative;
          z-index: 9999 !important;
          pointer-events: auto !important;
        }

        .header * {
          pointer-events: auto !important;
        }

        /* Barre de défilement personnalisée */}
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(139, 69, 19, 0.1);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8B4513, #FF8C00);
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #FF8C00, #DAA520);
        }

        /* Ajustements pour la classe conteneur principal */}
        .max-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Défilement fluide */}
        html {
          scroll-behavior: smooth;
        }

        /* Améliorations responsive supplémentaires */
        @media (max-width: 640px) {
          .vertical-timeline-element-date {
            font-size: 12px !important;
          }
          
          .vertical-timeline-element-content {
            padding: 1rem !important;
          }
        }

        @media (max-width: 768px) {
          .vertical-timeline::before {
            left: 8px !important;
          }
          
          .vertical-timeline-element-icon {
            width: 40px !important;
            height: 40px !important;
            left: -12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;