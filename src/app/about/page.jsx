import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Cultura"
        title="Lideramos la transición hacia la sostenibilidad."
        invert
      >
        {/* <p>
        Somos un equipo multidisciplinar enfocado en promover la sostenibilidad a través de soluciones prácticas y de impacto significativo
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Positividad" invert>
          Lideramos la transición hacia la sostenibilidad en Lanzarote colaborando con todos aquellos que buscan promover un impacto positivo y duradero mediante soluciones tangibles.
          </GridListItem>
          <GridListItem title="Vision" invert>
          Ser el motor que impulsa la transformación sostenible en Lanzarote, colaborando con organizaciones de todos los sectores para diseñar e implementar soluciones innovadoras
          </GridListItem>
          <GridListItem title="Cambio" invert>
            uciones innovadoras que no solo optimicen sus recursos y reduzcan su impacto ambiental, sino que también generen un cambio profundo en la comunidad y el entorno.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Directivo',
    people: [
      {
        name: 'Persona X',
        role: 'Co-fundadora / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Persona X',
        role: 'Co-fundador / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Persona X',
        role: 'Colaborador',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Equipo',
    people: [
      {
        name: 'Persona X',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Persona X',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Persona X',
        role: 'Marketing Specialist',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Persona X',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Persona X',
        role: 'Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Persona X',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}


export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Conócenos" title="Nuestra fuerza es la colaboración">
        <p className='text-neutral-950'>
          En Taboire creemos en un futuro donde la sostenibilidad y la circularidad son el corazón de todas las decisiones
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Somos un equipo multidisciplinar enfocado en promover la sostenibilidad a través de soluciones prácticas y de impacto significativo. Como expertos en transformar ideas en acciones, añadimos valor de forma sistémica e integrada.
          </p>
{/*           <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p> */}
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="12" label="Equipo de empleados" />
          <StatListItem value="32" label="Clientes recibidos" />
          <StatListItem value="10" label="Empresas colaboradoras" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Desde el Blog"
        intro="Ayudamos a reducir el impacto ambiental, cumplir con normativas y certificaciones clave, y optimizar recursos para mejorar la eficiencia operativa y reducir costos."
        pages={blogArticles}
      />
      <ContactSection />
    </>
  )
}
