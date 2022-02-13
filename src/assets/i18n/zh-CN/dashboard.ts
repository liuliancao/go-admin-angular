export default {
    dashboard: {
        home: {
            breadcrumb: '主页',
            title: '主页',
            description: '这里介绍op平台使用.',
            welcome: '欢迎使用op运维平台!',
        },
        cmdb: {
            title: '资产中心',
            breadcrumb: '资产中心',
            host: {
                title: '资产列表',
                breadcrumb: '资产列表',
                basicList: {
                    title: '资产列表',
                    description: '展示所有的host资产',
                }
            },
            cluster: {
                title: '集群详情',
                breadcrumb: '集群详情',
                config: {
                    title: "集群配置",
                    breadcrumb: '集群配置',
                },
            },
            product: {
                breadcrumb: '产品详情',
            },
            service: {
                breadcrumb: '服务详情',
                config: {
                    title: "服务配置",
                    breadcrumb: "服务配置",
                }
            },
            manage: {
                title: '资产管理',
                breadcrumb: '资产管理',
                basicList: {
                    title: 'cmdb资产管理',
                    description: '管理cmdb的所有资源'
                },
                product: {
                    breadcrumb: '产品',
                    basicList: {
                        title: '产品管理',
                        description: '管理cmdb产品'
                    }
                },
                service: {
                    breadcrumb: '服务',
                    basicList: {
                        title: '服务管理',
                        description: '管理cmdb服务'
                    }
                },
                cluster: {
                    breadcrumb: '集群',
                    basicList: {
                        title: '集群管理',
                        description: '管理cmdb集群'
                    }
                },
               user: {
                    breadcrumb: '用户',
                    basicList: {
                        title: '用户管理',
                        description: '管理用户'
                    }
                },
               resource: {
                    breadcrumb: '资源',
                    basicList: {
                        title: '资源管理',
                        description: '管理资源'
                    }
                },

            },
        },
        deploy: {
            title: '发布中心',
            breadcrumb: '发布中心',
            home: {
                title: '发布主页',
                breadcrumb: '发布主页',
            },
            manage: {
                title: '发布配置',
                breadcrumb: '发布配置',
            },
            service: {
                title: '服务发布',
                breadcrumb: '服务发布',
            },
        },
        config: {
            title: '配置中心',
            breadcrumb: '配置中心',
            home: {
                title: '配置主页',
                breadcrumb: '配置主页',
            },
        },
        workflow: {
            title: '流程管理',
            breadcrumb: '流程管理',
            home: {
                title: '流程主页',
                breadcrumb: '流程主页',
            },
            create: {
                title: '新建流程',
                breadcrumb: '新建流程',
            },
        },
    }
};
