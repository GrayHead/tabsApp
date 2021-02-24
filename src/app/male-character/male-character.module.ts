import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaleCharacterPageRoutingModule } from './male-character-routing.module';

import { MaleCharacterPage } from './male-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaleCharacterPageRoutingModule
  ],
  declarations: [MaleCharacterPage]
})
export class MaleCharacterPageModule {}
