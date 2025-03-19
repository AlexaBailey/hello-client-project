export const getNormalizedPath = (pathname: string): string => {
  return pathname === '/dashboard' ? '/' : pathname;
};

export const isActivePath = (pathname: string, currentPath: string): boolean => {
  const normalizedPath = getNormalizedPath(pathname);
  return normalizedPath === currentPath;
};

export const isParentActivePath = (pathname: string, currentPath: string, subpaths?: { path: string }[]): boolean => {
  const normalizedPath = getNormalizedPath(pathname);
  return normalizedPath === currentPath || subpaths?.some((subpath) => subpath.path === normalizedPath) || false;
};
