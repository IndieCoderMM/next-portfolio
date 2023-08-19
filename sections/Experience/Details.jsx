import LiIcon from "./LiIcon";
import { ExperienceProps } from "@/propTypes";
import RichText from "@/components/RichText";

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
              className="text-primary"
            >
              @{company}
            </a>
          ) : (
            <span className="text-primary">@{company}</span>
          )}
        </h3>
        <div className="text-sm font-medium capitalize text-dark/50 md:text-lg">
          <span>
            {startDate} - {endDate || "present"}
          </span>
          {location && <span> • {location}</span>}
        </div>
        <p className="text-sm text-dark/75 dark:text-light/75 md:text-lg">
          {description}
        </p>
      </div>
    </li>
  );
};

export default Details;
