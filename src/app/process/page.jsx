import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imageSustainable from '@/images/sustainable.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section
      title="Soluciones en Sostenibilidad y Circularidad"
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Proporcionamos soluciones{' '}
          <strong className="font-semibold text-neutral-950">
            personalizadas
          </strong>{' '}
          and que promueven prácticas sostenibles.
        </p>
        <p>
          Trabajamos estrechamente con nuestros clientes para diseñar
          iniciativas innovadoras que cumplen con estándares de sostenibilidad y
          normativas, mientras optimizamos recursos y mejoramos la{' '}
          <strong className="font-semibold text-neutral-950">
            eficiencia operativa
          </strong>{' '}
          Nuestro enfoque garantiza impactos medibles y duraderos
        </p>
        <p>
          fortaleciendo la reputación corporativa y facilitando el camino hacia{' '}
          <strong className="font-semibold text-neutral-950">futuro</strong>,
          aun más sostenible y rentable
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Parte del proceso
      </h3>
      <TagList className="mt-4">
        <TagListItem>Personalización</TagListItem>
        <TagListItem>Innovación</TagListItem>
        <TagListItem>Garantía</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section
      title="Asesoría Empresarial en Sostenibilidad"
      image={{ src: imageSustainable, shape: 0 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Ofrecemos asesoría especializada en sostenibilidad empresarial para
          ayudar a las organizaciones a integrar prácticas responsables en sus
          operaciones y estrategias.
        </p>
        <p>
          Nuestros servicios abarcan desde el diagnóstico inicial hasta la
          elaboración y seguimiento de planes de sostenibilidad, desarrollo de
          estrategias de reducción de impacto, obtención de financiación,
          cumplimiento normativo y obtención de certificaciones sostenibles.
        </p>
        <p>
          Estamos en constante colaboración con nuestros clientes para optimizar
          sus procesos, mejorar la eficiencia operativa y gestionar de manera
          efectiva sus recursos, asegurando un camino claro hacia la
          sostenibilidad y el logro de objetivos empresariales y ambientales.
        </p>
      </div>

      {/*       <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote> */}
    </Section>
  )
}

function Deliver() {
  return (
    <Section
      title="Ideación y Elaboración de Proyectos"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Ofrecemos un servicio integral de Ideación y Elaboración de Proyectos,
          diseñados para{' '}
          <strong className="font-semibold text-neutral-950">ayudar</strong>
          .a las empresas a desarrollar iniciativas sostenibles desde cero.
        </p>
        <p>
          We ensure that the main pages of the site are{' '}
          <strong className="font-semibold text-neutral-950">
            fully functional
          </strong>{' '}
          at launch — the auxiliary pages will, of course, be lorem ipusm shells
          which get updated as part of our exorbitant{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          retainer.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Parte del proceso a incluir
      </h3>
      <List className="mt-8">
        <ListItem title="Generación de Ideas">
          Nuestro enfoque incluye todas las etapas del ciclo de vida del
          proyecto, asegurando que cada idea se convierta en una realidad
          práctica y efectiva.
        </ListItem>
        <ListItem title="Evaluación y Selección">
          Nuestro enfoque incluye todas las etapas del ciclo de vida del
          proyecto, asegurando que cada idea se convierta en una realidad
          práctica y efectiva.
        </ListItem>
        <ListItem title="Diseño del Proyecto">
          Nuestro enfoque incluye todas las etapas del ciclo de vida del
          proyecto, asegurando que cada idea se convierta en una realidad
          práctica y efectiva.
        </ListItem>
        <ListItem title=" Implementación y Seguimiento">
          Nuestro enfoque incluye todas las etapas del ciclo de vida del
          proyecto, asegurando que cada idea se convierta en una realidad
          práctica y efectiva.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nuestros Valores"
        title="Resolver los desafíos de sostenibilidad"
      >
        <p>
          Ser el motor que impulsa la transformación sostenible en Lanzarote,
          colaborando con organizaciones de todos los sectores para diseñar e
          implementar soluciones innovadoras que no solo optimicen sus recursos
          y reduzcan su impacto ambiental, sino que también generen un cambio
          profundo en la comunidad y el entorno.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Compromiso">
            Ser el motor que impulsa la transformación sostenible en Lanzarote,
            colaborando con organizaciones de todos los sectores para diseñar e
            implementar soluciones innovadoras que no solo optimicen sus
            recursos y reduzcan su impacto ambiental, sino que también generen
            un cambio profundo en la comunidad y el entorno.
          </GridListItem>
          <GridListItem title="Transparencia">
            Ser el motor que impulsa la transformación sostenible en Lanzarote,
            colaborando con organizaciones de todos los sectores para diseñar e
            implementar soluciones innovadoras que no solo optimicen sus
            recursos y reduzcan su impacto ambiental, sino que también generen
            un cambio profundo en la comunidad y el entorno.
          </GridListItem>
          <GridListItem title="Innovación">
            Ser el motor que impulsa la transformación sostenible en Lanzarote,
            colaborando con organizaciones de todos los sectores para diseñar e
            implementar soluciones innovadoras que no solo optimicen sus
            recursos y reduzcan su impacto ambiental, sino que también generen
            un cambio profundo en la comunidad y el entorno.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Que ofrecemos" title="Nuestros servicios">
        <p>
        En Taboire, nos especializamos en resolver los desafíos de
        sostenibilidad de nuestros clientes mediante soluciones personalizadas y sostenibles.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
