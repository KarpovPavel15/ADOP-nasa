import React, { useEffect } from 'react';
import { RootPage } from './component';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedMonthInfoRequest } from './actions';

export const RootPageContainer = () => {
    const {monthInfo} = useSelector(store => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelectedMonthInfoRequest());
        // const fetchData = async () => {
        //     let result = await axios("https://api.nasa.gov/planetary/apod?api_key=f349WgzxLaFtNpgVjCHqkge0tiid36Wm4C6N5N7c&start_date=2020-06-25&end_date=2020-07-28",);
        //     info.length === 0 && setInfo(result.data);
        // };
        // fetchData()
    },[]);

    return <RootPage info={monthInfo}/>;
};
