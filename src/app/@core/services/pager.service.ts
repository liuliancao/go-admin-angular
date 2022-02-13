import { Injectable } from '@angular/core';
import { Pager } from '../../@shared/models/pager';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

    getPageData(data, pager) {
        return data.slice(
            pager.index * (pager.index - 1),
            pager.size * pager.index
        );
    }
    constructor() { }
}
