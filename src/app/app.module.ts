import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { FlexLayoutNewComponent } from './flex-layout-new/flex-layout-new.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutComponent,
    FlexLayoutNewComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
