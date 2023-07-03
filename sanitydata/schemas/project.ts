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
        name: 'content',
        type: 'string',
        title: 'Content'
      },
      {
        name: 'img1',
        type: 'image',
        title:'Images1'
      },
      {
        name: 'img2',
        type: 'image',
        title:'Images2'
      },
      {
        name: 'img3',
        type: 'image',
        title:'Images3'
      },
    ]
}