import Image from "next/image";
import Header from "../components/Header/header";
export default function Home() {
  return (
    <div className="bg-radial-gradient">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/pierre.png"
              alt="Pierre"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <span className="text-lg font-bold">Pierre</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/feuille.png"
              alt="Feuille"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <span className="text-lg font-bold">Feuille</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/ciseaux.png"
              alt="Ciseaux"
              width={100}
              height={100}
              className="cursor-pointer"
            />
            <span className="text-lg font-bold">Ciseaux</span>
          </div>
        </div>
      </main>
    </div>
  );
}
