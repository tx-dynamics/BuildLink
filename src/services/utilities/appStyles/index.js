import { StyleSheet } from 'react-native'
import { wp } from '../../constants'
import { colors } from '../colors'

export default StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  row: {
    flexDirection: 'row',
  },
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  aiFlexStart: {
    alignItems: 'flex-start',
  },
  aiFlexEnd: {
    alignItems: 'flex-end',
  },
  aiCenter: {
    alignItems: 'center',
  },
  jcCenter: {
    justifyContent: 'center',
  },
  jcFlexStart: {
    justifyContent: 'flex-start',
  },
  jcFlexEnd: {
    justifyContent: 'flex-end',
  },
  jcSpaceBetween: {
    justifyContent: 'space-between',
  },
  jcSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  jcSpaceAround: {
    justifyContent: 'space-around',
  },
  asCenter: {
    alignSelf: 'center',
  },
  taCenter: {
    textAlign: 'center',
  },
  asFlexStart: {
    alignSelf: 'flex-start',
  },
  asFlexEnd: {
    alignSelf: 'flex-end',
  },
  colCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    padding: wp(6),
    backgroundColor: colors.white
  },
})
