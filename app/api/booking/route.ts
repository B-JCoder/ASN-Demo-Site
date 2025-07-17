import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.vehicle) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 },
      )
    }

    // Create email content
    const emailContent = `
New Booking Request - ASN Car Rentals

Customer Details:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Booking Details:
Vehicle: ${data.vehicle}
Pickup Location: ${data.pickupLocation || "Not specified"}
Drop-off Location: ${data.dropoffLocation || "Not specified"}
Pickup Date: ${data.pickupDate}
Drop-off Date: ${data.dropoffDate}

Please contact the customer to confirm the booking.
    `

    // Here you would integrate with your email service
    // For now, we'll simulate the email sending

    // Option 1: Using Resend (recommended)
    /*
    import { Resend } from 'resend'
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'bookings@asnrentals.com',
      to: 'admin@asnrentals.com',
      subject: 'New Booking Request - ASN Car Rentals',
      text: emailContent,
    })
    */

    // Option 2: Using Nodemailer with Gmail
    /*
    import nodemailer from 'nodemailer'
    
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    })

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'admin@asnrentals.com',
      subject: 'New Booking Request - ASN Car Rentals',
      text: emailContent
    })
    */

    // For demonstration, we'll just log the data
    console.log("New booking request received:")
    console.log("Customer:", data.name, data.email, data.phone)
    console.log("Vehicle:", data.vehicle)
    console.log("Dates:", data.pickupDate, "to", data.dropoffDate)
    console.log("Locations:", data.pickupLocation, "->", data.dropoffLocation)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully. We'll contact you soon!",
    })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit booking request. Please try again.",
      },
      { status: 500 },
    )
  }
}
