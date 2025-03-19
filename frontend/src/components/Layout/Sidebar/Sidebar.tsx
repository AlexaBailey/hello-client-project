import { motion } from 'framer-motion';
import { cn } from '../../../utils/helpers/clsx';
import { SidebarProps } from '../../../types/sidebar';
import { TitleSection, ToggleClose } from './components';
const Sidebar = ({
  isOpen,
  onClose,
  children,
  imgSrc,
  titleChildren,
  toggleSidebar,
  customClassnames = {},
  toggleIcon,
  toggleTitle,
  width,
}: SidebarProps) => {
  const { sidebarContainer, contentWrapper } = customClassnames;
  return (
    <motion.nav
      animate={{
        width: width,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn('fixed top-0 h-screen', sidebarContainer)}
    >
      <div className="flex flex-col h-full">
        <TitleSection
          isOpen={isOpen}
          imgSrc={imgSrc}
          titleChildren={titleChildren}
          customClassnames={customClassnames}
        />
        <div className={cn('flex-1 space-y-1', isOpen ? 'pl-3' : '', contentWrapper)}>{children}</div>
        <ToggleClose
          toggleTitle={toggleTitle}
          isOpen={isOpen}
          toggleIcon={toggleIcon}
          toggleSidebar={toggleSidebar}
          onClose={onClose}
          customClassnames={customClassnames}
        />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
