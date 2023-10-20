import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useBreakpoints } from 'hooks/useBreakpoints';

export const ButtonSubmit = ({
  children = '',
  size = '',
  onClick,
  onSubmit,
  name = 'button',
}) => {
  const [btnHover, setBtnHover] = useState({});
  const [mediaQueryStyles, setMediaQueryStyles] = useState({});

  const { isMobile, isTablet, isLaptop } = useBreakpoints();

  const stylesBtn = {
    display: 'flex',
    justifyContent: 'center',
    columnGap: 8,
    width: '100%',
    background: '#E3FFA8',
    borderRadius: 12,
    padding: '8px 10px',
    border: 'none',

    fontSize: 14,
    fontWeight: 500,
    color: '#0F0F0F',
    cursor: 'pointer',

    transition: 'all 250ms linear',
  };

  const hoverStyles = {
    boxShadow: 'rgba(255, 255, 255, 0.24) 0px 5px 8px',
    fontSize: 15,
  };

  useEffect(() => {
    if (isMobile && !isTablet && !isLaptop) {
      setMediaQueryStyles({
        maxWidth: size.SWidth || null,
      });
    } else if (isMobile && isTablet && !isLaptop) {
      setMediaQueryStyles({
        maxWidth: size.MWidth || size.SWidth,
      });
    } else if (isMobile && isTablet && isLaptop) {
      setMediaQueryStyles({
        maxWidth: size.LWidth || size.MWidth,
      });
    }
  }, [isMobile, isTablet, isLaptop, size]);

  return (
    <button
      type="submit"
      name={name}
      style={{ ...stylesBtn, ...mediaQueryStyles, ...btnHover }}
      onFocus={() => {
        setBtnHover(hoverStyles);
      }}
      onBlur={() => {
        setBtnHover({});
      }}
      onMouseEnter={() => {
        setBtnHover(hoverStyles);
      }}
      onMouseLeave={() => {
        setBtnHover({});
      }}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};


ButtonSubmit.propTypes = {
  size: PropTypes.object,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  name: PropTypes.string,
}