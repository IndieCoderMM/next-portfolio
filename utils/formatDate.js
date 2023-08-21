// Convert date to format: Jan 2021
const formatDate = (date) => {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const year = d.getFullYear();
  return `${month} ${year}`;
};

export default formatDate;
