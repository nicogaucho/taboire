'use client'
import Image from 'next/image'
import land from '@/images/land.jpg'
import meeting from '@/images/meeting.jpg'
import contactos from '@/images/contactos.jpg'
import build from '@/images/build.jpg'
import servicios from "@/images/servicios.jpg"
import { usePathname } from 'next/navigation'

export function HeadImage() {
  let pathname = usePathname()
  if (pathname == "/") {
    return <Image alt="" src={land} />
  } else if (pathname == "/about") {
    return <Image alt="" src={meeting} />
  } else if (pathname == "/contact") {
    return <Image alt="" src={contactos} />
  } else if (pathname == "/process") {
    return <Image alt="" src={build} />
  } else {
    return <Image alt="" src={servicios} />
  }
}

