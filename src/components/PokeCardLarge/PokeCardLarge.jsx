import './PokeCardLarge.css';

const PokeCardLarge = ({ props }) => {
  return (
    <div className='details-wrapper'>
      <div className='outer-box'>
        <div className='inner-box'>
          <img
            src={props?.sprites?.other['official-artwork']?.front_default}
            alt='a picture of the selected PokeMon'
          />
        </div>
      </div>
      <h1>
        #
        {props.id < 10
          ? '00' + props.id
          : props.id < 100
          ? '0' + props.id
          : props.id}
      </h1>
      <div className='type-nav'></div>
      <div className='movements'>
        <h2>ATTACKS AND MOVEMENTS</h2>
      </div>
    </div>
  );
};

export default PokeCardLarge;
