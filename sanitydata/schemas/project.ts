export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
      {
        name: 'project_name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'img_urls',
        type: 'array',
        of: [{type:'string'}],
        title:'Images'
      },
    ]
}