import Image from "next/image";
import PetCard from "./ui/pet-card";

export default function Home() {
  return (
    <main className="pl-4">
      <PetCard petImage="/charizard.jpeg" petName="Charizard" />
    </main>
  );
}
