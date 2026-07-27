import {MoveRight} from 'lucide-react'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='p-5 h-full shrink-0  overflow-hidden relative w-80 rounded-4xl '>
      <img
        className='h-full w-full object-cover rounded-4xl'
        src={props.img}
        alt=''
      />
      <RightCardContent index={props.index} tag={props.tag} />
    </div>
  )
}

export default RightCard