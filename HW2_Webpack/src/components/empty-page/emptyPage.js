import React from "react";
import './emptyPage.scss';
import '../propTypes';
import {Link, Redirect} from 'react-router-dom';

const EmptyPage = () => {
    return (
        <div className="emptyMovies">
            <div className="noMovies">No films found</div>
        </div>
    )
};

export default EmptyPage;