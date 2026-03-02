import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface SocialLinks {
  icon: IconDefinition;
  url: string;
}

interface HeaderLinks {
  label: string;
  url: string;
  icon?: IconDefinition;
}

export type { SocialLinks, HeaderLinks };
