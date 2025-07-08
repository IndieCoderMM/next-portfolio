import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const formatTimeFromNow = (date: dayjs.ConfigType) => {
  const day = dayjs(date);

  return day.fromNow();
};

export default dayjs;
