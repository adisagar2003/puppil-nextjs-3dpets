import { unstable_noStore as noStore } from 'next/cache';
import Image from "next/image";
import PetCard from "./ui/pet-card";
import { QueryResult, sql } from "@vercel/postgres";
import { Pet } from "./types";

export default async function Home() {
  noStore();
  const pets:QueryResult =await sql`SELECT * FROM pets;`;
  return (
    <main className="pl-4">
      {pets.rows.map( (element : Pet)=> {
        console.log(element);
        return (
          <>
            <PetCard  id={element.id} petImage={element.modelfile} petName={element.name} />          
          </>
        )
      })}
    </main>
  );
}
