import { Inject, Injectable, Optional } from '@angular/core';
import { commonIcons, IconMap } from './icon-map';
import { IconItem } from './icon-item';
import { IconConfig } from './icon-config';
import { DOCUMENT } from '@angular/common';

/**
 * Config and read icon families
 */
@Injectable()
export class IconManageService {
  private _icon_map_cache: Map<string, IconMap>;
  constructor(@Optional() config: IconConfig, @Inject(DOCUMENT) private _document) {
    console.dir(this._document);
    this._icon_map_cache =new Map();
    this._icon_map_cache.set(commonIcons.family, commonIcons);
    for (const mapItem of config as Array<IconMap>) {
      if(this._icon_map_cache.has(mapItem.family)) {
        console.warn('IconMap family named [' + mapItem.family + '] is overwrote!');
        this._icon_map_cache.set(mapItem.family, mapItem);
      } else {
        this._icon_map_cache.set(mapItem.family, mapItem);
      }
    }
  }

  public getIconFamilies(): string[] {
    const families: string[] = [];
    for (const family in this._icon_map_cache) {
      families.push(family)
    }
    return families;
  }

  public getIconMaps(): Map<string, IconMap> {
    const maps: Map<string, IconMap> = new Map();
    for (const family in this._icon_map_cache) {
      maps.set(family, this._icon_map_cache.get(family));
    }
    return maps;
  }

  public getIcon(family: string, name: string): IconItem {
    const t_family = this._icon_map_cache.get(family);
    if (!t_family) {
      return null;
    }
    const t_item = t_family.map.find((value: IconItem) => {
      return value.name === name;
    });
    if (!t_item) {
      return null;
    }
    return {
      name: t_item.name,
      code: t_item.code
    };
  }
}
