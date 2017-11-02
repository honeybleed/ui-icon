import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiIconModule } from './ui-icon/ui-icon.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiIconModule.forRoot(
      [{
        family: 'test',
        map: [
          {name: 'test', code: '123'}
        ]
      }]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
