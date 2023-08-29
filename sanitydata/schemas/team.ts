export default {
    name: 'team',
    type: 'document',
    title: 'Team',
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
        name: 'img',
        type: 'image',
        title:'Images'
      }
    ]
}