import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/logo'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath == '/') {
      return {
        titleTemplate: 'TestNix Docs'
      }
    }
    return {
      titleTemplate: '%s - TestNix Docs',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="TextNix Docs" />
      <meta property="og:description" content="TestNix is a easy to use split testing tool which autmatically detects the variants." />
    </>
  ),
  primaryHue: 24.5,
  primarySaturation: 94.7,
  logo: <Logo />,
  sidebar: {
    toggleButton: true,
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  project: {
    link: 'https://github.com/abhirupkumar',
  },
  docsRepositoryBase: 'https://github.com/abhirupkumar',
  footer: {
    text: 'TestNix Documentation',
  },
  darkMode: true
}

export default config
