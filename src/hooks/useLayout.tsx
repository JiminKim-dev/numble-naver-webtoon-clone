import { useCallback, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

const useOnLayout = () => {
  const [layoutSize, setLayoutSize] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { width, height, x, y } = e.nativeEvent.layout;
    setLayoutSize({ width, height, x, y });
  }, []);

  return [layoutSize, onLayout];
};

export default useOnLayout;
