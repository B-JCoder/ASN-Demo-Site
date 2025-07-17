// Email Service Setup Guide
// Run this script to set up email functionality

console.log(`
🚀 EMAIL SETUP GUIDE FOR ASN CAR RENTALS

To enable email functionality, choose one of these options:

1. RESEND (Recommended - Easy Setup)
   - Sign up at https://resend.com
   - Get your API key
   - Add to environment: RESEND_API_KEY=your_key_here
   - Uncomment Resend code in /api/booking/route.ts

2. GMAIL + NODEMAILER (Free Option)
   - Enable 2FA on your Gmail account
   - Generate App Password in Gmail settings
   - Add to environment:
     GMAIL_USER=your_email@gmail.com
     GMAIL_APP_PASSWORD=your_app_password
   - Uncomment Nodemailer code in /api/booking/route.ts

3. SENDGRID (Enterprise Option)
   - Sign up at https://sendgrid.com
   - Get your API key
   - Add to environment: SENDGRID_API_KEY=your_key_here

Current Status: Form submissions are logged to console but not emailed.
`)

// Test email configuration
async function testEmailSetup() {
  try {
    const response = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test User",
        email: "test@example.com",
        phone: "123-456-7890",
        vehicle: "Honda Accord",
        pickupDate: "2024-01-15",
        dropoffDate: "2024-01-20",
        pickupLocation: "Atlanta Airport",
        dropoffLocation: "Downtown Atlanta",
      }),
    })

    const result = await response.json()
    console.log("✅ API Test Result:", result)
  } catch (error) {
    console.error("❌ API Test Failed:", error)
  }
}

// Uncomment to test
// testEmailSetup()
