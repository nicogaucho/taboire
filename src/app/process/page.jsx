import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageClients from '@/images/clients.jpg'
import imageConsultoria from '@/images/consultoria.jpg'
import imageTerritorio from '@/images/territorio.jpg'

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

function ConsultoriaEstrategica() {
  return (
    <Section
      title="Consultoría estratégica en sostenibilidad"
      image={{ src: imageConsultoria }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Proporcionamos soluciones{' '}
          <strong className="font-semibold text-neutral-950">
            personalizadas
          </strong>{' '} que promueven prácticas sostenibles, fortaleciendo la reputación corporativa y facilitando el camino hacia{' '}
          <strong className="font-semibold text-neutral-950">futuro</strong>,
          aun más sostenible y rentable
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Parte del proceso
      </h3>
      <List className="mt-8">
        <ListItem title="Elaboración de planes y memorias de sostenibilidad">
          Desarrollo de documentos que reflejan el compromiso ambiental, social y ético de la organización.
        </ListItem>
        <ListItem title="Integración de los ODS, estándares internacionales y marcos normativos">
          Mapeo de objetivos empresariales con los ODS, alineación con ISO 26000, Pacto Mundial y normativa europea vigente.
        </ListItem>
        <ListItem title="Aplicación de economía circular en organizaciones">
          Diagnóstico de flujos de materiales, rediseño de procesos para la reutilización y reducción de residuos.
        </ListItem>
        <ListItem title="Diseño de planes de transición ecológica">
          Evaluación de impacto ambiental actual y definición de estrategias para descarbonización, eficiencia energética y energías renovables.
        </ListItem>
      </List>
    </Section>
  )
}

function Eventos() {
  return (
    <Section
      title="Eventos sostenibles"
      image={{ src: imageClients, shape: 0 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Ofrecemos consultoría especializada para organizar <strong className="font-semibold text-neutral-950">
            eventos sostenibles
          </strong>{' '}, reduciendo el impacto ambiental y mejorando la imagen corporativa ante el público y las instituciones.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Parte del proceso
      </h3>
      <List className="mt-8">
        <ListItem title="Planes y memorias de sostenibilidad para eventos culturales o institucionales">
          Redactamos informes de sostenibilidad que comunican el compromiso ambiental y social del evento.
        </ListItem>
        <ListItem title="Ecoauditorías ambientales durante la producción">
          Realizamos auditorías in situ para medir y minimizar el impacto ambiental del evento en tiempo real.
        </ListItem>
        <ListItem title="Planes ambientales para festivales y muestras">
          Diseñamos estrategias sostenibles para festivales, ferias y muestras, alineadas con buenas prácticas ecológicas
        </ListItem>
        <ListItem title="Asesoría para procesos de subvenciones vinculadas">
          Ayudamos a identificar y gestionar subvenciones públicas para eventos responsables con el medio ambiente.
        </ListItem>
      </List>
    </Section>
  )
}

function ProyectosTerritoriales() {
  return (
    <Section
      title="Proyectos territoriales e innovación social"
      image={{ src: imageTerritorio, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Desarrollamos proyectos de <strong className="font-semibold text-neutral-950">
            sostenibilidad territorial
          </strong>{' '} e innovación social que promueven el desarrollo local, la inclusión y el cuidado del entorno.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Parte del proceso a incluir
      </h3>
      <List className="mt-8">
        <ListItem title="Estrategias de economía local y regeneración insular">
          Creamos planes de revitalización económica sostenible en contextos insulares y rurales
        </ListItem>
        <ListItem title="Programas de educación ambiental y participación comunitaria">
           Diseñamos actividades educativas y participativas para fomentar la conciencia ecológica en la comunidad
        </ListItem>
        <ListItem title="Proyectos de carácter social en contextos vulnerables">
          Impulsamos iniciativas sostenibles con impacto positivo en grupos sociales en riesgo de exclusión
        </ListItem>
        <ListItem title="Aplicación de principios de economía circular a escala local">
          Implementamos soluciones circulares que optimizan recursos y reducen residuos en entornos locales
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
        eyebrow="Servicios adicionales"
        title="Sostenibilidad climática, financiación verde y formación ambiental"
      >
        <p>
          Amplía tu impacto con servicios complementarios: medición de huella de carbono, acceso a subvenciones verdes y formación en sostenibilidad.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Medición de la Huella de Carbono y Planes de Descarbonización">
          <ul className='list-disc'>
            <li>
              Cálculo de la huella de carbono organizacional o por evento: Medimos las emisiones de gases de efecto invernadero de forma precisa y personalizada.
            </li>
            <li>Análisis de emisiones directas e indirectas (Alcances 1, 2 y 3): Evaluamos todas las fuentes de emisión según los estándares internacionales.</li>
            <li>Diseño de planes realistas y progresivos de descarbonización: Elaboramos estrategias de reducción de emisiones adaptadas a tus recursos y objetivos.</li>
            <li>Comunicación de resultados, medidas correctoras y seguimiento: Ofrecemos informes claros, planes de mejora y sistemas de seguimiento continuo.</li>
          </ul>
          </GridListItem>
          <GridListItem title="Asesoría para subvenciones">
            <ul className="list-disc">
              <li>Te asesoramos para acceder a ayudas y subvenciones públicas en sostenibilidad, mejorando la viabilidad y el impacto de tus proyectos.</li>
              <li>Búsqueda activa de convocatorias adaptadas a tu proyecto: Identificamos subvenciones compatibles con tus objetivos ambientales y sociales.</li>
              <li>Revisión de criterios de elegibilidad y viabilidad: Verificamos requisitos clave para asegurar una postulación exitosa.</li>
              <li>Redacción y acompañamiento técnico para presentar propuestas sólidas: Elaboramos propuestas bien fundamentadas para maximizar las posibilidades de financiación.</li>
            </ul>
          </GridListItem>
          <GridListItem title="Formación y divulgación">
            <ul className="list-disc">
              <li>Ofrecemos formación en sostenibilidad y campañas de sensibilización con impacto real, combinando rigor técnico y creatividad comunicativa.</li>
              <li>Talleres prácticos, jornadas divulgativas y píldoras formativas: Facilitamos actividades educativas adaptadas a distintos públicos y sectores.</li>
              <li>Contenidos editoriales, visuales y digitales con rigor y creatividad: Creamos materiales de comunicación sostenibles y atractivos para entornos digitales y presenciales.</li>
              <li>Campañas de sensibilización con impacto real: Diseñamos campañas efectivas que generan conciencia ambiental y movilización social.</li>
            </ul>
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
      <PageIntro eyebrow="Servicios" title="Taboire Soluciones Sostenibles">
        <p>
        Diseñamos soluciones reales para impulsar la sostenibilidad desde distintos ángulos. En Taboire trabajamos a medida, adaptándonos al contexto, escala y necesidades de cada proyecto. Integramos lo técnico, lo normativo y lo creativo para que las ideas no se queden en el papel
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <ConsultoriaEstrategica />
        <Eventos />
        <ProyectosTerritoriales />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
