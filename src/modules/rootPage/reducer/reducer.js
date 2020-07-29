export const reducerMonth = (state = [], action) => {
    switch (action.type) {
        case 'GET__SELECTED__MONTH__INFO__SUCCESS' :
            return [...action.monthInfo];
        default :
            return state
    }
};
