import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, vehicle, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields' },
        { status: 400 }
      )
    }

    // Create transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'your-email@gmail.com',
        pass: process.env.GMAIL_PASS || 'your-app-password',
      },
    })

    // Email content
    const emailContent = `
      New Car Inquiry from ASN Car Rentals Website
      
      Contact Information:
      - Name: ${name}
      - Email: ${email}
      - Phone: ${phone || 'Not provided'}
      
      Vehicle Interest:
      - Vehicle: ${vehicle || 'Not specified'}
      
      Message:
      ${message || 'No additional message provided'}
      
      ---
      This inquiry was submitted through the ASN Car Rentals website car page.
    `

    // Send email to bilalcodes777@gmail.com
    await transporter.sendMail({
      from: process.env.GMAIL_USER || 'noreply@asncarrentals.com',
      to: 'bilalcodes777@gmail.com',
      subject: `New Car Inquiry - ASN Car Rentals from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #FC9510; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Car Inquiry</h1>
            <p style="color: white; margin: 5px 0 0 0;">ASN Car Rentals Website</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #FC9510; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                <td style="padding: 8px 0; color: #333;">${phone || 'Not provided'}</td>
              </tr>
            </table>

            <h2 style="color: #333; margin-top: 25px;">Vehicle Interest</h2>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0; color: #333;">
              <strong>Vehicle:</strong> ${vehicle || 'Not specified'}
            </p>

            ${message ? `
            <h2 style="color: #333; margin-top: 25px;">Additional Message</h2>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0; color: #333; white-space: pre-wrap;">${message}</div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              This inquiry was submitted through the ASN Car Rentals website car page.
            </div>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER || 'noreply@asncarrentals.com',
      to: email,
      subject: 'Thank you for your inquiry - ASN Car Rentals',
      text: `
        Dear ${name},
        
        Thank you for your interest in ASN Car Rentals! We have received your inquiry about ${vehicle || 'our vehicles'}.
        
        Our team will review your request and get back to you within 24 hours. If you have any urgent questions, please don't hesitate to contact us directly.
        
        Best regards,
        ASN Car Rentals Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #FC9510; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You!</h1>
            <p style="color: white; margin: 5px 0 0 0;">ASN Car Rentals</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 0;">
              Dear <strong>${name}</strong>,
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for your interest in ASN Car Rentals! We have received your inquiry about <strong>${vehicle || 'our vehicles'}</strong>.
            </p>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Our team will review your request and get back to you within 24 hours. If you have any urgent questions, please don't hesitate to contact us directly.
            </p>
            
            <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #FC9510;">
              <h3 style="margin: 0 0 10px 0; color: #333;">Your Inquiry Details:</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Vehicle of Interest:</strong> ${vehicle || 'Not specified'}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Contact Email:</strong> ${email}</p>
              <p style="margin: 5px 0; color: #666;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
            
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Best regards,<br>
              <strong>ASN Car Rentals Team</strong>
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              This is an automated confirmation email from ASN Car Rentals.
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}