import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import styles from "./Filters.module.css";
import { filterContinent } from "../../redux/actions";

export default function Filters({
    activities,
    handleFilterActivity,
    // handleFilterContinent
}) {
  const dispatch = useDispatch();

  function handleFilterContinent(event) {
    dispatch(filterContinent(event.target.value));
  }

  return (
    <div>
          <select
            className={styles.filtro}
            onChange={(event) => handleFilterContinent(event)}
          >

            <option value="All">All Continents</option>                            
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
          </select>


          <select
            className={styles.filtro}
            onChange={(event) => handleFilterActivity(event)}
          >
            <option value="actividad">All Activities</option>
            {activities.map((act) => {
              return (
                <option key={act.id} value={act.name}>
                  {act.name}
                </option>
              );
            })}
          </select>

          </div>
  );
}
