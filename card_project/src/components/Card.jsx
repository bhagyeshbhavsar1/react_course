import {Bookmark} from 'lucide-react';

function Card(props){
    return(
        <div className="info_card">
             
            <div className="top">
                <img src={props.pfp}></img>
                <h2>{props.name}</h2>
                <h5>{props.role}</h5>

                <div className="tags">
                <p>{props.skills[0]}</p>
                <p>{props.skills[1]}</p>
                </div>

            </div>


            


            <div className="stats">

                <div className="stat">
                    <h5>{props.rating}</h5>
                    <p>Rating</p>
                </div>
 <div className="divider"></div>
                <div className="stat">
                    <h5>{props.earned}</h5> 
                    <p>Earned</p>
                </div>
 <div className="divider"></div>
                <div className="stat">
                    <h5>{props.rate}</h5>
                    <p>Rate</p>
                </div>

            </div>

            <div className="bottom">
                <button>Get in touch</button>

                <Bookmark />
            </div>
        </div>
    )
}
export default Card;

