export default interface WpPost {
  id: number,
  title: {
    rendered: string
  },
  content: {
    rendered: string
  },
  _embedded: {
    'wp:featuredmedia': Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}