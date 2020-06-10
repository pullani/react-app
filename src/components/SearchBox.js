import React from 'react';


const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='tc pa2'>
            <input 
                className='tc pa3 br3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Robots' 
                onChange={searchChange} //HTML inbuilt
            />
        </div>
        
    );
}

export default SearchBox;