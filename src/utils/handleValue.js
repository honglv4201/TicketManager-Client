export const handleTimeTicket = (value) => {
  let result = value.toString();
  if (result.length <= 2) result = result += ":00";

  return result;
};
