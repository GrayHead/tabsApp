import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FemaleCharacterPageRoutingModule } from './female-character-routing.module';

import { FemaleCharacterPage } from './female-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FemaleCharacterPageRoutingModule
  ],
  declarations: [FemaleCharacterPage]
})
export class FemaleCharacterPageModule {}
