export function RegisteredSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Registered with</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <div className="flex items-center justify-center">
            <img
              src="/assets/img-1.webp"
              alt="Registration 1"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/img-2.webp"
              alt="Registration 2"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/img-3.webp"
              alt="Registration 3"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/img-4.webp"
              alt="Registration 4"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/img-5.webp"
              alt="Registration 5"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/img-6.webp"
              alt="Registration 6"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
