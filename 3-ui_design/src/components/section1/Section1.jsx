import Navbar from "./Navbar"
import Section1content from "./Section1content";

const Section1 = (props) => {
  return (
    <div className=" h-screen w-full" >
      <Navbar />
      <Section1content  users = {props.users}/>
    </div>
  )
}

export default Section1;
