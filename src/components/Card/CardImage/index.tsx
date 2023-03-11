import { Image, StyleSheet } from 'react-native';

import { CardImageProps } from '@/types/card';
import { CARD_SIZE, scale } from '@/styles/dimensions';

import { MOCK_IMAGE_URL } from '@/mocks/mockWebtoonList';

export default function CardImage({ ...props }: CardImageProps) {
  const { imageDownloadUrl, title, imageSize } = props;

  return (
    <Image
      style={{ ...styles.image, ...{ height: CARD_SIZE.HEIGHTS[imageSize] } }}
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
});
