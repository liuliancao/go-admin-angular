import { Component, OnInit, Renderer2 } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { DrawerService, IDrawerOpenResult } from 'ng-devui/drawer';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonalizeComponent } from '../@shared/components/personalize/personalize.component';
import { PersonalizeService } from '../@core/services/personalize.service';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { DaLayoutConfig, DaLayoutService } from '../@shared/layouts/da-layout';
import { DaScreenMediaQueryService } from '../@shared/layouts/da-grid';
import { SideMenuComponent } from '../@shared/components/side-menu/side-menu.component';
import { Theme } from 'ng-devui/theme';


@Component({
  selector: 'da-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  private destroy$ = new Subject();
  menu;

  layoutConfig: DaLayoutConfig;
  isSidebarShrink: boolean = false;
  isSidebarFold: boolean = false;

  sideDrawer: IDrawerOpenResult;

  constructor(
    private drawerService: DrawerService,
    private dialogService: DialogService,
    private personalizeService: PersonalizeService,
    private layoutService: DaLayoutService,
    private mediaQueryService: DaScreenMediaQueryService,
    private render2: Renderer2,
    private translate: TranslateService
  ) {
    this.personalizeService.initTheme();
    this.layoutService
      .getLayoutConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe((config: DaLayoutConfig) => {
        this.layoutConfig = config;
        this.isSidebarShrink = !!this.layoutConfig.sidebar.shrink;
      });

    this.mediaQueryService
      .getPoint()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ currentPoint, change, compare }) => {
        /* ml：sidebar shrink breakpoint */
        if (change <= 0 && compare['ml'] <= 0) {
          this.sidebarShrink(true);
        } else if (change >= 0 && compare['ml'] > 0) {
          this.sidebarShrink(false);
        }

        /* mm：sidebar hidden breakpoint */
        if (change <= 0 && compare['mm'] <= 0) {
          this.sidebarFold(true);
        } else if (change >= 0 && compare['mm'] > 0) {
          this.sidebarFold(false);
        }
      });
  }

  ngOnInit() {
    this.translate
      .get('page')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.updateMenu(res);
      });

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('page');
        this.updateMenu(values);
      });
    this.personalizeService.getUiTheme().subscribe(theme => {
      const currentTheme = Object.values(window['devuiThemes']).find((i: Theme) => {
        return i.id === theme;
      })
      if (currentTheme && (<any>currentTheme).isDark) {
        this.render2.addClass(document.body, 'is-dark');
      } else {
        this.render2.removeClass(document.body, 'is-dark');
      }
    })
  }

  updateMenu(values) {
      this.menu = [
          {
              title: values['cmdb']['title'],
              open: true,
              children: [
                  {
                      title: values['cmdb']['list'],
                      link: '/cmdb/list',
                  },
              ],
              link: '/cmdb',
              menuIcon: 'icon icon-console',
          },
      ];

  }

  openSideMenuDrawer() {
    this.drawerService.open({
      drawerContentComponent: SideMenuComponent,
      width: '240px',
      position: 'left' /* TODO: if destroyOnHide is false, there has some problem, waiting ng-devui bug fix*/,
      // destroyOnHide: false,
      data: {
        data: this.menu,
      },
    });
  }

  personalizeConfig() {
    const result = this.dialogService.open({
      id: 'theme',
      width: '800px',
      maxHeight: '800px',
      title: '',
      content: PersonalizeComponent,
      backdropCloseable: true,
      onClose: () => {},
      buttons: [],
    });
  }

  sidebarShrink(isShrink) {
    this.isSidebarShrink = isShrink;

    if (this.layoutConfig.sidebar.firSidebar) {
      this.layoutConfig.sidebar.firSidebar.width = this.isSidebarShrink
        ? 54
        : 240;
    }
    this.layoutConfig.sidebar.shrink = this.isSidebarShrink;
    this.layoutService.updateLayoutConfig(this.layoutConfig);
  }

  sidebarFold(isFold) {
    this.isSidebarFold = isFold;

    if (this.layoutConfig.sidebar.firSidebar) {
      this.layoutConfig.sidebar.firSidebar.hidden = isFold;
      this.layoutService.updateLayoutConfig(this.layoutConfig);
    }
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
