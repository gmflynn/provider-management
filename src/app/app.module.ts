import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { GRNComponent } from './grn/grn.component';
import { EMSComponent } from './ems/ems.component';
import { ContentsComponent } from './contents/contents.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GRNComponent,
    EMSComponent,
    ContentsComponent
  ],
  imports: [
      BrowserModule,
      MaterialModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
