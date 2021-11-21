import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPageComponent } from './components/upload-page/upload-page.component';
import { TextAnalyzerComponent } from './components/text-analyzer/text-analyzer.component';
import { ResultPageComponent } from './components/result-page/result-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/upload', pathMatch: 'full' },
  {
    path: 'upload',
    component: UploadPageComponent,
  },
  {
    path: 'text',
    component: TextAnalyzerComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
