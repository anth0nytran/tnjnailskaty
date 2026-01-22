// Test script for n8n webhook
// Run with: node test-webhook.js

const testPayload = {
  fullName: "Test Customer",
  email: "test@example.com",
  phone: "(281) 391-1411",
  preferredDate: "Monday, January 21, 2025",
  preferredTime: "2:00 PM",
  services: "Nail Service: Dip Powder, Manicure: Shellac Basic Manicure",
  additionalNotes: "This is a test submission from the webhook test script",
  submittedAt: new Date().toISOString()
};

async function testWebhook() {
  try {
    console.log('Sending test payload to n8n webhook...');
    console.log('Payload:', JSON.stringify(testPayload, null, 2));
    
    const response = await fetch('https://anthotran.app.n8n.cloud/webhook-test/form-submission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload)
    });
    
    const responseText = await response.text();
    
    console.log('\n✅ Response Status:', response.status, response.statusText);
    console.log('Response:', responseText);
    
    if (response.ok) {
      console.log('\n🎉 Webhook test successful!');
    } else {
      console.log('\n❌ Webhook returned an error status');
    }
  } catch (error) {
    console.error('\n❌ Error testing webhook:', error.message);
  }
}

testWebhook();
