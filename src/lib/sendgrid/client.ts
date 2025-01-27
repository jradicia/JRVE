import sgMail from '@sendgrid/mail'

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
}

export const sendEmail = async (to: string, templateId: string, dynamicTemplateData: any) => {
  try {
    await sgMail.send({
      to,
      from: 'your-verified-sender@example.com',
      templateId,
      dynamicTemplateData,
    })
  } catch (error) {
    console.error('SendGrid error:', error)
    throw new Error('Failed to send email')
  }
} 