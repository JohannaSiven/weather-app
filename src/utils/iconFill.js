export const usesDarkFill = (theme) => {
  const darkFillThemes = [
    'clear-day',
    'cloudy-day',
    'rainy-day',
    'snowy-day',
    'foggy',
    'default',
  ];

  return darkFillThemes.includes(theme) ? true : false;
};
