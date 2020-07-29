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
export const firstDayForLoadData= `${currentYear}-${currentMonth-1}-26`;
