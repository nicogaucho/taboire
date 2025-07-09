import Image from 'next/image'
import Link from 'next/link'
import { loadArticles } from '@/lib/mdx'
import { IconBrandLinkedinFilled, IconBrandWhatsappFilled } from '@tabler/icons-react'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
// import { StatList, StatListItem } from '@/components/StatList'
import imagePaula from '@/images/team/paula.PNG'
import imageCarlos from '@/images/team/Carlos.jpg'
import LogoCanarias from '@/images/clients/canarias/logo-gobierno-full.svg'
import LogoEffiwaste from '@/images/clients/effiwaste/logo-effiwaste-full.svg'
import LogoArrecifeNatura from '@/images/clients/logo-natura/logo-arrecife-full.svg'
import LogoJardinBotanico from '@/images/clients/jardin-botanico/logo-botanico-full.svg'

const clients = [
  ['Logo Effiwaste', LogoEffiwaste],
  ['Logo Arrecife Natura', LogoArrecifeNatura],
  ['Logo Jardin Botanico', LogoJardinBotanico],
];

export function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Colaboran con nosostros
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-3"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image src={logo} alt={client} unoptimizedn style={{ width: '300px', height: '130px' }} />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}


function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Cultura"
        title="Creemos en una sostenibilidad que se aplica, que se mide y que transforma el entorno."
        invert
      >
        {/* <p>
        Somos un equipo multidisciplinar enfocado en promover la sostenibilidad a través de soluciones prácticas y de impacto significativo
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Misión" invert>
            En Taboire Soluciones Sostenibles acompañamos a administraciones, empresas y entidades sociales en el diseño, desarrollo y ejecución de proyectos sostenibles, con una visión práctica, ambiciosa y medible.
          </GridListItem>
          <GridListItem title="Enfoque" invert>
            Nos especializamos en iniciativas que:
            Regeneran ecosistemas y valorizan los recursos locales, 
            Mejoran la calidad de vida de las comunidades, 
            Generan oportunidades económicas sostenibles, 
            Se alinean con los ODS, la normativa vigente y los principios de la economía circular
          </GridListItem>
          <GridListItem title="Técnica y visión" invert>
            Somos un equipo multidisciplinar con experiencia en:  Estrategia y sostenibilidad
            Innovación social y economía circular
            Territorio, biodiversidad y comunicación
            Actuamos desde Lanzarote con una fuerte vocación insular, pero siempre con la mirada puesta en los grandes retos globales.
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
        name: 'Paula Gomes Souza',
        role: 'Co-fundador',
        description: 'Oceanógrafa de formación, postgraduada en Gestión de Proyectos y Máster en Economía Circular y Desarrollo Sostenible. Su trayectoria internacional y su compromiso con la sostenibilidad la llevaron a establecerse en Lanzarote en busca de una vida más equilibrada, conectada con el territorio.',
        subDescription: 'Apasionada por las acciones de triple impacto, acompaña a administraciones, empresas y organizaciones para alcanzar los más altos estándares de sostenibilidad, asegurando que cada proyecto genere un impacto positivo y duradero.',
        image: { src: imagePaula },
        linkedin: 'https://www.linkedin.com/in/paulagmessostenibilidad/',
        phone: '+34 646 37 33 55'
      },
      {
        name: 'Carlos Armas Rodríguez',
        role: 'Co-fundador',
        description: 'Carlos es, ante todo, conejero. Su vínculo con Lanzarote va más allá de lo profesional: es parte de su identidad. Licenciado en Veterinaria y empresario local, lleva años impulsando proyectos que apuestan por el desarrollo sostenible insular.',
        subDescription: 'Ornitólogo, defensor de la biodiversidad endémica y enamorado de las tradiciones, Carlos aporta a Taboire una mirada práctica, territorial y profundamente comprometida con el equilibrio entre naturaleza, cultura y economía.',
        image: { src: imageCarlos },
        linkedin: 'https://www.linkedin.com/in/paulagmessostenibilidad/',
        phone: '+34 659 86 99 43'
      },
    ],
  },
  // {
  //   title: 'Equipo',
  //   people: [
  //     {
  //       name: 'Persona X',
  //       role: 'Senior Developer',
  //       image: { src: imageChelseaHagon },
  //     },
  //     {
  //       name: 'Persona X',
  //       role: 'Senior Designer',
  //       image: { src: imageEmmaDorsey },
  //     },
  //     {
  //       name: 'Persona X',
  //       role: 'Marketing Specialist',
  //       image: { src: imageLeonardKrasner },
  //     },
  //     {
  //       name: 'Persona X',
  //       role: 'Junior Copywriter',
  //       image: { src: imageBlakeReid },
  //     },
  //     {
  //       name: 'Persona X',
  //       role: 'Human Resources',
  //       image: { src: imageKathrynMurphy },
  //     },
  //     {
  //       name: 'Persona X',
  //       role: 'Content Specialist',
  //       image: { src: imageWhitneyFrancis },
  //     },
  //   ],
  // },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-1 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="flex gap-x-8 gap-y-16">
                          <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                            <Image
                              alt=""
                              {...person.image}
                              className="h-96 w-96 object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
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
                          <article className="w-full md:w-1/2">
                            <Border
                              position="left"
                              className="relative flex flex-col items-start pl-8"
                            >
                              <h3 className="mt-6 text-base font-semibold text-neutral-950">
                                {person.name} - {person.role}
                              </h3>
                              <p className="mt-2.5 text-base text-neutral-600">{person.description}</p>
                              <p className="mt-2.5 text-base text-neutral-600">{person.subDescription}</p>
                              <div className="flex gap-x-4">
                                <Link
                                  href={person.linkedin}
                                  className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                                  aria-label={`Info`}
                                >
                                  <IconBrandLinkedinFilled /> Linkedin
                                  
                                </Link>
                                <Link
                                  href={'#'}
                                  className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
                                  aria-label={`Info`}
                                >
                                  <IconBrandWhatsappFilled /> {person.phone}
                                </Link>
                              </div>
                            </Border>
                          </article>
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
  title: 'Sobre nostros',
  description:
    'En Taboire Soluciones Sostenibles acompañamos a administraciones, empresas y entidades sociales en el diseño, desarrollo y ejecución de proyectos sostenibles, con una visión práctica, ambiciosa y medible.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro
        eyebrow="Sobre Nosotros"
        title="Nuestra fuerza es la colaboración"
      >
        <p className="text-neutral-950">
          Impulsamos proyectos con impacto real. Desde Lanzarote, para
          transformar el mundo.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Taboire Soluciones Sostenibles nace con una misión clara: acompañar
            a administraciones, empresas y entidades sociales en el diseño,
            desarrollo y ejecución de proyectos que integren la sostenibilidad
            de forma real, ambiciosa y práctica.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="12" label="Equipo de empleados" />
          <StatListItem value="32" label="Clientes recibidos" />
          <StatListItem value="5" label="Empresas colaboradoras" />
        </StatList>
      </Container> */}
      <Team />

      <Culture />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Desde el Blog"
        intro="Ayudamos a reducir el impacto ambiental, cumplir con normativas y certificaciones clave, y optimizar recursos para mejorar la eficiencia operativa y reducir costos."
        pages={blogArticles}
      /> */}

      <Clients />

      <ContactSection />
    </>
  )
}
