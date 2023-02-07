import React from 'react';

const SearchPanel = ({onSearchDate,loading}) => {
  // onTouchEnd={event => onSearchDate(event)
  return (
    <>
        <div className='search'>
          <form onSubmit={event => onSearchDate(event)} 
                disabled={loading}
                className="search__row">
            <input type="text" placeholder='Enter city...' className='search__value' name='city'/>
            <button className="search__btn"><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
      </div>
    </>
  );
};

export default SearchPanel;
