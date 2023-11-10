import { View, StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'
import OutlinedButton from '../UI/OutlinedButton'

function LocationPicker() {
  function getLocationHandler() {
    return
  }

  function pickOnMapHandler() {
    return
  }

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.action}>
        <OutlinedButton
          icon={'location'}
          onPress={getLocationHandler}
        >
          Locate User
        </OutlinedButton>
        <OutlinedButton
          icon={'map'}
          onPress={pickOnMapHandler}
        >
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})
