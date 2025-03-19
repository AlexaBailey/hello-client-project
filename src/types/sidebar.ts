export type ReactIcon = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;
export type Toggle = {
  toggleSidebar: () => void;
  isOpen: boolean;
  onClose: () => void;
};
export type SubOptionType = { title: string; path: string };
export type SubOptionClassnames = {
  subpathLink?: string;
  mobileSubpathLink?: string;
};
export type CustomClassnames = {
  sidebarContainer?: string;
  titleSection?: string;
  titleImageWrapper?: string;
  titleImage?: string;
  titleChildren?: string;
  contentWrapper?: string;
  toggleButtonWrapper?: string;
  toggleButton?: string;
  toggleIcon?: string;
  toggleText?: string;
  tabbarContainer?: string;
  tabbarContent?: string;
};

export interface Styled {
  customClassnames?: CustomClassnames;
}

export interface TitleSectionProps extends Styled {
  isOpen: boolean;
  imgSrc?: string;
  titleChildren?: React.ReactNode;
}

export interface ToggleCloseProps extends Toggle, Styled {
  toggleTitle?: string;
  toggleIcon: ReactIcon;
}

export interface SidebarProps extends ToggleCloseProps, TitleSectionProps {
  children: React.ReactNode;
  width: string;
}
