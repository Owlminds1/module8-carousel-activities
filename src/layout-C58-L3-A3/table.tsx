"use client"
import  { useState } from 'react'

const Table = () => {

    const [promoter, setPromoter] = useState(0);
const [detractor, setDetractor] = useState(0);
const [passive, setPassive] = useState(0);


const total = promoter + detractor + passive;

const promoterPercent = total ? (promoter / total) * 100 : 0;
const detractorPercent = total ? (detractor / total) * 100 : 0;
const passivePercent = total ? (passive / total) * 100 : 0;

const nps = promoterPercent - detractorPercent;
  return (
    <div className="w-full flex justify-center ">
  <div className="w-full bg-white shadow-lg rounded-xl ">
    
    

    {/* Header */}
    <div className="grid grid-cols-12 bg-gray-100 font-semibold text-center place-items-center gap-y-2">
      <div className="col-span-4  w-full ">
        
        <div className='border border-black'>
            <h4 className='font-bold  text-2xl'>Promoter</h4>
<input
title='number'
  type="number"
  value={promoter}
  onChange={(e) => setPromoter(Number(e.target.value))}
  className="w-full px-5 text-lg border py-2"
/>
        </div>
        </div>
      <div className="col-span-4  w-full ">
         <div className='border border-black'>
            <h4 className='font-bold  text-2xl'>Detractor</h4>
            <input
title='number'
  type="number"
  value={detractor}
  onChange={(e) => setDetractor(Number(e.target.value))}
  className="w-full px-5 text-lg border py-2"
/>
        </div>
        
        </div>
      <div className="col-span-4 w-full">
        <div className='border border-black'>
            <h4 className='font-bold  text-2xl'>Passive</h4>
            <input
title='number'
  type="number"
  value={passive}
  onChange={(e) => setPassive(Number(e.target.value))}
  className="w-full px-5 text-lg border py-2"
/>
        </div>
        </div>
     
      
      <div className="col-span-6 text-right p-2 text-xl font-bold ">TOTAL number of respondents : </div>
      <div className="col-span-6 text-left font-bold w-full text-2xl">  {total}</div>

       <div className="col-span-12 p-2 text-xl font-bold w-full">% of (promoters/detractors/passives) = (# of (promoters/detractors/passives) / # of respondents) x 100 </div> 
       
       <div className="col-span-12 p-2 text-lg font-bold w-full space-y-2">
  <p>
    ({promoter}/{total || 1}) × 100 = {promoterPercent.toFixed(2)}% promoters
  </p>
  <p>
    ({detractor}/{total || 1}) × 100 = {detractorPercent.toFixed(2)}% detractors
  </p>
  <p>
    ({passive}/{total || 1}) × 100 = {passivePercent.toFixed(2)}% passives
  </p>
</div>
      

       <div className="col-span-12 p-2 text-xl font-bold w-full">
  NPS = {promoterPercent.toFixed(0)}% - {detractorPercent.toFixed(0)}% = {nps.toFixed(0)}%
</div>
      
    </div>



  </div>
</div>
  )
}

export default Table
