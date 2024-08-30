"use client";
import style from "./Button.module.scss";
import Link from "next/link";

export default function Hero({
  children,
  size,
  href,
  center,
  color,
  className,
}) {
  return (
    <Link
      href={href}
      className={`${style.btn} ${className} ${
        size === "small" ? style.small : style.big
      } ${center ? style.center : ""} ${color === "second" ? style.green : ""}`}
    >
      {children}
    </Link>
  );
}
