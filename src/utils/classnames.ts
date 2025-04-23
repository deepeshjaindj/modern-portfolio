import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const classnames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default classnames;
