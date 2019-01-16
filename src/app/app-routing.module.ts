import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GRNComponent }   from './grn/grn.component';
import { EMSComponent }   from './ems/ems.component';
import { ContentsComponent }   from './contents/contents.component';

const routes: Routes = [
  { path: 'grn', component: GRNComponent },
  { path: 'ems', component: EMSComponent },
  { path: 'contents', component: ContentsComponent }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}