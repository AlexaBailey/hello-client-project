import { Link } from 'react-router-dom';
import { SubOptionClassnames, SubOptionType } from '../../../../types/sidebar';

interface SubOptionProps extends SubOptionClassnames, SubOptionType {
  activeColor: string;
  inactiveColor: string;
  isActive: (path: string) => boolean;
}

const SubOption = ({
  path,
  activeColor,
  title,
  inactiveColor,
  subpathLink = 'block text-sm transition',
  isActive,
}: SubOptionProps) => {
  return (
    <Link
      key={path}
      to={path}
      className={`${subpathLink} ${isActive(path) ? activeColor : `${inactiveColor} hover:${activeColor}`}`}
    >
      {title}
    </Link>
  );
};

export default SubOption;
