import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
};

export function IconButton({ label, children, className = "", ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`grid size-9 place-items-center rounded-full text-[#263241] transition-colors hover:bg-[#f5f7f9] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
