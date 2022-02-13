import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['../management.component.scss']
})
export class HomeComponent implements OnInit {
    resourceList = [
        { title:"产品",link: "/cmdb/manage/products", content:"产品相关",name:"Product"},
        { title:"服务",link: "/cmdb/manage/services", content:"服务相关",name:"Service"},
        { title:"集群",link: "/cmdb/manage/clusters", content:"集群相关",name:"Cluster"},
        { title:"主机",link: "/cmdb/manage/hosts", content:"主机相关", name:"Host"},
        { title:"人员",link: "/cmdb/manage/users", content:"人员和权限相关", name:"People"},
        { title:"其他资源",link: "/cmdb/manage/resources", content:"其他资源比如CDN，SLB，证书等", name:"Others"},
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
