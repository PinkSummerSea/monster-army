//import { Component } from "react";
import './card.styles.css';

const Card = ({ monster }) => {
    const { name, id, email } = monster;
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
            <h2 className="monster-name">{name}</h2>
            <p>{email}</p>
        </div>
    )
}

// class Card extends Component {
//     render(){
//         const { name, id, email } = this.props.monster;
//         return (
//             <div className="card-container" key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`}/>
//                 <h2 className="monster-name">{name}</h2>
//                 <p>{email}</p>
//             </div>
//         )
//     }
// }

export default Card;