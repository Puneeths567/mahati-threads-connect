
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
      
      // Make sure we're using the correct email with FormSubmit
      // FormSubmit requires the email to be encoded in the URL
      const response = await fetch('https://formsubmit.co/ajax/mahatienterprises09@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.location || 'Not provided',
          message: data.message,
          _subject: `New Contact Form Submission from ${data.name} - Mahati Enterprises Website`,
          _captcha: false  // Disable captcha to ensure submissions go through
        })
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from form submission:", errorData);
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
