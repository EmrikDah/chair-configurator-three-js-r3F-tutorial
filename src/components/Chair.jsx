import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "../contexts/Customization";

function Cabinet(props) {
  const { nodes, materials } = useGLTF("./models/untitled.gltf");
  const { cabinetColor, drawerColor } = useCustomization();
  const [open, setOpen] = useState({
    ett: false,
    tva: false,
    tre: false,
    fyra: false,
    fem: false,
    sex: false,
  });

  const openPos = {
    ett: [1.25, 2.9, -0.42],
    tva: [1.25, 2.4, -0.42],
    tre: [1.25, 1.9, -0.42],
    fyra: [1.25, 1.4, -0.42],
    fem: [1.25, 0.9, -0.42],
    sex: [1.25, 0.4, -0.42],
  };

  const closePos = {
    ett: [0.25, 2.9, -0.42],
    tva: [0.25, 2.4, -0.42],
    tre: [0.25, 1.9, -0.42],
    fyra: [0.25, 1.4, -0.42],
    fem: [0.25, 0.9, -0.42],
    sex: [0.25, 0.4, -0.42],
  };

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Skap.geometry}
          material={materials.Skap}
          position={[-1, 0, 0]}
          castShadow
        >
          <meshStandardMaterial color={cabinetColor.color} />
        </mesh>
        <mesh
          geometry={nodes.Cube1.geometry}
          position={open.ett ? openPos.ett : closePos.ett}
          castShadow
          onClick={() => setOpen({ ...open, ett: !open.ett })}
        >
          <meshStandardMaterial color={drawerColor.color} />
        </mesh>

        <mesh
          geometry={nodes.Cube2.geometry}
          position={open.tva ? openPos.tva : closePos.tva}
          castShadow
          onClick={() => setOpen({ ...open, tva: !open.tva })}
        >
          <meshStandardMaterial color={drawerColor.color} />
        </mesh>
        <mesh
          geometry={nodes.Cube2.geometry}
          position={open.tre ? openPos.tre : closePos.tre}
          castShadow
          onClick={() => setOpen({ ...open, tre: !open.tre })}
        >
          <meshStandardMaterial color={drawerColor.color} />
        </mesh>
        <mesh
          geometry={nodes.Cube2.geometry}
          position={open.fyra ? openPos.fyra : closePos.fyra}
          castShadow
          onClick={() => setOpen({ ...open, fyra: !open.fyra })}
        >
          <meshStandardMaterial color={drawerColor.color} />
        </mesh>
        <mesh
          geometry={nodes.Cube2.geometry}
          position={open.fem ? openPos.fem : closePos.fem}
          castShadow
          onClick={() => setOpen({ ...open, fem: !open.fem })}
        >
          <meshStandardMaterial color={drawerColor.color} />
        </mesh>
        <mesh
          geometry={nodes.Cube2.geometry}
          position={open.sex ? openPos.sex : closePos.sex}
          castShadow
          onClick={() => setOpen({ ...open, sex: !open.sex })}
        >
          <meshStandardMaterial color={drawerColor.color} />
        </mesh>
      </group>
    </>
  );
}

export default Cabinet;

useGLTF.preload("./models/untitled.gltf");
