import Image from "next/image";
import PetCard from "./ui/pet-card";

export default function Home() {
  return (
    <main className="">
      <PetCard petImage="/charizard.jpeg" petName="Charizard" />
    </main>
  );
}
