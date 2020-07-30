import React, { useEffect } from 'react';
import { RootPage } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedMonthInfoRequest } from './actions';
import { currentDate, firstDayForLoadData } from '../../utils';

export const RootPageContainer = () => {
    const {monthInfo} = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelectedMonthInfoRequest({currentDate, firstDayForLoadData}));
    },[]);

    return <RootPage info={monthInfo}/>;
};
