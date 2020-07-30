import React from 'react';
import { RootPage } from './component';
import { useHistory } from "react-router-dom";

export const RootPageContainer = () => {
    const history = useHistory();

    return <RootPage history={history}/>;
};
