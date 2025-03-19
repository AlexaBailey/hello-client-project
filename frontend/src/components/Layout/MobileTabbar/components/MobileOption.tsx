import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ReactIcon, SubOptionType } from '../../../../types/sidebar';
import { IoClose } from 'react-icons/io5';
import MobileSubOption from './MobileSubOption';
import { cn } from '../../../../utils/helpers/clsx';

type OptionClassnames = {
  containerClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  overlayClassName?: string;
  drawerClassName?: string;
  mobileSubpathLink?: string;
  mobileSubpathsContainer?: string;
};

type MobileOptionProps = {
  title: string;
  path: string;
  Icon: ReactIcon;
  subpaths?: SubOptionType[];
  activeColor?: string;
  inactiveColor?: string;
  bgActiveColor?: string;
  classNames?: OptionClassnames;
};

const MobileOption = ({
  Icon,
  title,
  path,
  subpaths,
  activeColor = 'text-blue-500',
  inactiveColor = 'text-gray-700',
  bgActiveColor = 'bg-blue-100',
  classNames = {},
}: MobileOptionProps) => {
  const { pathname } = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const isParentActive = (currentPath: string) => {
    const normalizedPath = pathname === '/dashboard' ? '/' : pathname;
    return normalizedPath === currentPath || subpaths?.some((subpath) => subpath.path === normalizedPath);
  };
  const isActive = (currentPath: string) => {
    const normalizedPath = pathname === '/dashboard' ? '/' : pathname;
    return normalizedPath === currentPath;
  };
  //default styles if no custom styles passed
  const {
    containerClassName = 'w-14 h-14 p-4 mt-2 rounded-tl rounded-tr ',
    iconClassName = 'text-2xl',
    titleClassName = 'text-xs',
    overlayClassName = 'bg-black bg-opacity-40',
    drawerClassName = 'bg-white shadow-lg rounded-t-lg p-4',
    mobileSubpathLink = 'block text-md transition',
    mobileSubpathsContainer,
  } = classNames;

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center transition-all cursor-pointer ${containerClassName} ${
          isParentActive(path) ? cn(activeColor, bgActiveColor) : inactiveColor
        }`}
        onClick={subpaths ? toggleDrawer : undefined}
      >
        <Link to={!subpaths ? path : '#'} className="flex flex-col items-center justify-center">
          <Icon className={iconClassName} />
          <span className={titleClassName}>{title}</span>
        </Link>
      </div>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            key="overlay"
            className={`fixed top-0 left-0 w-full h-full z-40 ${overlayClassName}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleDrawer}
          />
        )}
        {isDrawerOpen && subpaths && (
          <motion.div
            key="drawer"
            className={`fixed bottom-0 left-0 w-full z-50 ${drawerClassName}`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
          >
            {/*Check if parent path is active. All links are clickable^ both subLinks and main header links */}
            <div className="flex justify-between items-center">
              <Link
                onClick={toggleDrawer}
                to={path}
                className={`relative flex items-center w-full h-12 px-3 rounded-md transition-all hover:bg-slate-100 ${
                  isParentActive(path) ? activeColor : inactiveColor
                }`}
              >
                <h2 className="text-xl font-medium">{title}</h2>
              </Link>
              <button onClick={toggleDrawer} className="text-gray-500 hover:text-gray-800">
                <IoClose />
              </button>
            </div>
            <ul className={mobileSubpathsContainer}>
              {subpaths.map((subpath) => (
                <div key={subpath.path} onClick={toggleDrawer}>
                  <MobileSubOption
                    path={subpath.path}
                    title={subpath.title}
                    activeColor={activeColor}
                    inactiveColor={inactiveColor}
                    isActive={isActive}
                    mobileSubpathLink={mobileSubpathLink}
                  />
                </div>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileOption;
