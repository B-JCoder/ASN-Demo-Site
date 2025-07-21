import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const vehicle = formData.get("vehicle")
    const pickupLocation = formData.get("pickupLocation")
    const dropoffLocation = formData.get("dropoffLocation")
    const pickupDate = formData.get("pickupDate")
    const dropoffDate = formData.get("dropoffDate")
    const license = formData.get("license") as File

    // Simulate file upload - in production, upload to S3 or another service and use the URL
    const licenseBuffer = await license.arrayBuffer()
    const licenseBase64 = Buffer.from(licenseBuffer).toString("base64")

    const emailContent = `
New Booking Request - ASN Car Rentals

Customer Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

Booking Details:
Vehicle: ${vehicle}
Pickup Location: ${pickupLocation}
Drop-off Location: ${dropoffLocation}
Pickup Date: ${pickupDate}
Drop-off Date: ${dropoffDate}

(You can view the uploaded license in the admin panel or attachment area.)
    `

    // Send Email
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
          from_name: name,
          from_email: email,
          message: emailContent,
          subject: "New Booking Request - ASN Car Rentals",
        },
      }),
    });

    console.log("Email sent response:", await emailResponse.json())

    return NextResponse.json({
      success: true,
      message: "Booking request submitted successfully",
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit booking request" },
      { status: 500 }
    );
  }
}
