export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">About Azure Stay</h1>
          <p className="text-lg text-primary-foreground/90 mt-4">Your trusted partner in comfortable accommodations</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-6 text-foreground">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-pretty">
              Azure Stay Hotel & PG was established with a simple yet powerful vision: to provide comfortable, safe, and
              affordable accommodation for everyone who needs a home away from home. Located in a prime area of the
              city, we have been serving guests with dedication and hospitality for years, building a reputation for
              excellence and reliability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              What started as a small guesthouse has grown into a full-service hotel and paying guest accommodation,
              catering to diverse needs – from tourists exploring the city to working professionals seeking long-term
              stays, and students looking for a secure environment to focus on their studies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img
              src="/modern-indian-hotel-exterior-building-facade.jpg"
              alt="Azure Stay Hotel Exterior"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/hotel-room-interior-with-comfortable-bed-and-furni.jpg"
              alt="Azure Stay Room Interior"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-6 text-foreground">Why Guests Choose Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Cleanliness is Our Priority</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  We maintain the highest standards of cleanliness with daily housekeeping, sanitized rooms, and
                  spotless common areas. Your health and hygiene are non-negotiable for us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Safety & Security</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  With 24/7 CCTV surveillance, secure access control, and attentive staff, we ensure that you feel safe
                  and protected throughout your stay. We take security seriously so you can rest easy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Flexible Accommodation Options</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Whether you need a room for a night, a week, or several months, we offer flexible booking options. Our
                  hotel rooms are perfect for short stays, while our PG accommodations provide a comfortable long-term
                  living solution with monthly rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Professional & Friendly Service</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Our team is dedicated to making your stay pleasant and hassle-free. From the moment you check in to
                  the day you leave, we're here to assist you with any needs or queries. We believe in treating every
                  guest like family.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Prime Location</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Conveniently located near major transportation hubs, shopping centers, educational institutions, and
                  business districts, Azure Stay offers easy access to everything you need while providing a peaceful
                  retreat from the city's hustle and bustle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-4 text-foreground text-center">Our Commitment</h2>
            <p className="text-lg text-muted-foreground text-center leading-relaxed text-pretty">
              At Azure Stay, we're not just providing rooms – we're creating experiences. We understand that whether
              you're here for business, education, or leisure, you deserve a comfortable space that feels like home.
              That's why we continuously invest in our facilities, train our staff, and listen to our guests to ensure
              we're always delivering the best possible experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
