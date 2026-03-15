"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function BookPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    roomType: "Single",
    guests: "1",
    stayType: "Hotel",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const emailBody = `New Booking Request

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room Type: ${formData.roomType}
Number of Guests: ${formData.guests}
Stay Type: ${formData.stayType}
Special Requests: ${formData.specialRequests || "None"}

Please confirm this booking at your earliest convenience.`

    const mailtoLink = `mailto:booking@azurestay.com?subject=New Room Booking Request – Azure Stay&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif text-primary-foreground text-balance">Book a Room</h1>
          <p className="text-lg text-primary-foreground/90 mt-4">
            Fill in your details and we'll confirm your booking via email
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-center">Reservation Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium mb-2 text-foreground">
                      Check-in Date <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium mb-2 text-foreground">
                      Check-out Date <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="roomType" className="block text-sm font-medium mb-2 text-foreground">
                      Room Type <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="Single">Single Room</option>
                      <option value="Double">Double Room</option>
                      <option value="Deluxe">Deluxe Room</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2 text-foreground">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      max="4"
                      className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="stayType" className="block text-sm font-medium mb-2 text-foreground">
                    Purpose of Stay <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="stayType"
                    name="stayType"
                    value={formData.stayType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="Hotel">Hotel (Short-term)</option>
                    <option value="PG">PG (Monthly)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium mb-2 text-foreground">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Any special requirements or preferences (optional)"
                  />
                </div>

                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    By clicking Submit, your email client will open with all your booking details. Simply send the email
                    and our team will confirm your reservation within 24 hours.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
