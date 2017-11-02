import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { IconMap } from './icon-map';
import { IconManageService } from './icon-manage.service';
import { IconConfig } from './icon-config';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [IconManageService],
  declarations: [IconComponent],
  exports: [IconComponent]
})
export class UiIconModule {
  constructor(@Optional() @SkipSelf() parentModule: UiIconModule) {
    if(parentModule) {
      console.error('IconModule is Loaded already!');
    }
  }
  static forRoot(config: IconConfig): ModuleWithProviders {
    return {
      ngModule: UiIconModule,
      providers: [
        {provide: IconConfig, useValue: config}
      ]
    }
  }
}
