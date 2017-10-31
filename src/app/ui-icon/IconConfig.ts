import { IconItem } from './IconItem';

export interface IconConfig {
  family: string;
  map: IconItem[];
}

export const commonIcons: IconConfig = {
  family: 'oct-common',
  map: [
    {'window-close': '\ue93b'}
  ]
};
