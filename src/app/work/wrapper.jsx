import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { loadCaseStudies } from '@/lib/mdx'

export default async function CaseStudyLayout({ caseStudy, children }) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Caso práctico" title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 border-t border-neutral-200 bg-white/50 sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3">
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Cliente</dt>
                      <dd>{caseStudy.client}</dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Año</dt>
                      <dd>
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-t-0 sm:border-l">
                      <dt className="font-semibold">Servicio</dt>
                      <dd>{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="mx-auto -my-px max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Más casos prácticos"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  )
}
