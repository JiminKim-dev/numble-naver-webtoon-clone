import { StyleSheet, Text, View } from 'react-native';

import { CardProps } from '@/types/card';
import CardImage from '@/components/Card/CardImage';

import { CARD_SIZE, scale } from '@/styles/dimensions';

export default function Card({ cardData, cardStyle, ranking }: CardProps) {
  const { imageSize, direction } = cardStyle;
  const { title, imageDownloadUrl, pictrWritrNm, sntncWritrNm } = cardData;

  const containerStyles = { ...styles.container, ...{ width: CARD_SIZE.WIDTH[imageSize] } };
  const imageStyles = { width: CARD_SIZE.WIDTH[imageSize] };
  const rankingTitleContainerStyles = { ...styles.titleContainer, ...{ marginLeft: scale(32) } };

  return (
    <View style={direction === 'horizontal' ? styles.horizontal : containerStyles}>
      <View style={direction === 'horizontal' && imageStyles}>
        <CardImage imageSize={imageSize} title={title} imageDownloadUrl={imageDownloadUrl} />
      </View>

      <View style={styles.textContainer}>
        {ranking && (
          <View>
            <Text style={styles.ranking}>{ranking}</Text>
          </View>
        )}

        <View style={ranking ? rankingTitleContainerStyles : styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {(imageSize === 'tiny' && direction !== 'horizontal') || (
            <Text style={styles.writer} numberOfLines={1}>
              {pictrWritrNm}, {sntncWritrNm}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  textContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginTop: scale(4),
  },
  title: {
    fontSize: scale(14),
  },
  writer: {
    color: 'gray',
    marginTop: scale(1),
    fontSize: scale(10),
  },
  ranking: {
    position: 'absolute',
    bottom: scale(4),
    left: scale(4),
    fontSize: scale(40),
    fontWeight: '900',
    textShadowColor: '#fff',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 5,
  },
});
