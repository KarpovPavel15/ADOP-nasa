export const actionCreator = type => (payload = {}) => ({
    type,
    ...payload
});

const actionTypeCreator = (actionStatus, actionType) => `${actionType}__${actionStatus}`;

export const requestCreator = actionType => actionTypeCreator('REQUEST', actionType);
export const successCreator = actionType => actionTypeCreator('SUCCESS', actionType);

export let currentDate = new Date();
const currentDay=currentDate.getDate();
const currentMonth=currentDate.getMonth()+1;
const currentYear=currentDate.getFullYear();
currentDate=`${currentYear}-${currentMonth}-${currentDay}`;
export const firstDayForLoadData= `${currentYear}-${currentMonth}-1`;

export const getMonth = month => {
    switch (month) {
        case 'Jan' :
            return '01';
        case 'Feb' :
            return '02';
        case 'Mar' :
            return '03';
        case 'Apr' :
            return '04';
        case 'May' :
            return '05';
        case 'Jun' :
            return '06';
        case 'Jul' :
            return '07';
        case 'Aug' :
            return '08';
        case 'Sep' :
            return '09';
        case 'Oct' :
            return '10';
        case 'Nov' :
            return '11';
        case 'Dec' :
            return '12';
        default :
            return null
    }
};
