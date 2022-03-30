import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.scss';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import store from './store';
import {ROUTES} from "./const";
import {HomePage} from "./pages/HomePage";
import {ResultPage} from "./pages/ResultPage";
import {NotFoundPage} from "./pages/NotFoundPage";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />}/>
                <Route path={ROUTES.HOME + ":word"} element={<ResultPage />}/>
                <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

