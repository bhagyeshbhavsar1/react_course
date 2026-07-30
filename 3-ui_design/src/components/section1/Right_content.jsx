import RightCardContent from "./RightCardContent";
import RightCard from "./RightCard";
const Right_content = (props) => {
  return (
    <div id= "right" className="text-black overflow-x-auto flex flex-nowrap gap-10 h-full w-2/3">
      {
        props.users.map((elem, index)=>{
          return <RightCard key={index} index={index + 1} img={elem.img} tag={elem.tag} />
        })
      }
    </div>
  )
}

export default Right_content;
