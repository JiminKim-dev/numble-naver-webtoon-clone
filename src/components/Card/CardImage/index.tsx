import { Image, StyleSheet } from 'react-native';

import { CardImageProps } from '@/types/card';
import { scale } from '@/styles/dimensions';

import { MOCK_IMAGE_URL } from '@/mocks/mockWebtoonList';

export default function CardImage({ ...props }: CardImageProps) {
  const { imageDownloadUrl, title, imageSize } = props;

  return (
    <Image
      style={{ ...styles.image, ...styles[imageSize] }}
      source={{ uri: imageDownloadUrl || MOCK_IMAGE_URL }}
      alt={title}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: scale(8),
    backgroundColor: 'gray',
  },
  tiny: {
    width: scale(90),
    height: scale(70),
  },
  small: {
    width: scale(70),
    height: scale(100),
  },
  medium: {
    width: scale(100),
    height: scale(140),
  },
  large: {
    width: scale(120),
    height: scale(160),
  },
});
