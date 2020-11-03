import {ImageRequireSource} from 'react-native';

const tags = require('../../../Assets/Icons/tags.png');

export type IconImageSource = ImageRequireSource;

type BasicIcons = {
  tags: IconImageSource;
};

export const icons: BasicIcons = {
  tags,
};
