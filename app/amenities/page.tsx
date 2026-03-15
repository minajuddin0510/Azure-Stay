import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Zap, Camera, Sparkles, Car, Droplet, Building, Shirt } from "lucide-react"

export default function AmenitiesPage() {
  const amenities = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed unlimited WiFi available throughout the property for all guests",
    },
    {
      icon: Zap,
      title: "Power Backup",
      description: "24/7 power backup ensures uninterrupted electricity during your entire stay",
    },
    {
      icon: Camera,
      title: "CCTV Security",
      description: "Comprehensive surveillance system covering all common areas for your safety",
    },
    {
      icon: Sparkles,
      title: "Daily Housekeeping",
      description: "Professional cleaning staff maintains cleanliness and hygiene every day",
    },
    {
      icon: Car,
      title: "Parking Facility",
      description: "Secure parking space available for all guests with vehicles",
    },
    {
      icon: Shirt,
      title: "Laundry Service",
      description: "Affordable laundry and dry cleaning services available on request",
    },
    {
      icon: Building,
      title: "Lift Facility",
      description: "Elevator access to all floors for your convenience and comfort",
    },
    {
      icon: Droplet,
      title: "RO Drinking Water",
      description: "Purified drinking water available 24/7 throughout the property",
    },
  ]

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">Our Amenities</h1>
          <p className="text-lg text-primary-foreground/90 mt-4">Everything you need for a comfortable stay</p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            At Azure Stay Hotel & PG, we believe in providing comprehensive facilities that make your stay comfortable,
            safe, and hassle-free. From essential amenities to thoughtful extras, we've got everything covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">{amenity.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-secondary/30 p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-6 text-center text-foreground">Additional Services</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Room Service</h3>
                <p className="text-sm leading-relaxed">
                  Order food and beverages directly to your room for your convenience
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">24/7 Reception</h3>
                <p className="text-sm leading-relaxed">
                  Our front desk is always available to assist you with any queries or needs
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Maintenance Support</h3>
                <p className="text-sm leading-relaxed">
                  Prompt maintenance and technical support available whenever you need it
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Visitor Management</h3>
                <p className="text-sm leading-relaxed">
                  Secure visitor registration and access control system for your safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
