import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles } from "@react-three/drei";
import { TextureLoader } from "three";
import { Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";

const GlowingPhoto = () => {
  const texture = useLoader(TextureLoader, "/erasebg-transformed.png");
  const meshRef = useRef();

  return (
    <Float speed={2} rotationIntensity={0} floatIntensity={1.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial
          map={texture}
          transparent={true}
          alphaTest={0.01}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </Float>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  const cameraPosition = isMobile ? [0, 0, 12] : [0, 0, 10];
  const photoScale = isMobile ? 0.7 : isTablet ? 0.85 : 1;

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: cameraPosition, fov: 45 }}>
        <ambientLight intensity={0.4} color="#1a1a40" />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3399ff" />

        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <Suspense fallback={null}>
          <group scale={[photoScale, photoScale, photoScale]}>
            <GlowingPhoto />
          </group>
          <Sparkles count={100} scale={10} size={2} speed={0.4} />
          {/* <EffectComposer>
            <Bloom intensity={1.2} luminanceThreshold={0.2} />
          </EffectComposer> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroExperience;
