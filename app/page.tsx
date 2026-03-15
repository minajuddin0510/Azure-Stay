import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Zap, Camera, Sparkles, Car } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/luxury-indian-hotel-lobby-reception-area-with-warm.jpg" alt="Azure Stay Hotel & PG" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 text-balance">Azure Stay Hotel & PG</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
            Comfortable Stays | Affordable Luxury | Prime Location
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              <Link href="/book">Book a Room</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8"
            >
              <Link href="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-foreground text-balance">
            Your Home Away From Home
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Welcome to Azure Stay Hotel & PG, where comfort meets affordability in the heart of the city. Whether you're
            a tourist exploring the area, a working professional seeking long-term accommodation, or a student looking
            for a safe and comfortable place to stay, we offer the perfect blend of hospitality and convenience. Our
            commitment to cleanliness, safety, and guest satisfaction makes us the ideal choice for both short hotel
            stays and monthly PG accommodations.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground text-balance">
            Why Choose Azure Stay
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Spotless Rooms</h3>
                <p className="text-muted-foreground">
                  Daily housekeeping ensures pristine cleanliness throughout your stay
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Wifi className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">High-Speed WiFi</h3>
                <p className="text-muted-foreground">
                  Complimentary unlimited WiFi for all guests, perfect for work and entertainment
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Power Backup</h3>
                <p className="text-muted-foreground">24/7 power backup ensures uninterrupted comfort</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Camera className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">CCTV Security</h3>
                <p className="text-muted-foreground">Comprehensive surveillance for your peace of mind and safety</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Daily Housekeeping</h3>
                <p className="text-muted-foreground">Professional cleaning staff maintains the highest standards</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="pt-6 text-center">
                <Car className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Free Parking</h3>
                <p className="text-muted-foreground">Secure parking space available for all guests</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Preview */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-foreground text-balance">
            Our Accommodations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border overflow-hidden">
              <img src="/clean-single-hotel-room-with-bed-and-attached-bath.jpg" alt="Single Room" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Single Room</h3>
                <p className="text-muted-foreground mb-4">Perfect for solo travelers and professionals</p>
                <p className="text-lg font-semibold text-accent mb-4">₹1,200/night | ₹9,000/month</p>
                <Button asChild className="w-full">
                  <Link href="/rooms">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <img src="/comfortable-double-hotel-room-with-two-beds-modern.jpg" alt="Double Room" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Double Room</h3>
                <p className="text-muted-foreground mb-4">Ideal for couples or friends traveling together</p>
                <p className="text-lg font-semibold text-accent mb-4">₹2,000/night | ₹14,000/month</p>
                <Button asChild className="w-full">
                  <Link href="/rooms">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <img src="/luxury-deluxe-hotel-room-with-king-bed-and-premium.jpg" alt="Deluxe Room" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Deluxe Room</h3>
                <p className="text-muted-foreground mb-4">Premium comfort with modern amenities</p>
                <p className="text-lg font-semibold text-accent mb-4">₹2,800/night</p>
                <Button asChild className="w-full">
                  <Link href="/rooms">View Details</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-balance">Ready to Experience Comfort?</h2>
          <p className="text-lg mb-8 opacity-90 text-pretty">
            Book directly with us for the best rates and personalized service. Your perfect stay is just a click away.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
            <Link href="/book">Book Your Room Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
