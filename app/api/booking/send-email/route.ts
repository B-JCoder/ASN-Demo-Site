import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Create email content
    const emailContent = `
New Booking Request - ASN Car Rentals

Customer Details:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Booking Details:
Vehicle: ${data.vehicle}
Pickup Location: ${data.pickupLocation}
Drop-off Location: ${data.dropoffLocation}
Pickup Date: ${data.pickupDate}
Drop-off Date: ${data.dropoffDate}

Please contact the customer to confirm the booking.
    `

    // Using a simple email service simulation
    // In production, replace this with actual email service

    // Example using fetch to send email via a service like EmailJS or similar
    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_01qge8t",
        template_id: "template_1gnju3m",
        user_id: "your_user_id",
        template_params: {
          to_email: "bilalcodes777@gmail.com",
          from_name: data.name,
          from_email: data.email,
          message: emailContent,
          subject: "New Booking Request - ASN Car Rentals",
        },
      }),
    })

    // For now, we'll just log the data and return success
    console.log("Booking data:", data)
    console.log("Email content:", emailContent)

    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
    })
  } catch (error) {
    console.error("Error processing booking:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit booking request",
      },
      { status: 500 },
    )
  }
}
