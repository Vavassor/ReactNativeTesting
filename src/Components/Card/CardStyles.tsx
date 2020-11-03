import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS, FONT_FAMILIES} from '../../Style/Style';

export interface CardStyles {
  container: ViewStyle;
  dash?: ViewStyle;
  icon?: ImageStyle;
  iconContainer?: ViewStyle;
  textContainer: ViewStyle;
  text: TextStyle;
  title: TextStyle;
}

const shadowContainer: ViewStyle = {
  flexGrow: 1,
  justifyContent: 'flex-start',
  width: '100%',
  marginBottom: 10,
  borderColor: COLORS.gray6,
  borderWidth: 1,
  borderRadius: 10,
  backgroundColor: COLORS.white,
  padding: 17,
  elevation: 5,
};

export const defaultCardStyles = StyleSheet.create({
  tripContainer: {
    ...shadowContainer,
    elevation: 0,
  },
  partText: {
    lineHeight: 18,
    fontFamily: FONT_FAMILIES.openSansBold,
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewPartText: {
    lineHeight: 18,
    fontFamily: FONT_FAMILIES.openSansRegular,
    fontSize: 14,
    fontWeight: '900',
  },
  aapPickupIcon: {
    maxHeight: 19,
    maxWidth: 19,
  },
  deliveryStopNumber: {
    fontFamily: FONT_FAMILIES.openSansBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    alignSelf: 'center',
    lineHeight: 18,
  },
  partsInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  partsOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  partIcon: {
    maxWidth: 20,
    maxHeight: 20,
    marginRight: 15,
  },
  nonDeliveryStopIcon: {
    maxHeight: 18,
    maxWidth: 18,
    tintColor: COLORS.white,
  },
  dashContainer: {
    alignItems: 'center',
    minHeight: 58,
    overflow: 'hidden',
  },
  dash: {
    width: 2,
    flexDirection: 'column',
    marginLeft: -1,
  },
  nonDeliveryDash: {
    width: 2,
    height: 28,
    flexDirection: 'column',
    marginLeft: -1,
  },
});

export const cardStyles = StyleSheet.create<CardStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dash: {
    ...defaultCardStyles.dash,
    height: '100%',
  },
  icon: {},
  iconContainer: {},
  text: {
    color: COLORS.gray2alt,
    fontSize: 20,
    lineHeight: 22,
    flexGrow: 1,
  },
  textContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 30,
  },
  title: {
    color: COLORS.black,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '900',
  },
});
