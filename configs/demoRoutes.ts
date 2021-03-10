export type DemoRouteItem = {
  path: string
  name: string
  description?: string
}

const demoRoutes: DemoRouteItem[] = [
  {
    path: '/dayjstools',
    name: 'dayjstools',
    description: 'A demo with dayjs',
  },
  {
    path: '/flexbox',
    name: 'flexbox',
    description: 'A flexbox demo',
  },
  {
    path: '/jsbase64',
    name: 'jsbase64',
    description: 'Base64 decode and encode',
  },
  // {
  //   path: '/carousel',
  //   name: 'carousel',
  //   description: 'A carousel demo',
  // },
]

export default demoRoutes
