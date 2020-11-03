/**
 * Adapted from a component in https://github.com/rtslabs/aap-mobile-edb
 */
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Text, View} from 'react-native';
import {COLORS} from '../../Style/Style';
import {cardStyles, CardStyles, defaultCardStyles} from './CardStyles';
import {IconImageSource, icons} from './icons/BasicIcons';

const {tags} = icons;

export interface CardProps {
  hasDash?: boolean;
  icon: IconImageSource;
  isDashFaded?: boolean;
  isDisabled?: boolean;
  isLink?: boolean;
  isTitleOnly?: boolean;
  numberOfLines?: number;
  partCount?: number;
  style?: CardStyles;
  text?: string;
  title: string;
  type: 'NUMBER' | 'IMAGE';
}

export const Card: React.FunctionComponent<CardProps> = ({
  children,
  icon,
  isLink,
  isTitleOnly,
  style: styleProp,
  text,
  title,
  type,
  numberOfLines,
  hasDash,
  isDashFaded,
  isDisabled,
  partCount,
}) => {
  const styles = styleProp || cardStyles;
  const partTextColor = isLink ? COLORS.linkblue : COLORS.black;
  const {t} = useTranslation('stopCard');
  return (
    <View style={[styles.container, {opacity: isDisabled ? 0.5 : 1}]}>
      <View
        style={
          hasDash
            ? defaultCardStyles.dashContainer
            : {...defaultCardStyles.dashContainer, minHeight: 0}
        }>
        <View style={styles.iconContainer}>
          {type === 'NUMBER' ? (
            <Text style={defaultCardStyles.deliveryStopNumber}>{icon}</Text>
          ) : (
            <Image source={icon} style={styles.icon} />
          )}
        </View>
        {/* {hasDash && (
          <Dash
            style={[styles.dash, {opacity: isDashFaded ? 0.5 : 1}]}
            dashGap={3}
            dashColor={COLORS.mobileGreen}
            dashThickness={3}
            dashLength={6}
          />
        )} */}
      </View>
      <View
        style={
          hasDash
            ? styles.textContainer
            : [styles.textContainer, {paddingBottom: 0}]
        }>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            {textDecorationLine: isDisabled ? 'line-through' : 'none'},
          ]}>
          {title}
        </Text>
        {!isTitleOnly && (
          <Text
            numberOfLines={numberOfLines ? numberOfLines : 0}
            style={[
              styles.text,
              {textDecorationLine: isDisabled ? 'line-through' : 'none'},
            ]}>
            {text}
          </Text>
        )}
        {partCount !== 0 && (
          <View style={defaultCardStyles.partsOuterContainer}>
            <View style={defaultCardStyles.partsInnerContainer}>
              <Image source={tags} style={defaultCardStyles.partIcon} />
              <Text
                style={{
                  ...defaultCardStyles.partText,
                  color: partTextColor,
                }}>
                {t('partCountTextLabel', {count: partCount})}
              </Text>
            </View>
            {isLink && (
              <Text
                style={{
                  ...defaultCardStyles.viewPartText,
                  color: partTextColor,
                }}>
                {t('viewPartsLinkLabel')}
              </Text>
            )}
          </View>
        )}
        {children}
      </View>
    </View>
  );
};
