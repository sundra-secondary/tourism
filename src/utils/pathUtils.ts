/**
 * Prepends the base URL to the given asset path.
 * This is useful for assets located in the public directory when deploying to a subpath.
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};
