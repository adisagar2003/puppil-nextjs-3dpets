import { Canvas, useFrame } from '@react-three/fiber';
import Image from 'next/image';

export function PetCard({petName, petImage}: {petName: string, petImage: string}) {
    return (
        <div className="w-[200px] h-[250px] relative overflow-hidden flex flex-col align-center items-center justify-center border border-slate-300 rounded-xl">
            <Image
               src={petImage}
               alt={petName}
               width={200}
               height={200}
               className='w-full object-cover absolute top-0'
            />
            <span className="font-bold p-7 mt-auto">
                {petName}
            </span>
        </div>
    )
}