const timeFormat = (minutes = 0) => {
  if (!minutes) return "N/A";

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours}h ${mins}min`;
};

export default timeFormat;
