'use client'
import Image from 'next/image'
import land from '@/images/land.jpg'
import one from '@/images/1.jpg'
import contactos from '@/images/contactos.jpg'
import four from '@/images/4.jpg'
import servicios from "@/images/servicios.jpg"
import { usePathname } from 'next/navigation'

export function HeadImage() {
  let pathname = usePathname()
  if (pathname == "/") {
    return <Image alt="" src={land} />
  } else if (pathname == "/about") {
    return <Image alt="" src={one} />
  } else if (pathname == "/contact") {
    return <Image alt="" src={contactos} />
  } else if (pathname == "/process") {
    return <Image alt="" src={four} />
  } else {
    return <Image alt="" src={servicios} />
  }
}

