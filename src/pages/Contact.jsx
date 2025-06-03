import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  useGSAP(() => {
    // 🌸 ANIMACIÓN GLOBAL MÁGICA DE LA PÁGINA
    gsap.fromTo('#magical-background', {
      opacity: 0,
      scale: 1.1
    }, {
      opacity: 1,
      scale: 1,
      duration: 3,
      ease: "power2.out"
    });

    // Pétalos y hojas flotantes mágicas
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

    // Luciérnagas mágicas
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

      // Parpadeo de luciérnagas
      gsap.to(`#firefly-${i}`, {
        opacity: `random(0.3, 1)`,
        duration: `random(1, 3)`,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: i * 0.3
      });
    }

    // Ondas mágicas
    gsap.to('.water-ripple', {
      scale: 3,
      opacity: 0,
      duration: 4,
      stagger: 1,
      repeat: -1,
      ease: "power2.out"
    });

    // 🌺 TEXTO PRINCIPAL CON MAGIA
    gsap.set("#head-text", { opacity: 0, y: 50 });
    gsap.to("#head-text", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "back.out(1.7)",
      delay: 0.5
    });

    // Efecto de aurora en "Contact"
    gsap.to("#contact-gradient", {
      backgroundPosition: "200% center",
      duration: 6,
      repeat: -1,
      ease: "none",
    });

    // Formulario con entrada suave
    gsap.fromTo("#contact-form", 
      {
        opacity: 0,
        x: -100,
        filter: 'blur(5px)'
      },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Canvas 3D con entrada suave
    gsap.fromTo("#fox-canvas", 
      {
        opacity: 0,
        x: 50,
        filter: 'blur(5px)'
      },
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );

  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
    // Efecto mágico en focus
    gsap.to(event.target, {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(255, 165, 0, 0.3)",
      duration: 0.3,
      ease: "power2.out"
    });
  };
  
  const handleBlur = () => {
    setCurrentAnimation("idle");
    // Reset en blur
    gsap.to(event.target, {
      scale: 1,
      boxShadow: "0 5px 15px rgba(139, 69, 19, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleSubmit = () => {
    // Validación básica
    if (!form.name || !form.email || !form.message) {
      showAlert({
        show: true,
        text: "Veuillez remplir tous les champs 📝",
        type: "danger",
      });
      return;
    }

    setLoading(true);
    setCurrentAnimation("hit");

    // Animación mágica en submit
    gsap.to("#submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "René Jimémez",
          from_email: form.email,
          to_email: "rexmayorga97@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Merci pour votre message 😃",
            type: "success",
          });

          // Animación de éxito
          gsap.fromTo("#contact-form", {
            scale: 1
          }, {
            scale: 1.02,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "elastic.out(1, 0.3)"
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "J'ai pas reçu votre message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌲 FONDO MÁGICO DEL BOSQUE */}
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
        {/* Hojas flotantes */}
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

        {/* Luciérnagas mágicas */}
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

        {/* Ondas de agua mágica */}
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

        {/* Rayos de sol suaves */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-1/3 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, rgba(255, 215, 0, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
      </div>

      <section className='relative z-10 flex lg:flex-row flex-col max-container px-4 sm:px-6 lg:px-8 py-6 md:py-8'>
        {alert.show && <Alert {...alert} />}

        {/* 🦊 HEADER MÁGICO */}
        <div className="w-full text-center mb-8 md:mb-12 lg:hidden">
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 relative' id="head-text">
            <span 
              className='font-bold text-transparent bg-clip-text relative inline-block' 
              id="contact-gradient"
              style={{
                backgroundImage: 'linear-gradient(45deg, #8B4513, #FF8C00, #DAA520, #228B22, #8B4513)',
                backgroundSize: '300% 100%',
                textShadow: '0 0 20px rgba(255, 140, 0, 0.3)'
              }}
            >
              Contactez-moi
            </span>{" "}
            <span className="inline-block text-2xl sm:text-3xl animate-bounce">📬</span>
          </h1>

          {/* Decoración natural */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
            <div className="text-xl">🦊</div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-16 sm:max-w-32"></div>
          </div>
        </div>

        {/* FORMULARIO MÁGICO */}
        <div className='flex-1 min-w-[50%] flex flex-col lg:pr-8'>
          {/* Header para desktop */}
          <div className="hidden lg:block mb-8">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative' id="head-text">
              <span 
                className='font-bold text-transparent bg-clip-text relative inline-block' 
                id="contact-gradient"
                style={{
                  backgroundImage: 'linear-gradient(45deg, #8B4513, #FF8C00, #DAA520, #228B22, #8B4513)',
                  backgroundSize: '300% 100%',
                  textShadow: '0 0 20px rgba(255, 140, 0, 0.3)'
                }}
              >
                Contactez-moi
              </span>{" "}
              <span className="inline-block text-3xl md:text-4xl animate-bounce">📬</span>
            </h1>

            {/* Decoración natural */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-32"></div>
              <div className="text-2xl">🦊</div>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent flex-1 max-w-32"></div>
            </div>
          </div>

          {/* Descripción mágica */}
          <div className='backdrop-blur-sm bg-white/40 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-amber-200/50 hover:border-amber-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-amber-200/20 transform hover:-translate-y-1 mb-8'>
            <p className='text-amber-900 leading-relaxed text-sm sm:text-base md:text-lg'>
              <span className="text-amber-700 font-semibold">✨ Prêt à créer ensemble ?</span> N'hésitez pas à me contacter pour discuter de vos projets, d'une <span className="text-green-700 font-semibold">alternance en CDA</span>, ou simplement échanger sur les technologies que j'utilise. Le petit renard réagira à vos interactions ! 🦊
            </p>
          </div>

          <div
            id="contact-form"
            className='w-full flex flex-col gap-6 backdrop-blur-sm bg-white/30 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-green-200/50 hover:border-green-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/20'
          >
            <div className="space-y-6">
              <label className='flex flex-col gap-2'>
                <span className='text-amber-800 font-semibold text-sm md:text-base flex items-center gap-2'>
                  <span>👤</span> Prénom
                </span>
                <input
                  type='text'
                  name='name'
                  className='backdrop-blur-sm bg-white/50 border-2 border-amber-200/50 rounded-xl px-4 py-3 md:py-4 text-amber-900 placeholder-amber-600/60 focus:border-amber-400 focus:outline-none transition-all duration-300 text-sm md:text-base'
                  placeholder='Votre prénom...'
                  required
                  value={form.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)'
                  }}
                />
              </label>

              <label className='flex flex-col gap-2'>
                <span className='text-amber-800 font-semibold text-sm md:text-base flex items-center gap-2'>
                  <span>📧</span> Email
                </span>
                <input
                  type='email'
                  name='email'
                  className='backdrop-blur-sm bg-white/50 border-2 border-amber-200/50 rounded-xl px-4 py-3 md:py-4 text-amber-900 placeholder-amber-600/60 focus:border-amber-400 focus:outline-none transition-all duration-300 text-sm md:text-base'
                  placeholder='votre.email@exemple.com'
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)'
                  }}
                />
              </label>

              <label className='flex flex-col gap-2'>
                <span className='text-amber-800 font-semibold text-sm md:text-base flex items-center gap-2'>
                  <span>💬</span> Votre message
                </span>
                <textarea
                  name='message'
                  rows='5'
                  className='backdrop-blur-sm bg-white/50 border-2 border-amber-200/50 rounded-xl px-4 py-3 md:py-4 text-amber-900 placeholder-amber-600/60 focus:border-amber-400 focus:outline-none transition-all duration-300 resize-none text-sm md:text-base'
                  placeholder='Partagez-moi vos idées, projets, ou questions...'
                  required
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  style={{
                    boxShadow: '0 5px 15px rgba(139, 69, 19, 0.1)'
                  }}
                />
              </label>
            </div>

            <button
              id="submit-btn"
              type='button'
              disabled={loading}
              onClick={handleSubmit}
              className='relative overflow-hidden bg-gradient-to-r from-amber-500 to-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm md:text-base'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></span>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <span>🚀</span> Envoyer le message
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* CANVAS 3D MÁGICO */}
        <div 
          id="fox-canvas"
          className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] mt-8 lg:mt-0 relative'
        >
          {/* Decoración mágica alrededor del canvas */}
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl backdrop-blur-sm bg-white/20 border border-blue-200/50 hover:border-blue-300/70 transition-all duration-500 hover:shadow-xl hover:shadow-blue-200/20 overflow-hidden">
            {/* Partículas decorativas */}
            <div className="absolute top-4 right-4 text-2xl opacity-60 animate-pulse">✨</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-60 animate-pulse">🌟</div>
            <div className="absolute top-1/2 left-4 text-xl opacity-40 animate-bounce">🍃</div>
            <div className="absolute top-1/4 right-4 text-xl opacity-40 animate-bounce">🦋</div>
          </div>

          <Canvas
            className="rounded-2xl md:rounded-3xl"
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>

          {/* Texto informativo */}
          <div className="absolute bottom-4 right-4 backdrop-blur-sm bg-white/40 rounded-xl px-3 py-2 border border-amber-200/50">
            <p className="text-xs md:text-sm text-amber-800 font-medium">
              🦊 Interagissez avec le formulaire !
            </p>
          </div>
        </div>
      </section>

      {/* 🎨 ESTILOS MÁGICOS NATURALES */}
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

        /* Scrollbar natural */
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

        /* Efectos especiales para inputs */
        input:focus, textarea:focus {
          transform: translateY(-1px);
        }

        /* Responsive mejoras */
        @media (max-width: 768px) {
          .lg\\:flex-row {
            flex-direction: column;
          }
          
          .lg\\:w-1\\/2 {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;