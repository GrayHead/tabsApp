import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboCharacterPage } from './robo-character.page';

const routes: Routes = [
  {
    path: '',
    component: RoboCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboCharacterPageRoutingModule {}
