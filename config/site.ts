import { SiteConfig } from '@/types/siteConfig'
import { BsGithub, BsTwitterX } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const baseSiteConfig = {
  name: 'Byte Text Image Generator',
  description: 'Text Image Generator',
  url: 'https://text-image.tool.vin/',
  metadataBase: '/',
  keywords: [],
  authors: [
    {
      name: 'Junexus',
      url: 'https://sphrag.com',
      twitter: 'https://x.com/Junexus_indie',
    },
  ],
  creator: '@unexus_indie',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'light', // next-theme option: system | dark | light
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo.png',
    apple: '/logo.png', // apple-touch-icon.png
  },
  headerLinks: [
    {
      name: 'github',
      href: 'https://github.com/shadowDragons/text-image-generator',
      icon: BsGithub,
    },
    {
      name: 'twitter',
      href: 'https://x.com/Junexus_indie',
      icon: BsTwitterX,
    },
  ],
  footerLinks: [
    { name: 'email', href: 'mailto:shadowdragon4399@gmail.com', icon: MdEmail },
    { name: 'twitter', href: 'https://x.com/Junexus_indie', icon: BsTwitterX },
    { name: 'github', href: 'https://github.com/shadowDragons', icon: BsGithub },
  ],
  footerProducts: [],
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'en-US',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}og.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    creator: baseSiteConfig.creator,
  },
}
