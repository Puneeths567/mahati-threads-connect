
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
      console.log("Form submission data:", data);
      
      // Using Web3Forms for reliable email delivery
      // This service will deliver the emails to mahatienterprises09@gmail.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // This access key is specifically for Web3Forms - it's meant to be public
          access_key: '0df39dee-7b82-4e93-9389-ae67551e98f5',
          from_name: `${data.name} via Mahati Enterprises Website`,
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
          `,
          // Include all form data directly as fields to ensure it's captured properly
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.location || 'Not provided',
          form_message: data.message
        })
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from Web3Forms:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log("Form submission result:", result);
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
          variant: "default",
        });
        return true;
      } else {
        console.error("Form submission error:", result);
        throw new Error(result.message || "Failed to send message");
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
