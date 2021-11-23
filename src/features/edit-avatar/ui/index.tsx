import { useActionSheet } from '@expo/react-native-action-sheet';
import React, { useState } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { launchCamera, launchImageLibrary, CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

import { Viewer } from 'shared/api/viewer';
import { Colors } from 'shared/config';
import { insertAtArray } from 'shared/lib';
import { Icons } from 'shared/ui';

type EditAvatarProps = {
  viewer: Viewer;
  style?: StyleProp<ViewStyle>;
};

const imageOptions: CameraOptions | ImageLibraryOptions = {
  mediaType: 'photo',
  quality: 0.8,
};

const EditAvatar: React.VFC<EditAvatarProps> = (props) => {
  const { viewer, style } = props;

  const [avatar, setAvatar] = useState<string | undefined>(viewer.avatar);

  const { showActionSheetWithOptions } = useActionSheet();

  const openMenu = () => {
    const options = ['Сделать фото', 'Открыть галерею', 'Закрыть'];
    showActionSheetWithOptions(
      {
        options: avatar ? insertAtArray(options, ['Удалить фото'], 2) : options,
        destructiveButtonIndex: avatar ? 2 : undefined,
        cancelButtonIndex: avatar ? 3 : 2,
      },
      (idx) => {
        if (idx === 0) {
          launchCamera(imageOptions, console.log);
        } else if (idx === 1) {
          launchImageLibrary(imageOptions, (res) => {
            const img = res.assets?.[0];
            if (img) {
              setAvatar(img.uri);
            }
          });
        } else if (idx === 2 && avatar) {
          setAvatar(undefined);
        }
      },
    );
  };

  return (
    <TouchableWithoutFeedback style={style} onPress={openMenu}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={[styles.icon, !!avatar && styles.iconWithImage]}>
            <Icons.CameraIcon width={80} height={80} fill={Colors.white2} />
          </View>

          {!!avatar && <Image style={styles.image} source={{ uri: avatar }} />}
        </View>

        <Text style={styles.text}>Изменить фото</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 140,
    backgroundColor: Colors.grey1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 140,
  },
  icon: {
    opacity: 0.6,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 140,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWithImage: {
    backgroundColor: Colors.black2,
  },
  text: {
    fontSize: 14,
    color: Colors.grey2,
    fontFamily: 'Roboto-Regular',
    marginTop: 12,
  },
});

export default EditAvatar;
