import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { TextAnalyzerComponent } from './components/text-analyzer/text-analyzer.component';
import { DndDirective } from './directives/dnd.directive';
import { AppProgressComponent } from './components/upload-page/progress/app-progress/app-progress.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    UploadPageComponent,
    TextAnalyzerComponent,
    DndDirective,
    AppProgressComponent,
    ResultPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
