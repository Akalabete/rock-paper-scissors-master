import Image from "next/image";
import Header from "../components/Header/header";
export default function Home() {
  return (
    <div className="bg-radial-gradient">
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex relative w-72 h-80 bg-triangle">
          <div className="flex flex-col absolute bottom-8 left-28  items-center">
            <Image
              src="/icon-rock.svg"
              alt="Pierre"
              width={35}
              height={35}
              className="cursor-pointer z-10"
            />
          </div>
          <div className="w-24 h-24 bg-white absolute bottom-0 left-20  rounded-full border-8 border-red border-red-600"></div>
          <div className="flex flex-col absolute top-6 left-0 items-center">
            <Image
              src="/icon-paper.svg"
              alt="Feuille"
              width={35}
              height={35}
              className="cursor-pointer z-10"
            />
          </div>
          <div className="w-24 h-24 bg-white absolute top-0 mt-[-0.5rem] left-0 ml-[-2rem] rounded-full border-8 border-blue border-blue-600"></div>
          <div className="flex flex-col absolute top-4 right-0 items-center">
            <Image
              src="/icon-scissors.svg"
              alt="Ciseaux"
              width={35}
              height={35}
              className="cursor-pointer z-10"
            />
          </div>
          <div className="w-24 h-24 bg-white absolute top-0 mt-[-0.5rem] right-0 mr-[-2rem] rounded-full border-yellow border-shadow border-8 border-yellow-500"></div>
        </div>
      </main>
    </div>
  );
}
