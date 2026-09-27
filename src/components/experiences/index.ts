import type { ComponentType } from "react";
import type { ExperienceKey } from "@/data/portfolio";
import type { ExperienceStoryProps } from "@/components/experience/ExperienceHero";
import { SeccoStory } from "./Secco";
import { VirtronStory } from "./Virtron";

/**
 * Experiências com narrativa própria — como nos cases, cada uma compõe as
 * peças na ordem que a história pede. Texto em `experienceStories.<chave>`
 * nos três dicionários; fora daqui, a página genérica (experience/ExperienceView).
 */
export const experienceStories: Partial<
  Record<ExperienceKey, ComponentType<ExperienceStoryProps>>
> = {
  virtron: VirtronStory,
  secco: SeccoStory,
};
