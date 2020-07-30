export const reducerDay = (state = {}, action) => {
    switch (action.type) {
        case 'GET__SELECTED__DAY__INFO__SUCCESS' :
            return {...action.dayInfo};
        default :
            return state
    }
};
