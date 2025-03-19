import React from 'react';
import { Link } from 'react-router-dom';
import { SubOptionClassnames, SubOptionType } from '../../../../types/sidebar';

interface MobileSubOptionProps extends SubOptionClassnames, SubOptionType {
  activeColor: string;
  inactiveColor: string;
  className?: string;
  isActive: (path: string) => boolean;
}

const MobileSubOption: React.FC<MobileSubOptionProps> = ({
  path,
  title,
  activeColor,
  inactiveColor,
  mobileSubpathLink = 'block text-md transition',
  isActive,
}) => {
  return (
    <li key={path}>
      <Link
        to={path}
        className={`${mobileSubpathLink} ${isActive(path) ? activeColor : `${inactiveColor} hover:${activeColor}`}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default MobileSubOption;
