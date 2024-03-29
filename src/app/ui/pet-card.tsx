'use client'

import { Canvas, useFrame } from '@react-three/fiber';
import Image from 'next/image';
import React, { useState } from 'react';
import { Euler, Object3D, Vector3 } from 'three';

export default function PetCard({petName, petImage}: {petName: string, petImage: string}) {

    const [playing, setPlaying] = useState(false);

    // 3d Object rotation.
    function startObjectRotation(object: Object3D, rotationRate:number) : void {
        
    }  

    // 3d object stops rotation
    function stopObjectRotation(object: Object3D) : void  {
    
    }

    function ModelSetup() {
        const myMesh : React.MutableRefObject<any> = React.useRef();

        useFrame(({ clock }) => {
            const a = clock.getElapsedTime();
            if (playing) {
                myMesh.current.rotation.y = clock.elapsedTime;
            }
          });
        
        return (
            <mesh 
                ref={myMesh}
                onPointerEnter={e=>{startObjectRotation(e.object,12)}}
                onPointerLeave={e=>{stopObjectRotation(e.object)}}
            >
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        )
    }
    return (
        <div onMouseEnter={()=>setPlaying(true)} onMouseLeave={()=>setPlaying(false)} className="w-[200px] h-[250px] relative overflow-hidden flex flex-col align-center items-center justify-center border border-slate-300 rounded-xl">
            <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <ModelSetup />
            </Canvas>
            <span className="font-bold p-7 mt-auto">
                {petName}
            </span>
        </div>
    )
}