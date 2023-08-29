export default {
    name: 'alumni',
    type: 'document',
    title: 'Alumni',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'branch',
        type: 'string',
        title: 'Branch'
      },
      {
        name: 'position',
        type: 'string',
        title: 'Position'
      },
      {
        name: 'period',
        type: 'string',
        title: 'Period'
      },
      {
        name: 'img',
        type: 'image',
        title:'Images'
      }
    ]
}