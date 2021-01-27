export const getChatTime = (date) => {
  const addZero = (i) => {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  };

  const hour = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());

  return `${hour}:${minutes}`;
};

export const setDateChat = (oldDate) => {
  const year = oldDate.getFullYear();
  const month = oldDate.getMonth() + 1;
  const date = oldDate.getDate();

  return `${date}-${month}-${year}`;
};
