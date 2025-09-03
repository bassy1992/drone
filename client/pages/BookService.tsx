import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { services } from "@shared/services";
import { toast } from "sonner";

const bookingSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  package: z.string().min(1, "Please select a package"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  alternateDate: z.date().optional(),
  location: z.string().min(5, "Please provide the project location"),
  projectDetails: z.string().min(20, "Please provide more details about your project (minimum 20 characters)"),
  budget: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  additionalRequirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookService() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const preSelectedService = searchParams.get("service");
  const preSelectedPackage = searchParams.get("package");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: preSelectedService || "",
      package: preSelectedPackage || "",
    },
  });

  const selectedServiceId = watch("service");
  const selectedService = services.find(s => s.id === selectedServiceId);
  const availablePackages = selectedService?.pricing || [];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/book-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          preferredDate: format(data.preferredDate, 'yyyy-MM-dd'),
          alternateDate: data.alternateDate ? format(data.alternateDate, 'yyyy-MM-dd') : undefined,
          serviceName: selectedService?.title,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Booking request submitted successfully!");
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      toast.error("Failed to submit booking. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 bg-gray-50 min-h-screen flex items-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Booking Request Submitted!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your booking request. We've received your information and will contact you within 24 hours to discuss your project details and confirm your booking.
            </p>
            <div className="bg-white rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-blue">1</span>
                  </div>
                  <span className="text-gray-700">We'll review your request</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-blue">2</span>
                  </div>
                  <span className="text-gray-700">Our team will call you to discuss details</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-blue">3</span>
                  </div>
                  <span className="text-gray-700">We'll provide a custom quote and timeline</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                  Back to Home
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <div>
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange">
              Book Your Service
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Schedule Your Project
            </h1>
            <p className="text-xl text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours with a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Service Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>1. Select Your Service</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="service">Service Type *</Label>
                  <Select
                    onValueChange={(value) => {
                      setValue("service", value);
                      setValue("package", ""); // Reset package when service changes
                    }}
                    defaultValue={preSelectedService || ""}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>
                  )}
                </div>

                {selectedService && (
                  <div>
                    <Label htmlFor="package">Package *</Label>
                    <Select
                      onValueChange={(value) => setValue("package", value)}
                      defaultValue={preSelectedPackage || ""}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a package" />
                      </SelectTrigger>
                      <SelectContent>
                        {availablePackages.map((pkg, index) => (
                          <SelectItem key={index} value={pkg.package}>
                            {pkg.package} - {pkg.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.package && (
                      <p className="text-sm text-red-600 mt-1">{errors.package.message}</p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>2. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Your Company Name"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card>
              <CardHeader>
                <CardTitle>3. Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("preferredDate") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("preferredDate") ? (
                            format(watch("preferredDate"), "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("preferredDate")}
                          onSelect={(date) => date && setValue("preferredDate", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.preferredDate && (
                      <p className="text-sm text-red-600 mt-1">{errors.preferredDate.message}</p>
                    )}
                  </div>

                  <div>
                    <Label>Alternate Date (Optional)</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !watch("alternateDate") && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {watch("alternateDate") ? (
                            format(watch("alternateDate"), "PPP")
                          ) : (
                            <span>Pick alternate date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={watch("alternateDate")}
                          onSelect={(date) => setValue("alternateDate", date)}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Project Location *</Label>
                  <Input
                    id="location"
                    {...register("location")}
                    placeholder="City, State or Full Address"
                  />
                  {errors.location && (
                    <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline *</Label>
                  <Select onValueChange={(value) => setValue("timeline", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">As soon as possible</SelectItem>
                      <SelectItem value="1-2weeks">Within 1-2 weeks</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="2-3months">2-3 months</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.timeline && (
                    <p className="text-sm text-red-600 mt-1">{errors.timeline.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range (Optional)</Label>
                  <Select onValueChange={(value) => setValue("budget", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1k">Under $1,000</SelectItem>
                      <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-plus">$25,000+</SelectItem>
                      <SelectItem value="discuss">Prefer to discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="projectDetails">Project Description *</Label>
                  <Textarea
                    id="projectDetails"
                    {...register("projectDetails")}
                    placeholder="Please describe your project in detail. Include what you need filmed, any special requirements, expected deliverables, etc."
                    rows={4}
                  />
                  {errors.projectDetails && (
                    <p className="text-sm text-red-600 mt-1">{errors.projectDetails.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="additionalRequirements">Additional Requirements (Optional)</Label>
                  <Textarea
                    id="additionalRequirements"
                    {...register("additionalRequirements")}
                    placeholder="Any special equipment needs, permits, safety requirements, etc."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-brand-orange hover:bg-brand-orange/90 text-white px-12 py-3"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">
                    We'll contact you within 24 hours to discuss your project and provide a custom quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prefer to speak directly?
          </h3>
          <p className="text-gray-600 mb-6">
            Call us or send an email for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
              onClick={() => window.open('tel:+1234567890', '_self')}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </Button>
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
