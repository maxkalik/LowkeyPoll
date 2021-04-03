import React from 'react';
import Svg, { Rect } from 'react-native-svg';
import { colors } from '../../../utils/constants';
import {
  Icon26pxAddon,
  Icon26pxAddMore,
  Icon26pxAnonymous,
  Icon26pxCamera,
  Icon26pxCloseLarge,
  Icon26pxCloseMedium
} from './icons';
import { IconProps, iconsType } from '../types';

const icons: iconsType = {
  ['addon']: Icon26pxAddon,
  ['add more']: Icon26pxAddMore,
  ['anonymous']: Icon26pxAnonymous,
  ['camera']: Icon26pxCamera,
  ['close large']: Icon26pxCloseLarge,
  ['close medium']: Icon26pxCloseMedium,
  default: <Rect width={26} height={26} />
};

const renderIcon = (key: keyof typeof icons): JSX.Element => icons[key];

const Icon26px: React.FC<IconProps> = ({ name, color }): JSX.Element => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill={color || colors.COLOR_FOREGROUND}>
    {renderIcon(name)}
  </Svg>
);

export default Icon26px;
