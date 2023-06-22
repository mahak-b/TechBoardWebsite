export default {
    name: 'news',
    type: 'document',
    title: 'News',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID'
      },
      {
        name: 'date',
        type: 'date',
        title: 'Date'
      },
      {
        name: 'sdata',
        type: 'string',
        title: 'Sdata'
      },
      {
        name: 'ldata',
        type: 'string',
        title: 'Ldata'
      },
      {
        name: 'img',
        type: 'image',
        title:'Images'
      }
    ]
}