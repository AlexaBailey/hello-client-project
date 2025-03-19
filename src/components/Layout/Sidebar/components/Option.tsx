import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactIcon, SubOptionClassnames } from '../../../../types/sidebar';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Tooltip } from '../../../common';
import { cn } from '../../../../utils/helpers/clsx';
import SubOption from './SubOption';
type SubOption = { title: string; path: string };
type OptionClassnames = {
  container?: string;
  linkContainer?: string;
  icon?: string;
  title?: string;
  subpathContainer?: string;
  subpathLink?: string;
  tooltipContent?: string;
  subOptionClassnames?: SubOptionClassnames;
};
type OptionProps = {
  isOpen: boolean;
  title: string;
  path: string;
  Icon: ReactIcon;
  subpaths?: SubOption[];
  activeColor?: string;
  inactiveColor?: string;
  classNames?: OptionClassnames;
};
const Option = ({
  Icon,
  title,
  isOpen,
  path,
  subpaths,
  activeColor = 'text-blue-500',
  inactiveColor = 'text-slate-700',
  classNames = {},
}: OptionProps) => {
  const [openSubPaths, setOpenSubPaths] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isOpen) setOpenSubPaths(false);
  }, [isOpen]);
  const toggleSidePaths = () => {
    setOpenSubPaths((prev) => !prev);
  };

  const isActive = (currentPath: string) => {
    const normalizedPath = pathname === '/dashboard' ? '/' : pathname;
    return normalizedPath === currentPath;
  };
  const isParentActive = (currentPath: string) => {
    const normalizedPath = pathname === '/dashboard' ? '/' : pathname;
    return normalizedPath === currentPath || subpaths?.some((subpath) => subpath.path === normalizedPath);
  };
  const {
    container = 'relative w-full flex flex-col',
    linkContainer = ' hover:text-blue-500 relative flex items-center w-full h-12 px-3 rounded-md transition-all hover:bg-slate-100   cursor-pointer',
    icon = 'text-xl',
    title: titleClass = 'ml-3 text-sm font-medium flex items-center gap-2 truncate',
    subpathContainer = 'ml-16',
    subpathLink = 'block text-sm transition',
    tooltipContent = 'flex flex-col space-y-2 text-black',
  } = classNames;
  return (
    <div className={container}>
      <div className={`${linkContainer} ${isOpen ? 'justify-start' : 'justify-center'}`}>
        <div
          className={`w-10 h-10 flex items-center justify-center group ${
            isParentActive(path) ? activeColor : inactiveColor
          }`}
        >
          {/*Suboptions are being displayed on hover 
          to enable navigation both to main paths and to paths. Tooltip can be called both on click and hover if needed*/}
          {!isOpen ? (
            <Tooltip
              on={'hover'}
              contentStyle={{ zIndex: 1001 }}
              trigger={
                <Link
                  to={path}
                  className={`relative flex items-center w-full h-12 px-3 rounded-md transition-all hover:bg-slate-100  ${
                    isParentActive(path) ? activeColor : inactiveColor
                  }`}
                >
                  <Icon className={icon} />
                </Link>
              }
              position="right center"
            >
              {subpaths ? (
                <ul className={tooltipContent}>
                  {subpaths.map((subpath) => (
                    <li key={subpath.path}>
                      <Link
                        to={subpath.path}
                        className={`text-sm transition ${
                          isActive(subpath.path) ? activeColor : `text-slate-600 hover:${activeColor} `
                        } `}
                      >
                        {subpath.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>{title}</span>
              )}
            </Tooltip>
          ) : (
            <Icon className={cn(icon, `${isParentActive(path) ? activeColor : ''}`)} />
          )}
        </div>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className={titleClass}
            style={{ minWidth: '0' }}
          >
            <Link
              to={path}
              className={`truncate flex items-center gap-2  ${isParentActive(path) ? activeColor : inactiveColor}`}
            >
              {title}
            </Link>
            {/*Toggling and displaying chevron if subpaths are present*/}
            {subpaths && (
              <>
                {openSubPaths ? <FaChevronUp onClick={toggleSidePaths} /> : <FaChevronDown onClick={toggleSidePaths} />}
              </>
            )}
          </motion.span>
        )}
      </div>
      {openSubPaths && subpaths && (
        <div className={subpathContainer}>
          {subpaths.map((subpath) => (
            <SubOption
              key={subpath.path}
              path={subpath.path}
              title={subpath.title}
              activeColor={activeColor}
              inactiveColor={inactiveColor}
              isActive={isActive}
              subpathLink={subpathLink}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Option;
