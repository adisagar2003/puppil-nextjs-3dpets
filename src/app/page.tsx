import Image from "next/image";
import PetCard from "./ui/pet-card";
import { sql } from "@vercel/postgres";
import { Pet } from "./types";

export default async function Home() {
  const pets:any =await sql`SELECT * FROM pets;`;
  return (
    <main className="pl-4">
      {pets.rows.map( (element : Pet)=> {
        console.log(pets.rows);
        return (
          <PetCard id={element.id} petImage={element.modelfile} petName={element.name} />
        )
      })}
    </main>
  );
}
