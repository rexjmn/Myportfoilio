import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
  
    //mise a jour du parametre Y pour simuler le movement de voler avec la funtions 'sin wave'
    
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

     //cela reassure si le oiseau attend un point relative a la fin du camera 
        // si c'est le cas on change la direction pour reculer et on retourne le oiseau 180° sur Y

    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
     // on change la direction pour avancer et ça empeche la rotation d'oiseau, on revient au debut.
      birdRef.current.rotation.y = 0;
    }

// mise à jour de la position de X et Z basé sur la direction 
    if (birdRef.current.rotation.y === 0) {
      // avancer
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // reculer
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    // creation de l'affichage de l'objet 3D
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>

      <primitive object={scene} />
    </mesh>
  );
}
