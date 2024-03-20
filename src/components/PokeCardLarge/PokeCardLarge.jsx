import './PokeCardLarge.css';

const PokeCardLarge = ({ props }) => {
  console.log(props);
  return (
    <div className='details-wrapper'>
      <div className='outer-box'>
        <img
          src={props?.sprites?.other['official-artwork']?.front_default}
          alt='a picture of the selected PokeMon'
        />
        <div className='inner-box'></div>
      </div>
      <h1>
        #
        {props.id < 10
          ? '00' + props.id
          : props.id < 100
          ? '0' + props.id
          : props.id}{' '}
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </h1>
      <div id='type-nav' className='filter-box'>
        {props.types ? (
          props?.types?.map((item, index) => (
            <button id='details-button' className={item.type.name} key={index}>
              {item.type.name}
            </button>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className='movements'>
        <h2>ATTACKS AND MOVEMENTS</h2>
        <div className='attacks'>
          {props.moves ? (
            props?.moves?.map((item, index) => (
              <p key={index}>{item.move.name.toUpperCase()}</p>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeCardLarge;
