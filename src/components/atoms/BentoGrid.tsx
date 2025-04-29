import { classnames } from "@/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
  linkType: string;
  bgClassName?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={classnames(
        "grid w-full auto-rows-[24rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  bgClassName,
  linkType,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={classnames(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu",
      className,
    )}
    {...props}
  >
    <div className={bgClassName}>{background}</div>
    <div className="absolute bottom-0 pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-8">
      <Icon className="h-8 w-8 origin-left transform-gpu text-neutral-600 transition-all duration-300 ease-in-out group-hover:scale-75 mb-2" />
      <h3 className="text-xl font-semibold text-neutral-600">{name}</h3>
      <p className="max-w-lg text-neutral-400 text-sm">{description}</p>
    </div>

    <div
      className={classnames(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <button className="pointer-events-auto">
        <a
          href={href}
          target={linkType === "external" ? "_blank" : "_parent"}
          className="flex items-center hover:bg-slate-200 px-2 py-1 rounded-md text-sm"
        >
          {cta}
          <FaArrowRight className="ms-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.1]" />
  </div>
);

export { BentoCard, BentoGrid };
