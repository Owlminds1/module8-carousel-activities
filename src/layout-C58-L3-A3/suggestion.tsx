
const Suggestion = () => {
  return (
   <div>
    <div className="grid grid-cols-12 bg-gray-100 font-semibold text-center place-items-center gap-y-2">
      <div className="col-span-4  w-full ">
        
        <div className='border border-black'>
            <h4 className='font-bold  text-2xl'>Promoter</h4>
            <h4 className='font-bold  text-2xl'>7</h4>

        </div>
        </div>
      <div className="col-span-4  w-full ">
         <div className='border border-black'>
            <h4 className='font-bold  text-2xl'>Detractor</h4>
            <h4 className='font-bold  text-2xl'>2</h4>
            
        </div>
        
        </div>
      <div className="col-span-4 w-full">
        <div className='border border-black'>
            <h4 className='font-bold  text-2xl'>Passive</h4>
            <h4 className='font-bold  text-2xl'>2</h4>

        </div>
        </div>
     
      
      <div className="col-span-6 text-right p-2 text-xl font-bold ">TOTAL number of respondents : </div>
      <div className="col-span-6 text-left font-bold w-full text-2xl">  11</div>

       <div className="col-span-12 p-2 text-xl font-bold w-full">% of (promoters/detractors/passives) = (# of (promoters/detractors/passives) / # of respondents) x 100 </div> 
       
       <div className="col-span-12 p-2 text-lg font-bold w-full space-y-2">
  <p>
    (7/11) × 100 = 63.63% promoters
  </p>
  <p>
 (2/11) × 100 = 18.18% detractors
  </p>
  <p>
    (2/11) × 100 = 18.18% passives
  </p>
</div>
      

       <div className="col-span-12 p-2 text-xl font-bold w-full">
  NPS = 63% - 18% =  45%
</div>
      
    </div>

<div className="w-[60%] p-5">
    <h4 className="text-black font-bold text-2xl">Is this a good score?</h4>
    <p className="text-xl text-black">Sure! NPS scores are totally industry-specific, so it’s not always the same for each segment. But the average can range anywhere from 25% to 75%.</p>
</div>
   </div>
  )
}

export default Suggestion
