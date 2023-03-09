import { Dimensions } from 'react-native';

/* Apple iPhone 14의 CSS Width Height를 참고 */
const BASIC_DIMENSIONS = {
  HEIGHT: 844,
  WIDTH: 390,
};

const WINDOW_HEIGHT = Dimensions.get('screen').height;
const WINDOW_WIDTH = Dimensions.get('screen').width;

const scale = (size: number) => (WINDOW_WIDTH / BASIC_DIMENSIONS.WIDTH) * size;
const verticalScale = (size: number) => (WINDOW_HEIGHT / BASIC_DIMENSIONS.HEIGHT) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const HEIGHTS = {
  WINDOW: WINDOW_HEIGHT,
  HEADER: verticalScale(80),
  MAIN_BANNER: verticalScale(240),
  BOTTOM_BANNER: verticalScale(60),
};

const WIDTHS = {
  WINDOW: WINDOW_WIDTH,
};

export { HEIGHTS, WIDTHS, scale, verticalScale, moderateScale };
