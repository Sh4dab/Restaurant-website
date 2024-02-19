import { useEffect, useState } from 'react'

function useGetData({name}) {
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        let url;
        if (name === 'All') {
          url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        } else {
          url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error('Error fetching meals:', error);
      }
    };
    fetchMeals();
  }, [name]);
  return meals
}

export default useGetData