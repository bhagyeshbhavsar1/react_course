import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const employees = [
  {
    id: 1,
    pfp: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&auto=format&fit=crop&q=80",
    name: "Yor Forger",
    role: "Product Designer",
    skills: ["Figma", "UX Designer"],
    rating: 4.5,
    earned: "$15k",
    rate: "$80/hr"
  },
  {
    id: 2,
    pfp: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=80",
    name: "Mikasa Ackerman",
    role: "Frontend Developer",
    skills: ["React", "Tailwind CSS"],
    rating: 4.9,
    earned: "$32k",
    rate: "$95/hr"
  },
  {
    id: 3,
    pfp: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80",
    name: "Makima Hayakawa",
    role: "UI/UX Researcher",
    skills: ["User Testing", "Prototyping"],
    rating: 4.8,
    earned: "$28k",
    rate: "$90/hr"
  },
  {
    id: 4,
    pfp: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&auto=format&fit=crop&q=80",
    name: "Nezuko Kamado",
    role: "Motion Graphics Designer",
    skills: ["After Effects", "Spline 3D"],
    rating: 4.7,
    earned: "$19k",
    rate: "$75/hr"
  },
  {
    id: 5,
    pfp: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80",
    name: "Rin Tohsaka",
    role: "Fullstack Engineer",
    skills: ["Node.js", "TypeScript"],
    rating: 5.0,
    earned: "$45k",
    rate: "$110/hr"
  }
];

createRoot(document.getElementById('root')).render(
    <div className='parent'>
    {employees.map(function (elem){
    return  <App key={elem.id}
        pfp={elem.pfp}
        name={elem.name}
        role={elem.role}
        skills={elem.skills}
        rating={elem.rating}
        earned={elem.earned}
        rate={elem.rate}
         />
   })}
    </div> 
   
    
)
