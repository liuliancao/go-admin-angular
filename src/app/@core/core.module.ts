import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthService } from './services/auth.service';
import { PersonalizeService } from './services/personalize.service';
import { CustomThemeService } from './services/custom-theme.service';
import { CourseData } from './data/course';
import { CourseService } from './mock/course.service';
import { MockDataModule } from './mock/mock-data.module';
import { AuthGuardService } from './services/auth-guard-service.guard';
import { ListData} from './data/listData';
import { HostData } from './data/host';
import { ListDataService } from './mock/list-data.service';
import { HostService } from './services/host.service';

const DATA_SERVICES = [
    { provide: CourseData, useClass: CourseService },
    { provide: ListData, useClass: ListDataService },
    { provide: HostData, useClass: HostService },
];

export const DEVUI_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  AuthService,
  PersonalizeService,
  AuthGuardService,
  CustomThemeService
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...DEVUI_CORE_PROVIDERS],
    };
  }
}
