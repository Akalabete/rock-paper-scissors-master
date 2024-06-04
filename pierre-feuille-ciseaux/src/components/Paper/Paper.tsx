import React from 'react'
import Image from 'next/image'
const Paper: React.FC<{ onClick: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
    <><div onClick={onClick} className="flex flex-col absolute top-6 left-0 items-center">
    <Image
      src="/icon-paper.svg"
      alt="Feuille"
      width={35}
      height={35}
      className="cursor-pointer z-10" />
  </div><div className="w-24 h-24 bg-white absolute top-0 mt-[-0.5rem] left-0 ml-[-2rem] rounded-full border-8 border-blue border-blue-600"></div></>
)
export default Paper;
