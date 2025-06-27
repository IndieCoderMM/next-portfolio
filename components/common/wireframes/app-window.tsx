import clsx from "clsx";

import { SkeletonMd } from "@/components/common/wireframes/skeletons";

import { IconExternalLink } from "@tabler/icons-react";
import type { PropsWithChildren, ReactNode } from "react";

interface BrowserTabProps {
  icon: ReactNode;
  title: string;
  isActive: boolean;
  onClick?: () => void;
}

function BrowserTab({ icon, title, isActive, onClick }: BrowserTabProps) {
  return (
    <button
      className={clsx("flex h-6 items-center truncate rounded-lg", [
        isActive
          ? [
              "pointer-events-none bg-slate-200 text-slate-600",
              "dark:bg-slate-100/20 dark:text-slate-300",
            ]
          : [
              "pointer-events-auto bg-slate-200/50 text-slate-500",
              "dark:bg-slate-100/5",
            ],
        onClick && "cursor-pointer hover:bg-slate-300/50",
      ])}
      onClick={onClick}
      style={{ width: 200 }}
      type="button"
    >
      <div className={clsx("flex w-full gap-2 px-2 text-xs")}>
        {icon}
        <div className={clsx("flex-1 truncate text-left")}>{title}</div>
      </div>
    </button>
  );
}

interface AppWindowProps {
  type?: "browser" | "app";
  browserTabs?: Array<BrowserTabProps>;
  liveUrl?: string;
}

function AppWindow({
  children = null,
  type = "app",
  browserTabs = [],
  liveUrl,
}: PropsWithChildren<AppWindowProps>) {
  const isWithBrowserTabs = type === "browser" && browserTabs;

  return (
    <div
      role="presentation"
      className={clsx(
        "flex h-full w-full select-none flex-col overflow-hidden rounded-xl border border-neutral-300 bg-white",
        "dark:border-neutral-700 dark:bg-[#0c1222]",
      )}
    >
      <div
        className={clsx(
          "relative box-border border-b border-neutral-300",
          "dark:border-neutral-700",
          [isWithBrowserTabs ? "h-20" : "h-10"],
        )}
      >
        <div
          className={clsx(
            "absolute left-4 top-0 flex h-10 items-center gap-1.5",
          )}
        >
          <div
            className={clsx(
              "h-3 w-3 rounded-full bg-red-300",
              "dark:bg-slate-500",
            )}
          />
          <div
            className={clsx(
              "h-3 w-3 rounded-full bg-amber-300",
              "dark:bg-slate-500",
            )}
          />
          <div
            className={clsx(
              "h-3 w-3 rounded-full bg-green-300",
              "dark:bg-slate-500",
            )}
          />
        </div>
        {type === "browser" && (
          <>
            <div className={clsx("flex h-10 items-center justify-center")}>
              <SkeletonMd w={160} />
            </div>
            {isWithBrowserTabs && (
              <div className={clsx("mt-2 flex gap-2 px-3")}>
                {browserTabs.map(({ icon, title, isActive, onClick }) => (
                  <BrowserTab
                    key={title}
                    icon={icon}
                    title={title}
                    isActive={isActive}
                    onClick={onClick}
                  />
                ))}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    title="Open in new tab"
                    rel="noopener noreferrer"
                    className="h6 ml-auto self-center text-slate-500"
                  >
                    <IconExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <div className={clsx("flex-1 overflow-hidden")}>{children}</div>
    </div>
  );
}

export default AppWindow;
