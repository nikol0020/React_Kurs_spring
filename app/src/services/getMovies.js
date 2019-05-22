import request from 'axios';

const getMovies = {
  withAbility: (ability) => {
      const baseUrl = 'https://reactjs-cdp.herokuapp.com/';
      return request.get(`${baseUrl}/${ability}`)
  }
};

export default getMovies;