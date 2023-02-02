import React from 'react';

const SearchPanel = (props) => {

   
  

  return (
    <>
        <div className='search'>
      <form onSubmit={props.onSearchDate} onTouchEnd={props.onSearchDate} className="search__row">
        <input className="search__value" name="city" placeholder='Enter the city...'></input>
        <button className="search__btn">Get weather</button>
      </form>
      </div>
    </>
  );
};

export default SearchPanel;
