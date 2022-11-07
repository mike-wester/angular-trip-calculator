import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PeopleService } from './people/people.service';
import { TripsService } from './trips/trips.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PeopleService, TripsService],
})
export class ServicesModule {}
