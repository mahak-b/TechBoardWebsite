export default {
    name: 'clubs',
    type: 'document',
    title: 'Clubs',
    fields: [
      {
        name: 'club_name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      },
      {
        name: 'img',
        type: 'image',
        title:'Images'
      }
    ]
}