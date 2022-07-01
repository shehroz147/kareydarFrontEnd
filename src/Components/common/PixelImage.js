import React from 'react';
import {Image, View} from 'react-native';
import {heightPixel, widthPixel} from '../../lib/style/adjust';

const PixelImage = ({imageSource, imageWidth, secondStyle}) => {
  const [loaded, setLoaded] = React.useState(false);
  const [imageRatio, setImageRatio] = React.useState(0);

  React.useEffect(() => {
    let source = Image.resolveAssetSource(imageSource);
    if (source.width !== null && source.height !== null) {
      setImageRatio(source.width / source.height);
      setLoaded(true);
    }
  }, [imageSource]);

  if (!loaded) {
    return <View />;
  }

  return (
    <Image
      style={[
        secondStyle,
        {
          width: widthPixel(imageWidth),
          height: heightPixel(imageWidth) / imageRatio,
          resizeMode: 'contain',
        },
      ]}
      source={imageSource}
    />
  );
};

export default PixelImage;
