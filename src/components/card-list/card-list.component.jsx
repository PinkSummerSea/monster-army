import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component {
    render(){
        const { monsters } = this.props;
        return (
            <div className="list-container">
               {monsters.map((monster) => {
                   //const {name, id, email} = monster;
                   return (
                       <Card monster={monster} />
                //    <div className="card-container" key={id}>
                //        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`}/>
                //        <h2>{name}</h2>
                //        <p>{email}</p>
                //    </div>
                   )
                })}
            </div>
        )
    }
}

export default CardList;