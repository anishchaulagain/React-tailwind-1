import React from 'react';

const Cards = () => {
  return (
    <div className="bg-white w-full px-4 py-[7rem]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
       <div className='w-full border border-red-500 p-4 my-4 rounder-lg hover:border-2 hover:border-[#00df9a] cursor-pointer rounded-[6px] '>
         <div className='pt-12'>
           <p className='text-center font-bold'>MONTHLY</p>
           <h1 className='text-center font-bold text-[60px]'>$9.99 </h1>
           <p className='text-center font-bold'>PER MONTH</p>
           <div className='flex flex-cols item-center py-6'>
           <button className=' border mx-auto px-12 py-3 rounded-[6px] text-white bg-red-500 uppercase text-[12px] hover:bg-[#00df9a] font-bold'>Start Trial</button>
           </div>
           </div>
       </div>

       <div className='w-full border border-red-500 p-4 my-4 rounder-lg hover:border-2 hover:border-[#00df9a] cursor-pointer rounded-[6px] '>
         <div className='pt-12'>
           <p className='text-center font-bold'>HALF YEARLY</p>
           <h1 className='text-center font-bold text-[60px]'>$55.99 </h1>
           <p className='text-center font-bold'>HALF YEAR</p>
           <div className='flex flex-cols item-center py-6'>
           <button className=' border mx-auto px-12 py-3 rounded-[6px] text-white bg-red-500 uppercase text-[12px] hover:bg-[#00df9a] font-bold'>Start Trial</button>
           </div>
           </div>
       </div>
       <div className='w-full border border-red-500 p-4 my-4 rounder-lg hover:border-2 hover:border-[#00df9a] cursor-pointer rounded-[6px] focus:border-2 focus:border-[#00df9a] t focus:outline-0'>
         <div className='pt-12'>
           <p className='text-center font-bold'>ANNUALLY</p>
           <h1 className='text-center font-bold text-[60px]'>$115.99 </h1>
           <p className='text-center font-bold'>PER YEAR</p>
           <div className='flex flex-cols item-center py-6'>
           <button className=' border mx-auto px-12 py-3 rounded-[6px] text-white bg-red-500 uppercase text-[12px] hover:bg-[#00df9a] font-bold'>Start Trial</button>
           </div>
           </div>
       </div>

      </div>
      
    </div>
  );
};
export default Cards;
