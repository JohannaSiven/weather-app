import { ReactComponent as LocationIcon } from '../icons/location.svg';
import { usesDarkFill } from '../utils/iconFill';

const LocationWidget = (locationData, theme) => {
  const { name, region, country, localtime } = locationData.data;
  const iconStyle = usesDarkFill(theme) ? '#00243d' : '#d8dfe5';
  return (
    <div className="location-data">
      <div className="city">
        <LocationIcon fill={iconStyle} />
        <h2>{name}</h2>
      </div>

      <h5>{region}</h5>
      <h4>{country}</h4>
      <p>{localtime}</p>
    </div>
  );
};

export default LocationWidget;
