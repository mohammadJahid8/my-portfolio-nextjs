export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'overview',
      title: 'Small Overview',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'live_link',
      title: 'Live Link',
      type: 'url',
    },
    {
      name: 'client_code',
      title: 'Client Code',
      type: 'url',
    },
    {
      name: 'server_code',
      title: 'Server Code',
      type: 'url',
    },
  ],
}
