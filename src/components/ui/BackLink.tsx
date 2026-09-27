import Link from "next/link";
import { cn } from "@/lib/cn";

/** Voltar: o disco com ← que recua no hover. */
export function BackLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group label inline-flex w-fit items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-full bg-ink text-sm text-paper transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1"
      >
        ←
      </span>
      {label}
    </Link>
  );
}
