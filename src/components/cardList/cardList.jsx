import React from 'react';	
import './cardList.css';
import {Card} from '../card/card';

export const CardList = props => (
	 (<div className='card-list'>
		{props.villains.map(villain => (
        	<Card key = {villain.id} villain={villain} />
        ) )}
		</div>)
		);