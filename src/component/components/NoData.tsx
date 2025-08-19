import Image from 'next/image'
import React from 'react'

function NoData() {
  return (
    <div className='flex w-full justify-center items-center'>
        <Image
        alt='No Data'
        width={500}
        height={200}
        src={"https://content.acetians.in/uploads/no-data-talentia.png"} 

        />
    </div>
  )
}

export default NoData