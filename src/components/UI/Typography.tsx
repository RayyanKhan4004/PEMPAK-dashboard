import React from "react";
// import clsx from "clsx";
type TypographyWeight = "base" | "mid" | "semi-b" | "b";
type TypographyVariant =
  | "nav"
  | "p"
  | "p-lg"
  | "ps"
  | "p-l"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "b";

type TypographyProps = {
  variant?: TypographyVariant;
  color?: "white" | "dark" | "primary" |"secondary";
  children: React.ReactNode;
  className?: string;
  weight?: TypographyWeight;
};
const fontWeight: Record<TypographyWeight, string> = {
  mid: "font-medium",
  base: "font-normal",
  "semi-b": "font-semibold",
  b: "font-bold",
};
const variantClasses: Record<TypographyVariant, string> = {
  nav: "text-[16px] ",
  p: "text-[16px]",
  "p-lg": "text-[24px]",
  ps: "text-[14px]",
  "p-l": "text-[18px]",
  h1: "text-[56px]",
  h2: "text-[40px]",
  h3: "text-[32px]",
  h4: "text-[20px]",
  b: "text-[16px] ",
};

const colorClasses = {
  white: "text-[#FFFFFF]",
  dark: "text-[#151515]",
  primary: "text-[#F16336]",
  secondary:"text-[#787D86]",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "dark",
  children,
  className,
  weight = "base",
}) => {
  return (
    <span
        className={`${variantClasses[variant]} ${colorClasses[color]} ${fontWeight[weight]} ${className || ""}`}
    >
      {children}
    </span>
  );
};

export default Typography;
