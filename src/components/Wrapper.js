import React from 'react';

export default function Wrapper({state}) {
    
    const background =''
    
    function getBackground(){
        if(state.description1 === 'light snow'){
            console.log(true)
        }else if(state.description1 === 'light snow'){
            console.log(false)
        }
    }
    
    
  return (
    <>
    {/* <div className='wrapper'>
    <img src={image} alt="#" />
    </div> */}
    </>
  )
}
