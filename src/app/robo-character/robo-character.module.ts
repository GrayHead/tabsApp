import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboCharacterPageRoutingModule } from './robo-character-routing.module';

import { RoboCharacterPage } from './robo-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboCharacterPageRoutingModule
  ],
  declarations: [RoboCharacterPage]
})
export class RoboCharacterPageModule {}
