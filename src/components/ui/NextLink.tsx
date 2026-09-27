import Link from "next/link";
import { ArrowDisc } from "@/components/ui/ArrowDisc";
import { Reveal } from "@/components/ui/Reveal";
import { fit } from "@/lib/cn";

/**
 * Fecho das páginas internas: o próximo capítulo em display, sobre um filete.
 * Leva de uma categoria (ou experiência) para a seguinte sem voltar à home.
 */
export function NextLink({
  href,
  label,
  title,
  className,
}: {
  href: string;
  label: string;
  title: readonly string[];
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Link href={href} className="group block">
        <span className="block h-px w-full bg-rule" />
        <span className="label mt-6 block text-ash">{label}</span>
        <span className="mt-6 flex items-end justify-between gap-6">
          <span
            className="fit-display display block leading-[0.96] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:translate-x-2"
            style={fit(title, "min(9rem, 8.5vw)", 70)}
          >
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <ArrowDisc size="lg" className="mb-[0.4vw]" />
        </span>
      </Link>
    </Reveal>
  );
}
