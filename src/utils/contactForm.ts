
import { useToast } from "@/components/ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  location?: string;
}

export const useContactForm = () => {
  const { toast } = useToast();

  const submitContactForm = async (data: ContactFormData) => {
    try {
      // Log the form submission data for debugging
      console.log("Form submitted:", data);
      
      // In a real production application, this would be an API call to a backend
      // that would handle sending emails using a service like SendGrid, AWS SES, etc.
      
      // For now, we'll simulate a backend API call
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '0df39dee-7b82-4e93-9389-ae67551e98f5', // This is a temporary access key for testing
          from_name: "Mahati Enterprises Website",
          subject: `New Contact Form Submission from ${data.name}`,
          to_email: "mahatienterprises09@gmail.com",
          from_email: data.email,
          message: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location || 'Not provided'}

Message:
${data.message}
          `
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
        return true;
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email at mahatienterprises09@gmail.com",
        variant: "destructive",
      });
      
      return false;
    }
  };

  return {
    submitContactForm,
  };
};
