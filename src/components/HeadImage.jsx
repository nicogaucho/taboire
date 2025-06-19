'use client'
import Image from 'next/image'
import land from '@/images/land.jpg'
import one from '@/images/1.jpg'
import road from '@/images/road.jpg'
import four from '@/images/4.jpg'
import sea from "@/images/sea.jpg"
import rest from "@/images/rest.jpg"
import { usePathname } from 'next/navigation'

export function HeadImage() {
  let pathname = usePathname()
  if (pathname == "/") {
    return <Image alt="" src={land} />
  } else if (pathname == "/about") {
    return <Image alt="" src={road} />
  } else if (pathname == "/contact") {
    return <Image alt="" src={sea} />
  } else if (pathname == "/work") {
    return <Image alt="" src={one} />
  } else if (pathname == "/process") {
    return <Image alt="" src={four} />
  } else {
    return <Image alt="" src={rest} />
  }
}

