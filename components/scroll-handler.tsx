"use client"

import { useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ScrollLogic() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTarget = searchParams.get("scroll")

    if (scrollTarget) {
      const element = document.getElementById(scrollTarget)

      if (element) {
        const yOffset = -160
        const y =
          element.getBoundingClientRect().top +
          window.scrollY +
          yOffset

        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }, [searchParams])

  return null
}

export function ScrollHandler() {
  return (
    <Suspense fallback={null}>
      <ScrollLogic />
    </Suspense>
  )
}