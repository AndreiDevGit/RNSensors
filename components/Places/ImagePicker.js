import { useState } from 'react'
import { Colors } from '../../constants/colors'
import { Alert, View, Image, Text, StyleSheet } from 'react-native'
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker'
import OutlinedButton from '../UI/OutlinedButton'

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState()

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions()

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Недостаточно прав!',
        'Вам необходимо предоставить доступ к камеры, чтобы использовать это приложение.'
      )
      return false
    }

    return true
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions()

    if (!hasPermission) {
      return
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 5],
      quality: 0.5,
    })

    setPickedImage(image.uri)

    console.log(image)
  }

  let imagePreview = <Text>Изображение не инициализированно.</Text>
  if (pickedImage) {
    imagePreview = (
      <Image
        style={styles.image}
        source={{ uri: pickedImage }}
      />
    )
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton
        icon={'camera'}
        onPress={takeImageHandler}
      >
        Сделать фото
      </OutlinedButton>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 500,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
