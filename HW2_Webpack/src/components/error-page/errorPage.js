import React from 'react';
import errorPage from './errorPage.scss';

const ErrorPage = ({location = {pathname : ''}, error='Page not found 404'}) => {

  return (
      <div className="errorPage__container">
          <p className="errorPage__text">{error}</p>
          <p className="errorPage__text"><code>{location.pathname}</code></p>
      </div>
  )
};

export default ErrorPage;