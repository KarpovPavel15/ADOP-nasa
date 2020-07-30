export const reducerMonth = (state = [], action) => {
    switch (action.type) {
        case 'GET__SELECTED__MONTH__INFO__SUCCESS' :
            return [...action.monthInfo];
        case 'UPDATE__CURRENT__MONTH__INFO__SUCCESS' :
            return [...action.monthInfo];
        default :
            return state
    }
};
export const reducerDay = (state = {}, action) => {
    switch (action.type) {
        case 'GET__SELECTED__DAY__INFO__SUCCESS' :
            return {...action.dayInfo};
        default :
            return state
    }
};
