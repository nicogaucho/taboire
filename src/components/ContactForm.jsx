'use client'

import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { contactFormAction } from '@/app/actions'
import { toast, Toaster } from 'sonner'

export const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email required' })
    .email('Invalid Email'),
  company: z.string().min(1, { message: 'Company Name required' }),
  phone: z.string().min(1, { message: 'Phone number required' }),
  message: z.string().min(5, { message: 'Message required' }),
})

export function ContactForm() {
  const formRef = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const processForm = async (data) => {
    const parsingData = schema.safeParse(data)

    if (!parsingData.success) {
      return { error: parsingData.error.errors[0].message }
    }

    const result = await contactFormAction(data)

    if (result?.error) {
      toast.error(result.error)
      formRef.current.reset()
      return
    } else {
      toast.success(
        'Informations Sent! Taboire will be right back to you asap, thank-you',
      )
      formRef.current.reset()
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form noValidate onSubmit={handleSubmit(processForm)} ref={formRef}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Pide Info o Presupuesto
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              name="email"
              id="email"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
              {...register('email')}
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
              Correo electrónico
            </label>
            {errors.email?.message && (
              <p className="text-sm text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              name="company"
              id="company"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
              {...register('company')}
            />
            <label
              htmlFor="company"
              className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
              Empresa coloboradora
            </label>
            {errors.company?.message && (
              <p className="text-sm text-red-500">{errors.company?.message}</p>
            )}
          </div>
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
              {...register('phone')}
            />
            <label
              htmlFor="phone"
              className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
              Telefono
            </label>
            {errors.phone?.message && (
              <p className="text-sm text-red-500">{errors.phone?.message}</p>
            )}
          </div>
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              name="message"
              id="message"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
              {...register('message')}
            />
            <label
              htmlFor="message"
              className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
            >
              Mensaje
            </label>
            {errors.message?.message && (
              <p className="text-sm text-red-500">{errors.message?.message}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Trabajamos juntos
        </Button>
        <Toaster richColors position="bottom-right" expand={true} />
      </form>
    </FadeIn>
  )
}
