export default function(values) {
    return [
        {
            title: values['cmdb']['title'],
            children: [
                {
                    title: values['cmdb']['host']['title'],
                    link: '/cmdb/hosts',
                },
                {
                    title: values['cmdb']['manage']['title'],
                    link: '/cmdb/manage',
                },
            ],
            link: 'cmdb',
            menuIcon: 'icon icon-marketplace',
        },
        {
            title: values['deploy']['title'],
            children: [
                {
                    title: values['deploy']['home']['title'],
                    link: '/deploy/home',
                },
                {
                    title: values['deploy']['manage']['title'],
                    link: '/deploy/manage',
                },
            ],
            link: 'deploy',
            menuIcon: 'icon icon-classroom-approve',
        },
        {
            title: values['config']['title'],
            children: [
                {
                    title: values['config']['home']['title'],
                    link: '/config/home',
                },
            ],
            link: 'config',
            menuIcon: 'icon icon-selct-template',
        },
        {
            title: values['workflow']['title'],
            children: [
                {
                    title: values['workflow']['home']['title'],
                    link: '/workflow/home',
                },
                {
                    title: values['workflow']['create']['title'],
                    link: '/workflow/create',
                },

            ],
            link: 'workflow',
            menuIcon: 'icon icon-console',
        },

    ];
}
