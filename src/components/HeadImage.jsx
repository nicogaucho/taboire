'use client'
import Image from 'next/image'
import palm from '@/images/palm.jpg'
import meeting from '@/images/meeting.jpg'
import whiteboard from '@/images/whiteboard.jpg'
import servicios from "@/images/servicios.jpg";
import { usePathname } from 'next/navigation';

export function HeadImage() {
  let pathname = usePathname()
  if (pathname == "/") {
    return <Image alt="" src={palm} />
  } else if (pathname == "/about") {
    return <Image alt="" src={meeting} />
  } else if (pathname == "/contact") {
    return <Image alt="" src={whiteboard} />
  } else {
    return <Image alt="" src={servicios} />
  }
}

