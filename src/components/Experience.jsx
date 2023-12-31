import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Avatar2 } from "./Avatar2";
import { PlaneGeometry } from "three";

export const Experience = () => {

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows 
          opacity={0.42}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar position-x={1}/>
        <Avatar2 position-x={-1}/>
      <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
        <planeGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
      </group>
    </>
  );
};
