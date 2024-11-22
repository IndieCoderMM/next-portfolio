import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const Breadcrumb = ({
  href,
  Icon,
}: {
  href: string;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
}) => {
  const crumbs = href.split("/");

  return (
    <div className="flex items-baseline text-neutral-700">
      {Icon ? <Icon className="self-center text-xl" /> : null}
      <a
        href={`/${crumbs[1]}`}
        className="text-xl capitalize text-neutral-500 hover:underline"
      >
        {crumbs[1]}
      </a>
      <span>/</span>
      <span className="capitalize">{crumbs[2]}</span>
    </div>
  );
};

export default Breadcrumb;
