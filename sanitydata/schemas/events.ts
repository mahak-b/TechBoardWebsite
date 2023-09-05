export default {
    name: 'events',
    type: 'document',
    title: 'Events',
    fields: [
      {
        name: 'event_name',
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