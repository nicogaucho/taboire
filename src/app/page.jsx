import Image from 'next/image'
import Link from 'next/link'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { Button } from '@/components/Button'
import logoTaboire from '@/images/logo/logo.png'
import sky from '@/images/sky.jpg'
import logoInnavacion from '@/images/icons/sustainability.png'
import logoAsesoramiento from '@/images/icons/consultoria.png'
import logoFormacion from '@/images/icons/formacion.png'
import logoCompromiso from '@/images/icons/compromiso.png'
import logoTransparencia from '@/images/icons/transparencia.png'
import logoInnovation from '@/images/icons/innovacion.png'
import logoCollaboration from '@/images/icons/collaboracion.png'

const clients = [
  {
    title: 'Compromiso',
    logo: logoCompromiso,
    desc: 'Estamos dedicados a promover un cambio real y positivo en el mundo.',
  },
  {
    title: 'Transparencia',
    logo: logoTransparencia,
    desc: 'Actuamos con integridad y claridad en todas nuestras interacciones.',
  },
  {
    title: 'Innovación',
    logo: logoInnovation,
    desc: 'Creemos en la creatividad y la innovación como motores de la sostenibilidad.',
  },
  {
    title: 'Colaboración',
    logo: logoCollaboration,
    desc: 'Trabajamos de la mano con nuestros clientes y socios para alcanzar objetivos comunes.',
  },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-yellow-500 sm:text-left">
            Nuestros Valores
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map((client, i) => (
              <li key={i}>
                <FadeIn>
                  <Image src={client.logo} alt="" unoptimized width={35} />
                  <p className="mt-6 font-display text-2xl font-semibold text-white">
                    {client.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-500">
                    {client.desc}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ enfoques }) {
  return (
    <>
      <SectionIntro title="Nuestro enfoque" className="mt-24 sm:mt-32 lg:mt-40">
        {/* <p>
          En Taboire, nos apasiona lo que hacemos y estamos comprometidos en
          liderar el camino hacia un futuro más sostenible y circular.
        </p> */}
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {enfoques.map((enfoque, i) => (
            <FadeIn key={i} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={'/process'}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image src={enfoque.logo} alt="" width={45} unoptimized />
                  </Link>
                </h3>
                <p className="mt-6 font-display text-3xl font-semibold text-yellow-500">
                  {enfoque.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {enfoque.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  const invert = false

  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Soluciones personalizadas y sostenibles"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          En Taboire nos especializamos en resolver los desafíos de
          sostenibilidad de nuestros clientes mediante soluciones personalizadas
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={sky}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Sostenibilidad y Circularidad">
              Proporcionamos soluciones{' '}
              <strong className="font-semibold text-neutral-950">
                personalizadas
              </strong>{' '}
              que promueven prácticas sostenibles, fortaleciendo la reputación
              corporativa y facilitando el camino hacia{' '}
              <strong className="font-semibold text-neutral-950">futuro</strong>
              , aún más sostenible y rentable
            </ListItem>
            <ListItem title="Asesoría Empresarial en Sostenibilidad">
              Acompañamos a empresas en su camino hacia ,{' '}
              <strong className="font-semibold text-neutral-950">
                modelos más sostenibles
              </strong>{' '}
              ,eficientes y alineados con la legislación y los valores del mercado actual. Desde el diagnóstico inicial hasta la implementación de estrategias, ayudamos a integrar la sostenibilidad en todas las áreas del negocio: gobernanza, operaciones, cadena de valor, comunicación e impacto ambiental y social.
            </ListItem>
            <ListItem title="Informes y Memorias de Sostenibilidad">
              Elaboramos{' '}
              <strong className="font-semibold text-neutral-950">
                informes y memorias de sostenibilidad
              </strong>{' '}
              que reflejan de forma rigurosa, transparente y alineada con los principales estándares internacionales el compromiso y desempeño ambiental, social y económico de tu organización.
            </ListItem>
            <ListItem title="Huella de Carbono y Descarbonización">
              Cálculo de la huella de carbono organizacional o por evento:
              Medimos las emisiones de gases de efecto invernadero de forma
              precisa y personalizada.
              <div className="lg:flex lg:items-center lg:justify-end">
                <Button href="/process" className="mt-8" invert={invert}>
                  Nuestros Servicios
                </Button>
              </div>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Taboire Soluciones Sostenibles es una empresa multidisciplinar con experiencia en: Estrategia y sostenibilidad Innovación social y economía circular Territorio, biodiversidad y comunicación. Actuamos desde Lanzarote con una fuerte vocación insular, pero siempre con la mirada puesta en los grandes retos globales.',
}

export default async function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)
  const enfoques = [
    {
      title: 'Innovación Sostenible',
      description:
        'Diseñamos y gestionamos proyectos que integran las mejores prácticas de sostenibilidad y circularidad.',
      logo: logoInnavacion,
    },
    {
      title: 'Asesoramiento estratégico',
      description:
        'Ofrecemos soluciones personalizadas que ayudan a las empresas a reducir su huella ambiental y a maximizar su eficiencia.',
      logo: logoAsesoramiento,
    },
    {
      title: 'Formación especializada',
      description:
        'Capacitamos a profesionales y organizaciones para que adopten prácticas sostenibles y responsables en su día a día.',
      logo: logoFormacion,
    },
  ]
  const invert = false

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium tracking-tight [text-wrap:balance] sm:text-7xl">
            Transformamos ideas en acciones para un mundo mejor
          </h1>
          <p className="mt-6 text-xl text-gray-800">
            En Taboire creemos en un futuro donde la sostenibilidad es el
            corazón de todas las decisiones.
          </p>
          <Button href="/process" className="mt-6" invert={invert}>
            Descubrir más
          </Button>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies enfoques={enfoques} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Taboire', logo: logoTaboire }}
      >
        En Taboire, nos apasiona lo que hacemos y estamos comprometidos en
        liderar el camino hacia un futuro regenerativo
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
