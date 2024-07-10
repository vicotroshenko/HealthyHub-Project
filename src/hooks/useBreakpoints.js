import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });

  const isTablet = useMediaQuery({ query: '(min-width: 834px)' });

  const isLaptop = useMediaQuery({ query: '(min-width: 1440px)' });

  return {
    isMobile,
    isTablet,
    isLaptop,
  };
};
