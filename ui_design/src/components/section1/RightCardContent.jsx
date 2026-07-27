import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
      <h2 className='bg-white text-xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>
        {props.index}
      </h2>

      <div>
        <p className='text-xl leading-normal text-white mb-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>

        <div className='flex justify-between'>
          <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>
            {props.tag}
          </button>

          <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'>
            <MoveRight size={20} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent