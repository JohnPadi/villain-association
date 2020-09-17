import React from 'react';
import './card.css';

export const Card = props =>(
	<div className = 'card-container'>
	<img alt ='villain' src={`https://robohash.org/
		${props.villain.id}?set=set2&size=180x108`}/>
		<h2>{props.villain.name}</h2>
		<p>{props.villain.email}</p>
	</div>
);