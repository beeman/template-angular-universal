import { UiLayout } from '@kikstart/ui'

export const config: { layout: UiLayout } = {
  layout: {
    brand: {
      logo: 'assets/logo.svg',
      name: 'kikstart',
      product: 'universal',
      separator: '|',
      description: 'Angular Universal with Kikstart UI',
    },
    header: {
      style: 'dark',
      links: [
        { path: '/home', label: 'Home', icon: 'mr-2 fa fa-fw fa-home' },
      ],
    },
    footer: {
      html: `<small class="text-muted">Copyright <a href="">kikstart.dev</a> 2019-${new Date().getFullYear()}.</small>`,
      links: [
        { url: 'https://github.com/beeman', label: '', icon: 'fa fa-fw fa-1x fa-github' },
        { url: 'https://twitter.com/beeman_nl', label: '', icon: 'fa fa-fw fa-1x fa-twitter' },
      ],
    },
  },
}
