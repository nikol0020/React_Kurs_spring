import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object()),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
};

export default propTypes;
