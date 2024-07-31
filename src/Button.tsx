import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  padding?: Padding;
  margin?: Margin;
  text: string;
}

type Margin =
  | "m-0"
  | "m-1"
  | "m-2"
  | "m-3"
  | "m-4"
  | "m-5"
  | "m-6"
  | "m-8"
  | "m-10"
  | "m-12"
  | "m-16"
  | "m-20"
  | "m-24"
  | "m-32"
  | "m-40"
  | "m-48"
  | "m-56"
  | "m-64"
  | "m-auto"
  | "m-px";

type Padding =
  | "p-0"
  | "p-1"
  | "p-2"
  | "p-3"
  | "p-4"
  | "p-5"
  | "p-6"
  | "p-8"
  | "p-10"
  | "p-12"
  | "p-16"
  | "p-20"
  | "p-24"
  | "p-32"
  | "p-40"
  | "p-48"
  | "p-56"
  | "p-64"
  | "p-auto"
  | "p-px";

export default function Button({
  children,
  bgColor = "bg-blue-500",
  textColor = "text-white",
  padding = "p-4",
  margin = "m-0",
  text,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full ${padding} ${margin} rounded-md ${bgColor} ${textColor}`}
      {...props}
    >
      {text}
    </button>
  );
}
