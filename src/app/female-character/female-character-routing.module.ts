import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FemaleCharacterPage } from './female-character.page';

const routes: Routes = [
  {
    path: '',
    component: FemaleCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FemaleCharacterPageRoutingModule {}
