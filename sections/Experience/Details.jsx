import formatDate from "@/utils/formatDate";
import LiIcon from "./LiIcon";

const Details = ({
  title,
  company,
  startDate,
  endDate,
  location,
  website,
  description,
}) => {
  return (
    <li className="mx-auto w-[80%] flex-col items-center justify-between md:w-[60%]">
      <LiIcon />
      <div>
        <h3 className="font-bold capitalize sm:text-lg md:text-xl lg:text-2xl ">
          {title}&nbsp;
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="dark:text-primaryDark text-primary"
            >
              @{company}
            </a>
          ) : (
            <span className="dark:text-primaryDark text-primary">
              @{company}
            </span>
          )}
        </h3>
        <div className="text-sm font-medium capitalize text-dark/50 md:text-lg">
          <span>
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "present"}
          </span>
          {location && <span> • {location}</span>}
        </div>
        <p className="text-sm text-dark dark:text-light md:text-lg">
          {description}
        </p>
      </div>
    </li>
  );
};

export default Details;