import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CabeceraComponent } from './cabecera/cabecera.component';



@NgModule({
  declarations: [
    CabeceraComponent
  ],
  exports: [
    CabeceraComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
