export default {
    dashboard: {
        home: {
            breadcrumb: 'index',
            title: 'index',
            description: 'show the usage of the op platform.',
            welcome: 'Welcome to op platform !',
        },
        cmdb: {
            title: 'CMDB',
            breadcrumb: 'cmdb',
            host: {
                title: 'cmdb list',
                breadcrumb: 'cmdb-list',
                basicList: {
                    title: 'cmdb lists',
                    description: 'show all the cmdb hosts.'
                }
            },
            cluster: {
                title: 'cluster detail',
                breadcrumb: 'cluster detail',
                config: {
                    title: 'cluster config',
                    breadcrumb: 'cluster config',
                },
            },
            product: {
                breadcrumb: 'product detail',
            },
            service: {
                breadcrumb: 'service detail',
                config: {
                    title: "service config",
                    breadcrumb: "service config",
                }
            },
            manage: {
                title: 'cmdb management',
                breadcrumb: 'manage',
                basicList: {
                    title: 'cmdb management',
                    description: 'manage the cmdb resources.'
                },
                product: {
                    breadcrumb: 'product',
                    basicList: {
                        title: 'product management',
                        description: 'product management'
                    }
                },
                service: {
                    breadcrumb: 'service',
                    basicList: {
                        title: 'service management',
                        description: 'service management'
                    }
                },
                cluster: {
                    breadcrumb: 'cluster',
                    basicList: {
                        title: 'cluster management',
                        description: 'cluster management'
                    }
                },
                user: {
                    breadcrumb: 'user',
                    basicList: {
                        title: 'user management',
                        description: 'user management'
                    }
                },
                resource: {
                    breadcrumb: 'resource',
                    basicList: {
                        title: 'resource management',
                        description: 'resource management'
                    }
                },

            },
        },
        deploy: {
            title: 'deploy center',
            breadcrumb: 'deploy center',
            home: {
                title: 'homepage',
                breadcrumb: 'homepage',
            },
            manage: {
                title: 'deploy management',
                breadcrumb: 'deploy management',
            },
            service: {
                title: 'service deploy',
                breadcrumb: 'service deploy',
            },

        },
        config: {
            title: 'config center',
            breadcrumb: 'config center',
            home: {
                title: 'config home',
                breadcrumb: 'config home',
            },
        },
        workflow: {
            title: 'workflow center',
            breadcrumb: 'worflow center',
            home: {
                title: 'worflow home',
                breadcrumb: 'worflow home',
            },
            create: {
                title: 'create workflow',
                breadcrumb: 'create workflow',
            },
        },
    }
};
