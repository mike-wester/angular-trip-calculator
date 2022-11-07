import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
