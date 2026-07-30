import Left_content from "./Left_content"
import Right_content from "./Right_content";

const Section1content = (props) => {
  return (
    <div className=" flex gap-10 items-center h-[90vh] px-2 py-10">
      <Left_content />
      <Right_content users = {props.users} />
    </div>
  )
}

export default Section1content;
