import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  console.log('Searchbox');
  return (
    <div>
      <input type='search' placeholder='search for friends' className='pa3 ba b--green bg-lightest-blue' aria-label='Search Robots'
        onChange={searchChange} />
    </div>
  );
}

export default SearchBox;