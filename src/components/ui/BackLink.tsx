import Link from "next/link";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { cn } from "@/lib/cn";

/** Voltar: o mesmo disco dos outros links, com ←, que recua no hover. */
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
      className={cn("label inline-flex min-h-11 w-fit items-center gap-3", className)}
    >
      <ArrowDisc size="sm" direction="back" />
      {label}
    </Link>
  );
}
