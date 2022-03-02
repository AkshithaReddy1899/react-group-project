import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from '../../redux/rockets/rockets';
import Rocket from './Rocket';
import './rockets.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchDataFromApi());
    }
  }, []);

  return (
    <section>
      <hr className="rockets-hr" />
      <ul>
        {
        rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
        }
      </ul>
    </section>
  );
};

export default RocketsPage;
