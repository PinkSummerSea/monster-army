//import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className="list-container">
        {monsters.map((monster) => {
            return (
                <Card monster={monster} key={monster.id} />
            )
        })}
    </div>
);


// class CardList extends Component {
//     render(){
//         const { monsters } = this.props;
//         return (
//             <div className="list-container">
//                {monsters.map((monster) => {
//                    return (
//                        <Card monster={monster} />
//                    )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;