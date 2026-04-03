// src/types/footer.ts
import { ReactNode } from "react";

export interface NavLinkType {
  href: string;
  label: string;
}

export interface SocialLinkType {
  id: string;
  href: string;
  ariaLabel: string;
  icon: ReactNode;
}