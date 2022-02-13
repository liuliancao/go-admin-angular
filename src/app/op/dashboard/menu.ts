export default function(values) {
  return [
    {
      title: values['cmdb']['title'],
      children: [
        {
          title: values['cmdb']['list'],
          link: '/cmdb/list',
        },
      ],
      link: 'cmdb',
      menuIcon: 'icon icon-console',
    },
   ];
}
