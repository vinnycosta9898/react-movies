export const formatDate = (date: string) => {
  const dateFormatted = new Intl.DateTimeFormat("pt-br").format(new Date(date));

  return dateFormatted;
};
