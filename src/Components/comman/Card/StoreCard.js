import Image from 'next/image'
import React from 'react'

const StoreCard = () => {
  return (
    <section>
        <div className='grid-cols-12'>
         <div className='col-span-4'>
            <div>
                <div className='max-w-[376px] max-h-[380px] w-full h-full'>
                    <Image src={ '/storecard-bg-1.png'} width={376} height={380} alt='bg-img'/>
                </div>
            </div>

         </div>
        </div>
      
    </section>
  )
}

export default StoreCard
