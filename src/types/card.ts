import { ResponseItemData } from '@/types/api';

export interface CardStyleProps {
  imageSize: 'tiny' | 'small' | 'medium' | 'large';
  direction?: 'horizontal' | 'vertical';
  options?: 'default' | 'ranking';
}

export interface CardProps {
  cardData: ResponseItemData;
  cardStyle: CardStyleProps;
}

type CardImageInfoProps = Pick<ResponseItemData, 'title' | 'imageDownloadUrl'>;
type CardImageStyleProps = Pick<CardStyleProps, 'imageSize'>;

export type CardImageProps = CardImageStyleProps & CardImageInfoProps;
