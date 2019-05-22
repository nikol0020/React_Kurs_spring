import {renderToString} from 'react-dom/server';
import React from 'react';
import {matchPath, StaticRouter} from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage';
import getMovies from '../services/getMovies';
import App from '../components/app';


export default function router(req, res) {

    const match = routes.reduce((acc, rout) => matchPath(req.url, {path: route, exact: true}) || acc, null);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    return getMovies.withAbility('movies')
        .then(resp => {
            const movies = {list: resp.data.movies};

            const context = {};

            const html = renderToString(
                <StaticRouter context={context} location={req.url}>
                    <App movies={movies}/>
                </StaticRouter>
            );

            res.status(200).send(renderFullPage(html, movies));
        })
        .catch(err => res.status(404).send(`${err}:  Oh No! I can't find movies ...`));

}