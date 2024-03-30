'use client'

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import Image from 'next/image';
import React, { useState } from 'react';
import { Euler, Object3D, Vector3 } from 'three';
export default function PetCard({petName, petImage, id}: {petName: string, petImage: string, id:string}) {

    const [playing, setPlaying] = useState(false);
    // 3d Object rotation.
    function startObjectRotation(object: Object3D, rotationRate:number) : void {
        
    }  

    // 3d object stops rotation
    function stopObjectRotation(object: Object3D) : void  {
        setPlaying(false);
    }

    // 3d model reference     
    function FoxModel() {
        const gltf = useLoader(GLTFLoader, "/fox.gltf");
        return <primitive object={gltf.scene} />
    }

    function ModelSetup() {
        const myMesh : React.MutableRefObject<any> = React.useRef();
        useFrame(({ clock }) => {
            const a = clock.getElapsedTime();
            if (playing) {
                myMesh.current.rotation.y += 0.01;
            }
          });
        
        return (
            <mesh 
                ref={myMesh}
                onPointerEnter={e=>{startObjectRotation(e.object,12)}}
                onPointerLeave={e=>{stopObjectRotation(e.object)}}
                scale={3}
            >
                <FoxModel />
                <meshStandardMaterial />
            </mesh>
        )
    }
    return (
        <div onMouseEnter={()=>setPlaying(true)} onMouseLeave={()=>setPlaying(false)} className="w-[200px] h-[250px] relative overflow-hidden flex flex-col align-center items-center justify-center border border-slate-300 rounded-xl">
            <Canvas>
            <ambientLight intensity={0.01} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <ModelSetup />
            </Canvas> 
            <span className="font-bold p-7 mt-auto">
                {petName}
            </span>
        </div>
    )
}