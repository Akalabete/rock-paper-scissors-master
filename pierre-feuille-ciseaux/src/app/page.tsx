import Image from "next/image";
import Header from "../components/Header/header";
export default function Home() {
  return (
    <div className="bg-radial-gradient">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex relative w-full h-80 bg-triangle">
          <div className="flex flex-col absolute bottom-20 left-36 items-center">
            <Image
              src="/icon-rock.svg"
              alt="Pierre"
              width={35}
              height={35}
              className="cursor-pointer z-10"
            />
          </div>
          <div className="w-24 h-24 bg-white absolute bottom-14 left-28 rounded-full border-8 border-red border-red-600"></div>
          <div className="flex flex-col absolute top-14 left-14 items-center">
            <Image
              src="/icon-paper.svg"
              alt="Feuille"
              width={35}
              height={35}
              className="cursor-pointer z-10"
            />
          </div>
          <div className="w-24 h-24 bg-white absolute top-8 left-7 rounded-full border-8 border-blue border-blue-600"></div>
          <div className="flex flex-col absolute top-14 right-14 items-center">
            <Image
              src="/icon-scissors.svg"
              alt="Ciseaux"
              width={35}
              height={35}
              className="cursor-pointer z-10"
            />
          </div>
          <div className="w-24 h-24 bg-white absolute top-8 right-7 rounded-full border-yellow border-shadow border-8 border-yellow-500"></div>
        </div>
      </main>
    </div>
  );
}
