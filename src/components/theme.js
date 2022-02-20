const color = {
  lightBackground: '#ffffff',
  darkBackground: '#1a1a1a',
  text: '#000',
  text1: '#262626',
  text2: '#616161',
  primary: '#01579b',
  primaryLight: '#4f83cc',
  primaryDark: '#002f6c',
  primaryContrast: '#ffffff',
  accent: '#263238',
  accentLight: '#4f5b62',
  accentDark: '#000a12',
  accentContrast: '#ffffff',
  warning: '#fbc02d',
  error: '#e53935',
};
const transition = {
  fastest: '0.15s',
  faster: '0.25s',
  normal: ' 0.5s',
  slower: '0.7s',
  slowest: '0.85s',
};

export default {
  color,
  transition,
  button: {
    background: color.lightBackground,
  },
  border: {
    radius: '4px',
    color: '#616161',
  },
  space: {
    xs: '5px',
    s: '10px',
    normal: '16px',
    l: '28px',
  },
};
