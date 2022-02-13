import { Observable } from 'rxjs';

export interface Host {
    id?: number;
    htype?: string;
    hostname?: string;
    os?: string;
    ip?: string;
    status?: string;
    cluster?: string;
    app?: string;
    product?: string;
    description?: string;
}

export interface ListPager {
    pageSize?: number;
    pageIndex?: number;
}

export abstract class HostData {
    abstract getHosts(pager: ListPager): Observable<Host[]>;
}
