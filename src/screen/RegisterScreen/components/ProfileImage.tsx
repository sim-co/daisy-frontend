import React, {useState} from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {CameraIcon} from '../../../assets/svgs';
import Colors from '../../../constants/Color';

const ProfileImage = () => {
  const [image, setImage] = useState();
  const cameraButton = (
    <Pressable
      onPress={() => {
        Alert.alert('사진을 등록해주세요', '카메라 또는 갤러리 선택', [
          {
            text: '카메라로 촬영하기',
            onPress: async () => {
              const result = await launchCamera({
                mediaType: 'photo',
                cameraType: 'front',
              });
              if (result.didCancel) {
                return;
              }
              // const localUri = result.assets[0].uri;
              // const uriPath = localUri.split('//').pop();
              // const imageName = localUri.split('/').pop();
              // setImage('file://' + uriPath);
            },
          },
          {
            text: '갤러리에서 가저오기',
            onPress: async () => {
              const result = await launchImageLibrary({mediaType: 'photo'});
              if (result.didCancel) {
                return null;
              }
              console.log(result.assets);
              console.log(
                'What the hack wrong with my code? I Fuxxing hate you... You little shit',
              );
              // const localUri = result.assets[0].uri;
              // const uriPath = localUri.split('//').pop();
              // const imageName = localUri.split('/').pop();
              // setImage('file://' + uriPath);
            },
          },
        ]);
      }}
      style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      {<CameraIcon />}
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {cameraButton}
      <Text style={styles.text}>사진 선택</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.GREY_QUATERNARY,
    borderRadius: 50,
    height: 100,
    justifyContent: 'center',
    marginBottom: 8,
    width: 100,
  },
  container: {
    alignItems: 'center',
    height: 128,
    paddingHorizontal: 20,
    width: 100,
  },
  image: {
    backgroundColor: Colors.GREY_QUATERNARY,
    borderRadius: 50,
    height: 100,
    marginBottom: 8,
    width: 100,
  },

  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.GREY_TERTIANARY,
    fontFamily: 'Pretendard',
    fontSize: 12,
  },
});

export default ProfileImage;
