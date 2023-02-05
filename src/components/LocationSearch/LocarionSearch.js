import location from '../../assets/placeholder.png';

export const LocationSearch = (props) => {

    return (
        <div>
        <button className='location-img'
      data-key='location'
      onClick={(event) => props.getWeather(event) }
    >
      <img src={location} alt="#" />
    </button>
  
        </div>
    );
}