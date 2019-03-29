import PropTypes from 'prop-types';

export const movieShape = PropTypes.shape({
    id: PropTypes.number.isRequir,
    title: PropTypes.string.isRequire,
    tagline: PropTypes.string,
    vote_average: PropTypes.number.isRequire,
    vote_count: PropTypes.number.isRequire,
    release_date: PropTypes.string.isRequire,
    poster_path: PropTypes.string.isRequire,
    overview: PropTypes.string.isRequire,
    budget: PropTypes.number,
    revenue: PropTypes.number.isRequire,
    genres: PropTypes.arrayOf(PropTypes.string).isRequire,
    runtime: PropTypes.number.isRequire
});
