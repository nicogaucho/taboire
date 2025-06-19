import clsx from 'clsx'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export default async function RightsLayout() {
  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro title="Condiciones Legales" centered></PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div
              className={clsx(
                '*:mx-auto *:max-w-3xl [&>:first-child]:mt-0! [&>:last-child]:mb-0!',
              )}
            >
              <section className="prose prose-lg mx-auto max-w-4xl px-4 py-12">

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  1. Introducción
                </h2>
                <p>
                  Bienvenido al sitio web de{' '}
                  <strong>Taboire Soluciones Sostenibles SL</strong>. <br /> Estas
                  condiciones regulan el acceso, navegación y uso de nuestro
                  sitio. Le rogamos lea atentamente este texto cada vez que
                  acceda a este sitio web.
                </p>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  2. Identidad del titular
                </h2>
                <p>
                  Taboire Soluciones Sostenibles SL
                  <br />
                  Dirección: Arrecife 35500 Lanzarote
                  <br />
                  Correo electrónico: info@taboire.com
                </p>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  3. Objeto
                </h2>
                <p>
                  El sitio web ofrece servicios de consultoría de impacto
                  ambiental y proyectos sostenibles para la promoción del
                  territorio. El acceso al sitio implica aceptación de estas
                  condiciones, así como de nuestra{' '}
                  <a href="/privacy" className="text-blue-600 underline">
                    Política de Privacidad
                  </a>{' '}
                </p>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  4. Condiciones de uso
                </h2>
                <ul className="list-inside list-disc">
                  <li>
                    No reproducir total o parcialmente ningún contenido sin
                    permiso expreso.
                  </li>
                  <li>
                    No utilizar la web para fines ilícitos, engañosos o que
                    dañen a terceros.
                  </li>
                  <li>
                    No interferir en la operativa del sitio, instalar malware o
                    ejecutar acciones que perjudiquen su funcionalidad.
                  </li>
                </ul>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  5. Responsabilidad
                </h2>
                <p>
                  Taboire Soluciones Sostenibles SL no responde de posibles
                  daños causados por errores o falta de disponibilidad del
                  servicio, ni por contenidos de sitios externos enlazados. Nos
                  reservamos el derecho a modificar, suspender o cancelar el
                  acceso sin previo aviso si se infringen estas condiciones.
                </p>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  6. Protección de datos y cookies
                </h2>
                <p>
                  Para información sobre tratamiento de datos y uso de cookies,
                  consulte nuestra{' '}
                  <a href="/privacy" className="text-blue-600 underline">
                    Política de Privacidad
                  </a>
                  .
                </p>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  7. Legislación y jurisdicción aplicable
                </h2>
                <p>
                  Estas condiciones se rigen por la legislación española y
                  europea. Cualquier disputa será resuelta por los tribunales de
                  la provincia de Las Palmas de Gran Canaria (España).
                </p>

                <h2 className="mt-10 block font-display text-base font-semibold text-neutral-950">
                  8. Modificaciones
                </h2>
                <p>
                  Taboire Soluciones Sostenibles SL se reserva el derecho de
                  modificar estas condiciones en cualquier momento. Las
                  versiones actualizadas estarán disponibles en esta misma
                  página. Le recomendamos consultarlas con frecuencia.
                </p>
              </section>
            </div>
          </FadeIn>
        </Container>
      </article>

      <ContactSection />
    </>
  )
}
