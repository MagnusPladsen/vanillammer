import type { ComponentType, SVGProps } from "react";
import {
  HammerIcon,
  KitchenIcon,
  PaletteIcon,
  PlanIcon,
  WoodIcon,
  FacadeIcon,
} from "@/components/icons/ServiceIcons";

export const serviceIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "full-renovation": HammerIcon,
  "kitchen-bath": KitchenIcon,
  "interior-consult": PaletteIcon,
  "project-management": PlanIcon,
  "custom-carpentry": WoodIcon,
  "exterior-renovation": FacadeIcon,
};

export const projectImages = [
  {
    id: "fjell-lodge",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "city-townhouse",
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "lake-villa",
    src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1400&q=80",
  }
];

export const featuredInstagram = [
  "https://www.instagram.com/vanillammer/"
];
