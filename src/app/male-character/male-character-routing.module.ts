import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaleCharacterPage } from './male-character.page';

const routes: Routes = [
  {
    path: '',
    component: MaleCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaleCharacterPageRoutingModule {}
