import React from 'react'; 
import './CardList.css';
import Card from '../Card/CardComponent';

const CardList = props =>(
    <div className='CardList'>
         {
    props.monsters.map( monster =>(
    <Card key={monster.id} monster={monster}/>
    ))}
     </div>
)

export default CardList;