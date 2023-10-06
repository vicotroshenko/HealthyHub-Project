const dateConvertor = date => {
  if (!date) {
    return null;
  }
  const dateConverted =
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  return dateConverted;
};

export default dateConvertor;
