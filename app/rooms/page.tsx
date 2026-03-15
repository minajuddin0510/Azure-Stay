import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Wifi, Tv, Wind, Droplet, Bed, Users } from "lucide-react"

export default function RoomsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">Rooms & Pricing</h1>
          <p className="text-lg text-primary-foreground/90 mt-4">Choose the perfect accommodation for your needs</p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Single Room */}
          <Card className="overflow-hidden border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="grid grid-cols-2 gap-2 p-2">
                <img
                  src="/single-hotel-room-with-bed-minimalist-design.jpg"
                  alt="Single Room View 1"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/hotel-room-attached-bathroom-with-modern-fixtures.jpg"
                  alt="Single Room View 2"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/cozy-single-bedroom-with-study-table-and-wardrobe.jpg"
                  alt="Single Room View 3"
                  className="w-full h-48 object-cover rounded col-span-2"
                />
              </div>

              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-serif mb-2 text-card-foreground">Single Room</h2>
                    <p className="text-muted-foreground">Perfect for solo travelers and professionals</p>
                  </div>
                  <Bed className="w-8 h-8 text-accent" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  Our single rooms are designed for comfort and functionality. Ideal for solo guests, these rooms
                  feature a comfortable single bed, attached bathroom with hot water, study table, wardrobe, and all
                  essential amenities to make your stay pleasant.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-card-foreground">Room Features:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplet className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Attached Bathroom</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Comfortable Bed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">1 Guest</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-card-foreground">Hotel Stay (Per Night)</span>
                    <span className="text-2xl font-bold text-accent">₹1,200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-card-foreground">PG Stay (Per Month)</span>
                    <span className="text-2xl font-bold text-accent">₹9,000</span>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/book">Book This Room</Link>
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Double Room */}
          <Card className="overflow-hidden border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="grid grid-cols-2 gap-2 p-2">
                <img
                  src="/double-room-with-two-beds-hotel-interior.jpg"
                  alt="Double Room View 1"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/spacious-hotel-room-with-seating-area.jpg"
                  alt="Double Room View 2"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/modern-hotel-room-with-air-conditioning.jpg"
                  alt="Double Room View 3"
                  className="w-full h-48 object-cover rounded col-span-2"
                />
              </div>

              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-serif mb-2 text-card-foreground">Double Room</h2>
                    <p className="text-muted-foreground">Suitable for couples or friends</p>
                  </div>
                  <Users className="w-8 h-8 text-accent" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  Our double rooms offer more space and comfort, perfect for couples or friends traveling together.
                  Choose between AC and Non-AC options based on your preference. Each room comes with two comfortable
                  beds, ample storage, and a modern attached bathroom.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-card-foreground">Room Features:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">AC/Non-AC Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Two Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">2 Guests</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-card-foreground">Hotel Stay (Per Night)</span>
                    <span className="text-2xl font-bold text-accent">₹2,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-card-foreground">PG Stay (Per Month)</span>
                    <span className="text-2xl font-bold text-accent">₹14,000</span>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/book">Book This Room</Link>
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Deluxe Room */}
          <Card className="overflow-hidden border-border">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="grid grid-cols-2 gap-2 p-2">
                <img
                  src="/luxury-deluxe-hotel-room-with-king-bed.jpg"
                  alt="Deluxe Room View 1"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/premium-hotel-room-with-tv-and-modern-furniture.jpg"
                  alt="Deluxe Room View 2"
                  className="w-full h-48 object-cover rounded"
                />
                <img
                  src="/elegant-hotel-suite-with-sitting-area.jpg"
                  alt="Deluxe Room View 3"
                  className="w-full h-48 object-cover rounded col-span-2"
                />
              </div>

              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-serif mb-2 text-card-foreground">Deluxe Room</h2>
                    <p className="text-muted-foreground">Premium comfort with modern amenities</p>
                  </div>
                  <Tv className="w-8 h-8 text-accent" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">
                  Experience luxury at its finest in our deluxe rooms. Featuring premium interiors, a king-size bed, air
                  conditioning, flat-screen TV, and a spacious sitting area, these rooms are perfect for guests who want
                  to indulge in extra comfort during their stay.
                </p>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-card-foreground">Room Features:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Free WiFi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Air Conditioned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tv className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Flat-screen TV</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-accent" />
                      <span className="text-sm text-muted-foreground">King Bed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-card-foreground">Hotel Stay (Per Night)</span>
                    <span className="text-2xl font-bold text-accent">₹2,800</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">* Monthly PG rates available on request</p>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/book">Book This Room</Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
