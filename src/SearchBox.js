import React  from 'react';
const SearchBox=({searchfield,SearchChange})=>{
	return (
<div className="pa2">
		<input className='bg-lightest-blue' type='search' placeholder='Search Here Robots' 
		onChange={SearchChange} />
		</div>
		);
}
export default SearchBox;