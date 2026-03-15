import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">Contact Us</h1>
          <p className="text-lg text-primary-foreground/90 mt-4">We're here to help with any questions or concerns</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-serif mb-6 text-foreground">Get In Touch</h2>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-card-foreground">Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Azure Stay Hotel & PG
                        <br />
                        Plot No. 45, Sector 12
                        <br />
                        Near Metro Station
                        <br />
                        Mumbai, Maharashtra 400001
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-card-foreground">Phone</h3>
                      <p className="text-muted-foreground">
                        +91 98765 43210
                        <br />
                        +91 98765 43211
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">Available 24/7 for your convenience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-card-foreground">Email</h3>
                      <p className="text-muted-foreground">
                        booking@azurestay.com
                        <br />
                        info@azurestay.com
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">We respond within 2-4 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2 text-card-foreground">Check-in / Check-out Timings</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>
                          <strong>Check-in:</strong> 12:00 PM onwards
                        </p>
                        <p>
                          <strong>Check-out:</strong> 11:00 AM
                        </p>
                        <p className="text-sm mt-2">Early check-in/late check-out subject to availability</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-serif mb-6 text-foreground">Find Us</h2>
              <Card className="border-border overflow-hidden h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64283735003!2d72.71637784297677!3d19.082502006442103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1624523456789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Azure Stay Hotel & PG Location"
                />
              </Card>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Located near major transportation hubs for easy accessibility
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-secondary/30 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-serif mb-4 text-foreground">Need Immediate Assistance?</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Our reception desk is staffed 24/7 to assist you with any queries, emergencies, or special requests.
              Whether you're planning your stay or already checked in, we're always here to help make your experience at
              Azure Stay as comfortable as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
