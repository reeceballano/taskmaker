export const useDate = (numOfHours, date = new Date()) => {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  
    return date;
}

export const yesterday = () => {
    const yesterday = new Date(new Date().setDate(new Date().getDate()-1));
    return yesterday;
}