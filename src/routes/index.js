import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './App.routes';

const Routes = () => {
    return (       
        <BrowserRouter>
            <AppRoutes/>                         
        </BrowserRouter>
    )
}

export default Routes;