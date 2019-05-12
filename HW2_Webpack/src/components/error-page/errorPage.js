import React from 'react';
import errorPage from './errorPage.scss';

const ErrorPage = ({error='Page not found 404'}) => {

  return (
      <div className="errorPage__container">
          <p className="errorPage__text">{error}</p>
      </div>
  )
};

export default ErrorPage;