import React from 'react'
import Image from 'next/image'
const Scissor: React.FC<{ onClick: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
    <>
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
  </>
  )


export default Scissor;



