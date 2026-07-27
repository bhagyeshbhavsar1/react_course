import Section1 from "./components/section1/section1"
import Section2 from "./components/section2/Section2"

const users = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
    intro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.',
    tag: 'Satisfied',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2576&auto=format&fit=crop',
    intro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.',
    tag: 'Underserved',
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2576&auto=format&fit=crop',
    intro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus cupiditate voluptatibus mollitia alias tempora.',
    tag: 'Underbanked',
  },
]
function App(){
    return(
        <>
        <Section1  users = {users}/>
        <Section2 />
        </>
    
    )
    
}
export default App;