import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import usecase images
import usecase1 from '../assets/usecases/usecase1.png'
import usecase2 from '../assets/usecases/usecase2.png'
import usecase3 from '../assets/usecases/usecase3.png'
import usecase4 from '../assets/usecases/usecase4.png'
import usecase5 from '../assets/usecases/usecase5.png'
import usecase6 from '../assets/usecases/usecase6.jpg'

gsap.registerPlugin(ScrollTrigger)

const usecases = [usecase1, usecase2, usecase3, usecase4, usecase5, usecase6]

const S3Usecase = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${(usecases.length + 5) * 100}%`, // extended by +3
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      })

      timeline.fromTo(
        cardsRef.current,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          stagger: {
            amount: 5,
            from: 'start',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      className="relative w-full h-[100vh] bg-black overflow-hidden"
      ref={containerRef}
    >
      <h1 className="absolute top-10 w-full text-center z-10 font-montserrat text-3xl md:text-4xl font-semibold uppercase text-[#E7B764]">
        Use Cases
      </h1>

      <div className="w-full h-full relative">
        {usecases.map((img, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`absolute top-[57%] -translate-y-1/2 w-full px-4 transition-all duration-500 ${
              i % 2 === 0 ? 'flex justify-start' : 'flex justify-end'
            } md:px-20`}
          >
            <img
              src={img}
              alt={`usecase-${i}`}
              className="max-h-[90vh] w-[80%] md:w-[50%] xl:w-[40%] object-contain rounded-lg drop-shadow-lg mx-auto md:mx-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default S3Usecase
