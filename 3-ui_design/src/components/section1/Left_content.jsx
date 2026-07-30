import { ArrowUpRight } from 'lucide-react'
const Left_content = () => {
  return (
    <div className="text-black h-full w-1/3 flex flex-col justify-between">
      <div className='p-6'>
        <h3 className='mb-7 text-6xl font-bold'>Prospective <br/><span> Costomer </span> <br/>Segmentation</h3> 
        <p className='font-medium text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione commodi unde debitis dicta maiores nam sint enim adipisci consequuntur. Velit vel dignissimos vero praesentium, incidunt officia eius. Quasi, cumque aliquid.</p>
      </div>
        
      <div className="text-8xl">
        <ArrowUpRight size={96} strokeWidth={2.5} />
      </div>
      
    </div>
  )
}

export default Left_content;
