import React from 'react';

const SearchPanel = (props) => {
  
  return (
    <>
        <div className='search'>
      <form onSubmit={props.onSearchDate} onTouchEnd={props.onSearchDate} className="search__row">
        <input type="text" placeholder='Enter city...' className='search__value' name='city'/>
        <button className="search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
        <h4 className='search-title'><i> - Weather in your city<i class="fa fa-arrow-right" aria-hidden="true"></i> </i></h4>
      </div>
    </>
  );
};

export default SearchPanel;
