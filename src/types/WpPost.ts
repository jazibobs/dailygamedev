export default interface WpPost {
  id: number,
  title: {
    rendered: string
  },
  content: {
    rendered: string
  },
  _embedded: {
    'wp:featuredmedia': [
      source_url: string
    ]
  }
}