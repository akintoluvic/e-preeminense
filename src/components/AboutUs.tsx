import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function AboutUs() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Eternal Preeminence ltd is a multi-disciplinary company under the
            law of the Federal Republic of Nigeria majorly in Solid mineral
            resources trading, Engineering Technology, Agriculture, Importing
            and Exporting. In a nutshell, our resource person are multi-skilled
            with a flexible management to handle jobs in diverse areas of our
            operations as mentioned above, we also engage in various business
            planning and developments. By joint venture arrangement, we can also
            draw a tremendous response pool of overseas inputs with technical
            affiliates back up support as when required. These ensures that our
            Jobs are completed to international standard applicable.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button>
        </div>
      </Container>
    </section>
  )
}
