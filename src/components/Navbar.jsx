
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { rexlogo } from "../assets/images";




const Navbar = () => {
  const navbarRef = useRef();
  const logoRef = useRef();
  const particlesRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef();

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Animación de entrada de la navbar
    gsap.fromTo(navbarRef.current, {
      y: -100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1, 0.8)",
      delay: 0.2
    });

    // Animación flotante sutil del logo
    gsap.to(logoRef.current, {
      y: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animación de las partículas de fondo (solo en desktop)
    if (!isMobile) {
      particlesRef.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            x: `random(-20, 20)`,
            y: `random(-15, 15)`,
            rotation: `random(0, 360)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.3
          });
        }
      });
    }
  }, [isMobile]);

  // Animación del menú móvil
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current, {
          height: 0,
          opacity: 0
        }, {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [isMenuOpen]);

  const addParticleRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      ref={navbarRef}
      className='fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 py-2 sm:py-4'
    >
      {/* Fondo mágico con glassmorphism */}
      <div className="absolute inset-0 backdrop-blur-md bg-gradient-to-r from-amber-50/40 via-green-50/30 to-blue-50/40 border-b border-amber-200/30 shadow-lg">
        {/* Partículas flotantes de fondo - Solo en desktop */}
        {!isMobile && [...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={addParticleRef}
            className="absolute opacity-20 text-amber-400 hidden md:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${6 + Math.random() * 4}px`
            }}
          >
            {['✨', '🍃', '🌟', '💫'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
        
        {/* Efecto de brillo sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent opacity-50"></div>
      </div>

      {/* Contenido de la navbar */}
      <div className="relative flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo con efectos mágicos - Responsive */}
        <NavLink to='/' className="group relative z-10">
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-amber-400 to-green-400 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
          <div 
            ref={logoRef}
            className="relative bg-white/60 backdrop-blur-sm p-1.5 sm:p-2 rounded-full border border-amber-200/50 group-hover:border-amber-300/70 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-200/30"
          >
            <img 
              src={rexlogo} 
              alt='René Jiménez Logo' 
              className='w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-110 transition-transform duration-300' 
            />
          </div>
        </NavLink>

        {/* Navegación Desktop */}
        <nav className='hidden md:flex items-center gap-2 lg:gap-8'>
          {[
            { to: '/about', label: 'About', icon: '🦊' },
            { to: '/projects', label: 'Projets', icon: '⚡' },
            { to: '/contact', label: 'Contact', icon: '🌟' }
          ].map((item, index) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `group relative px-4 py-2 lg:px-6 lg:py-3 rounded-full font-semibold text-sm lg:text-base transition-all duration-500 transform hover:scale-105 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-400 to-green-400 text-white shadow-lg shadow-amber-200/50'
                    : 'bg-white/40 backdrop-blur-sm text-amber-800 hover:bg-white/60 hover:text-amber-900 border border-amber-200/30 hover:border-amber-300/50'
                }`
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 via-amber-200/30 to-amber-200/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="relative flex items-center gap-2">
                <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </span>

              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-amber-300 rounded-full animate-ping"
                    style={{
                      top: `${20 + i * 20}%`,
                      left: `${15 + i * 25}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>
            </NavLink>
          ))}
        </nav>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-10 p-2 rounded-lg bg-white/40 backdrop-blur-sm border border-amber-200/30 hover:bg-white/60 transition-all duration-300"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-amber-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-amber-800 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-amber-800 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
        style={{ height: 0 }}
      >
        <nav className="relative bg-white/90 backdrop-blur-md border-t border-amber-200/30 shadow-lg mx-4 rounded-b-2xl mt-4 pb-4">
          {/* Efecto de brillo en el menú móvil */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-green-50/50 rounded-b-2xl"></div>
          
          <div className="relative flex flex-col space-y-2 p-4">
            {[
              { to: '/about', label: 'About Me', icon: '🦊', desc: 'Conoce mi historia' },
              { to: '/projects', label: 'Mes Projets', icon: '⚡', desc: 'Mis trabajos creativos' },
              { to: '/contact', label: 'Contact', icon: '🌟', desc: 'Hablemos de tu proyecto' }
            ].map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) => 
                  `group relative p-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-green-400 text-white shadow-lg shadow-amber-200/50'
                      : 'bg-white/60 text-amber-800 hover:bg-white/80 border border-amber-200/30'
                  }`
                }
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-lg font-bold">{item.label}</div>
                    <div className="text-sm opacity-70 font-normal">{item.desc}</div>
                  </div>
                  <div className="text-amber-600 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </div>
                </div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200/0 via-amber-200/20 to-amber-200/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </NavLink>
            ))}
          </div>

          {/* Decoración inferior del menú móvil */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent rounded-full"></div>
        </nav>
      </div>

      {/* Overlay para cerrar menú móvil */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
          onClick={closeMenu}
        ></div>
      )}

      {/* Sombra mágica inferior */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>
    </header>
  );
};

export default Navbar;