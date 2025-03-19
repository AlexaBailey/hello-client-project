import React from 'react';
import { cn } from '../../../utils/helpers/clsx';
import { CustomClassnames } from '../../../types/sidebar';

const MobileTabbar = ({
  children,
  customClassnames = {},
}: {
  children: React.ReactNode;
  customClassnames?: CustomClassnames;
}) => {
  const { tabbarContainer, tabbarContent } = customClassnames;

  return (
    <nav className={cn('fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200', tabbarContainer)}>
      <div className={cn('flex justify-around items-end h-16', tabbarContent)}>{children}</div>
    </nav>
  );
};

export default MobileTabbar;
