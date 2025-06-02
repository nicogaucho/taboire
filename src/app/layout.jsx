import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Taboire',
    default: 'Taboire - Soluciones sostenibles',
  },
  metadataBase: new URL('https://taboire.es'),
  keywords: ['Taboire', 'Soluciones sostenibles', 'Lanzarote', 'sostenibilidad', 'economía circular', 'residuos', 'proyectos sostenibles'],
  authors: [{ name: 'Digital consulting Aguita SL' }],
  creator: 'Digital consulting Aguita SL',
  publisher: 'Digital consulting Aguita SL',
  openGraph: {
    title: 'Taboire - Soluciones sostenibles',
    description: 'Taboire Soluciones Sostenibles es una empresa multidisciplinar con experiencia en: Estrategia y sostenibilidad Innovación social y economía circular Territorio, biodiversidad y comunicación. Actuamos desde Lanzarote con una fuerte vocación insular, pero siempre con la mirada puesta en los grandes retos globales.',
    url: 'https://taboire.es',
    siteName: 'Taboire - Soluciones sostenibles',
    images: [{
      url: './opengraph-image.png',
      width: 600,
      height: 320
    }],
    type: 'website'
  }
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
