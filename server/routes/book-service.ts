import { RequestHandler } from "express";
import { z } from "zod";

const bookingSchema = z.object({
  service: z.string(),
  package: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string().optional(),
  preferredDate: z.string(),
  alternateDate: z.string().optional(),
  location: z.string(),
  projectDetails: z.string(),
  budget: z.string().optional(),
  timeline: z.string(),
  additionalRequirements: z.string().optional(),
  serviceName: z.string(),
  submittedAt: z.string(),
});

export const handleBookService: RequestHandler = async (req, res) => {
  try {
    // Validate the request body
    const bookingData = bookingSchema.parse(req.body);
    
    // Log the booking for now (in production, you'd save to database)
    console.log("New booking received:", {
      service: bookingData.serviceName,
      customer: `${bookingData.firstName} ${bookingData.lastName}`,
      email: bookingData.email,
      phone: bookingData.phone,
      preferredDate: bookingData.preferredDate,
      submittedAt: bookingData.submittedAt,
    });

    // Create email content
    const emailContent = generateBookingEmail(bookingData);
    
    // For now, just log the email content
    // In production, you would send this via your preferred email service
    console.log("Booking email content:", emailContent);
    
    // TODO: Send email notification here
    // You can integrate with services like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Or webhook to external service
    
    res.json({ 
      success: true, 
      message: "Booking request received successfully",
      bookingId: generateBookingId(bookingData.submittedAt)
    });
    
  } catch (error) {
    console.error("Booking submission error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking data",
        errors: error.errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Failed to process booking request"
    });
  }
};

function generateBookingEmail(data: z.infer<typeof bookingSchema>): string {
  return `
🎯 NEW BOOKING REQUEST - ${data.serviceName}

📋 CUSTOMER DETAILS:
• Name: ${data.firstName} ${data.lastName}
• Email: ${data.email}
• Phone: ${data.phone}
• Company: ${data.company || 'Not provided'}

📅 PROJECT DETAILS:
• Service: ${data.serviceName}
• Package: ${data.package}
• Preferred Date: ${data.preferredDate}
• Alternate Date: ${data.alternateDate || 'Not provided'}
• Location: ${data.location}
• Timeline: ${data.timeline}
• Budget: ${data.budget || 'Not specified'}

📝 PROJECT DESCRIPTION:
${data.projectDetails}

📌 ADDITIONAL REQUIREMENTS:
${data.additionalRequirements || 'None specified'}

⏰ SUBMITTED: ${new Date(data.submittedAt).toLocaleString()}

---
🔔 ACTION REQUIRED: Call ${data.firstName} at ${data.phone} to discuss project details and provide quote.
  `;
}

function generateBookingId(timestamp: string): string {
  const date = new Date(timestamp);
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '');
  const timeStr = date.getTime().toString().slice(-6);
  return `BK${dateStr}${timeStr}`;
}
