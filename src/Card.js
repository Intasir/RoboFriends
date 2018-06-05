import React from 'react';
const card=(props)=>{

	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow'>
		<img alt='robot' src={`https://robohash.org/${props.id}`} />
		<p>{props.name}</p>
		<p>{props.email}</p>
		</div>
		)
}	
export default card;