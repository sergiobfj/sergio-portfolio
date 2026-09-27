import { notFound } from "next/navigation";

/** Qualquer caminho desconhecido dentro de um idioma cai no 404 localizado. */
export default function CatchAll() {
  notFound();
}
