import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IFrameService } from './iframe/iframe.service';
import { IFrameContainerComponent } from './iframe/iframe-container.component';

@NgModule({
  declarations: [
    AppComponent,
    IFrameContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IFrameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
