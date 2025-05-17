
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Reach out to us anytime - we're available 24/7
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="bg-taxi-primary p-2 rounded-md text-taxi-dark mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    24/52, Haji Hussain Street, Kottakuppam, Pondicherry
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="bg-taxi-primary p-2 rounded-md text-taxi-dark mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    +91 90252 32453
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="bg-taxi-primary p-2 rounded-md text-taxi-dark mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    mohamedfaiyas11@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-50 dark:bg-slate-800 p-4 rounded-lg">
                <div className="bg-taxi-primary p-2 rounded-md text-taxi-dark mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Working Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    24/7 - We're always available for your service
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name</Label>
                  <Input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="bg-taxi-primary text-taxi-dark hover:bg-taxi-primary/90 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
