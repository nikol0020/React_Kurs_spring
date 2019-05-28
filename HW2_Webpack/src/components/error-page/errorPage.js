import React from 'react';
//import errorPage from './errorPage.scss';

const ErrorPage = (props) => {
  return (
      <div className="errorPage__container">
          <p className="errorPage__text">{props.error}</p>
      </div>
  )
};

export default ErrorPage;