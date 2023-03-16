import { TextStyle, ViewStyle } from 'react-native';
import { CardStyleProps } from '@/types/card';
import { scale, WIDTHS } from '@/styles/dimensions';

interface ItemStyleProps {
  [key: string]: {
    LAYOUT_STYLE?: ViewStyle | TextStyle;
    CARD_STYLE: CardStyleProps;
  };
}

const ITEM_STYLE = {
  MAIN: {
    LAYOUT_STYLE: {
      margin: scale(4),
    },
    CARD_STYLE: {
      imageSize: 'large',
    },
  },
  RANKING: {
    LAYOUT_STYLE: {
      margin: scale(6),
    },
    CARD_STYLE: {
      imageSize: 'medium',
    },
  },
  RECOMMEND: {
    LAYOUT_STYLE: {
      margin: scale(6),
      width: WIDTHS.WINDOW * 0.65,
    },
    CARD_STYLE: {
      imageSize: 'small',
      direction: 'horizontal',
    },
  },
  RISING: {
    LAYOUT_STYLE: {
      margin: scale(6),
    },
    CARD_STYLE: {
      imageSize: 'tiny',
    },
  },
  MY: {
    CARD_STYLE: {
      imageSize: 'tiny',
      direction: 'horizontal',
    },
  },
  DETAIL: {
    LAYOUT_STYLE: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: scale(8),
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    CARD_STYLE: {
      imageSize: 'tiny',
      direction: 'horizontal',
    },
  },
} as ItemStyleProps;

export default ITEM_STYLE;
