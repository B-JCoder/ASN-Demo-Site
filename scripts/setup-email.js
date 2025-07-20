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
