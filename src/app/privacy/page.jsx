import clsx from 'clsx'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'

export default async function PrivacyLayout() {
  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro
            title="Pólitica de privacidad"
            centered
          ></PageIntro>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <div
              className={clsx(
                '*:mx-auto *:max-w-3xl [&>:first-child]:mt-0! [&>:last-child]:mb-0!',
              )}
            >
              <section className="prose prose-lg mx-auto max-w-4xl px-4 py-12">
                <p className="mb-5">
                  <strong className="block font-display text-base font-semibold text-neutral-950">Taboire Soluciones Sostenibles SL</strong> (en adelante,
                  “la Empresa”), con sede en Lanzarote, España, se compromete a
                  proteger la privacidad de los usuarios que visitan este sitio
                  web y a tratar los datos personales conforme al Reglamento
                  (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
                </p>
                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  1. Responsable del tratamiento
                </h2>
                <p className="mb-5">
                  Taboire Soluciones Sostenibles SL
                  <br />
                  Dirección: Arrecife 35500 Lanzarote
                  <br />
                  Correo electrónico: info@taboire.com
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  2. Datos personales recogidos
                </h2>
                <ul className="list-inside list-disc mb-5">
                  <li>
                    Datos identificativos (nombre, apellidos, correo
                    electrónico, teléfono, empresa)
                  </li>
                  <li>Datos profesionales (cargo, sector, página web, CIF)</li>
                  <li>
                    Información incluida en mensajes enviados a través de
                    formularios
                  </li>
                  <li>
                    Datos de navegación (IP, navegador, sistema operativo,
                    duración de la visita, etc.)
                  </li>
                </ul>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  3. Finalidad del tratamiento
                </h2>
                <ul className="list-inside list-disc mb-5">
                  <li>Atender solicitudes de información o presupuestos</li>
                  <li>Establecer y mantener relaciones comerciales B2B</li>
                  <li>
                    Enviar comunicaciones informativas o promocionales (solo con
                    consentimiento)
                  </li>
                  <li>
                    Mejorar la experiencia de navegación en nuestro sitio web
                  </li>
                </ul>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  4. Formularios de contacto B2B
                </h2>
                <p>
                  Los formularios destinados a empresas o profesionales
                  recopilan datos necesarios para:
                </p>
                <ul className="list-inside list-disc mb-5">
                  <li>Identificar la empresa interesada</li>
                  <li>Entender el tipo de servicio requerido</li>
                  <li>
                    Facilitar la comunicación directa para una posible
                    colaboración profesional
                  </li>
                </ul>
                <p className="mb-5">
                  Estos datos se tratarán exclusivamente con fines comerciales y
                  no se utilizarán para enviar publicidad no solicitada.
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  5. Base legal del tratamiento
                </h2>
                <ul className="list-inside list-disc mb-5">
                  <li>
                    Consentimiento explícito del interesado (art. 6.1.a RGPD)
                  </li>
                  <li>
                    Ejecución de medidas precontractuales o contractuales (art.
                    6.1.b)
                  </li>
                  <li>
                    Interés legítimo del responsable en desarrollar su actividad
                    comercial (art. 6.1.f)
                  </li>
                </ul>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  6. Conservación de los datos
                </h2>
                <p className="mb-5">
                  Los datos se conservarán durante el tiempo necesario para
                  cumplir con las finalidades indicadas o mientras exista una
                  relación comercial activa. Posteriormente serán eliminados,
                  salvo obligación legal de conservación.
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  7. Destinatarios de los datos
                </h2>
                <p className="mb-5">
                  No se cederán datos a terceros salvo obligación legal o cuando
                  sea necesario para prestar servicios (por ejemplo, servicios
                  de alojamiento web, correo electrónico o CRM). No se prevén
                  transferencias internacionales de datos.
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  8. Derechos de los usuarios
                </h2>
                <p>Usted puede ejercer los siguientes derechos:</p>
                <ul className="list-inside list-disc mb-5">
                  <li>Acceso a sus datos personales</li>
                  <li>Rectificación o supresión</li>
                  <li>Limitación del tratamiento</li>
                  <li>Oposición al tratamiento</li>
                  <li>Portabilidad de sus datos</li>
                  <li>Revocación del consentimiento</li>
                </ul>
                <p className="mb-5">
                  Puede ejercer sus derechos escribiendo a:{' '}
                  <strong>info@taboire.com</strong>
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  9. Medidas de seguridad
                </h2>
                <p className="mb-5">
                  La Empresa aplica medidas técnicas y organizativas adecuadas
                  para garantizar la confidencialidad, integridad y
                  disponibilidad de los datos personales tratados.
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  10. Cookies
                </h2>
                <p className="mb-5">
                  Este sitio web puede utilizar cookies técnicas y, previa
                  aceptación, cookies analíticas o de personalización.
                </p>

                <h2 className="block font-display text-base font-semibold text-neutral-950">
                  11. Cambios en la Política de Privacidad
                </h2>
                <p>
                  La Empresa se reserva el derecho a modificar la presente
                  Política de Privacidad. Cualquier cambio será publicado y
                  estará disponible en esta misma página.
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
