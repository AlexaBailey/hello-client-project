import React from 'react';
import { useMediaSize } from '../../hooks/useMediaSize';

interface ResponsiveProps {
  desktopVariant?: React.ReactNode;
  tabletVariant?: React.ReactNode;
  mobileVariant?: React.ReactNode;
}

const Responsive = ({ desktopVariant, tabletVariant, mobileVariant }: ResponsiveProps) => {
  const mediaSize = useMediaSize();

  if (mediaSize === 'desktop') {
    return <>{desktopVariant}</>;
  } else if (mediaSize === 'tablet') {
    return <>{tabletVariant || mobileVariant}</>;
  } else {
    return <>{mobileVariant}</>;
  }
};

export default Responsive;
