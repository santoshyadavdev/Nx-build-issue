import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonBuildableLibModule } from '@nx-build-lib/non-buildable-lib';
@NgModule({
  imports: [CommonModule, NonBuildableLibModule],
})
export class BuildableLibModule {}
