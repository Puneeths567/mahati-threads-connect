
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
      // This is a simulation of sending an email
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", data);
      
      // Here, you would normally make an API call to send an email
      // For now, we'll just simulate success after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
      
      return false;
    }
  };

  return {
    submitContactForm,
  };
};
