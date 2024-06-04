import React from 'react'
import Image from 'next/image'

const Rock: React.FC<{ onClick: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
    <><div onClick={onClick} className="flex flex-col absolute bottom-8 left-28  items-center">
    <Image
      src="/icon-rock.svg"
      alt="Pierre"
      width={35}
      height={35}
      className="cursor-pointer z-10" />
  </div>
  <div className="w-24 h-24 bg-white absolute bottom-0 left-20  rounded-full border-8 border-red border-red-600"></div></>
  
  )

export default Rock;