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
        <h3 className="text-xl font-bold capitalize lg:text-2xl ">
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
        <span className="font-medium capitalize text-dark/50">
          {startDate} - {endDate || "present"} | {location}
        </span>
        <p className="text-dark/75 dark:text-light/75">{description}</p>
      </div>
    </li>
  );
};

export default Details;
