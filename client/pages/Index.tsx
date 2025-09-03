import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Zap, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@shared/services";

export default function Index() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroImages.length]);


  const features = [
    {
      icon: Shield,
      title: "Fully Licensed & Certified",
      description: "FAA certified pilots, insured operations, and professional media production certifications."
    },
    {
      icon: Award,
      title: "Broadcast Quality",
      description: "Cinema-grade cameras, 4K/8K video, professional audio, and advanced post-production capabilities."
    },
    {
      icon: Zap,
      title: "Full-Service Production",
      description: "From concept development to final delivery, we handle every aspect of your multimedia project."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0 transition-opacity duration-1000">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt="Professional multimedia production"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-brand-orange/90 text-white border-0">
            Multimedia Production Services
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Complete{" "}
            <span className="text-brand-blue">Media</span> Solution
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            From aerial drone footage to corporate documentaries and event coverage.
            We deliver comprehensive multimedia production services for all your visual storytelling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3">
                Book Now
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-3"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-blue/10 text-brand-blue border-brand-blue">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Multimedia Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From drone inspections and aerial surveillance to corporate documentaries and event coverage,
              we provide comprehensive multimedia production services for all industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group">
                  <div className="aspect-video w-full relative overflow-hidden bg-gray-100">
                    <img
                      src={service.cardImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white">
                      <IconComponent className="h-6 w-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-4 space-y-3">
                      <Link to={`/services/${service.slug}`}>
                        <Button
                          variant="outline"
                          className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
                        >
                          Learn More
                        </Button>
                      </Link>
                      <Link to={`/book?service=${service.id}`}>
                        <Button
                          size="sm"
                          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                        >
                          Quick Book
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Multimedia Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With years of experience in multimedia production and cutting-edge technology,
                we deliver exceptional content across all platforms and industries.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional drone equipment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-blue rounded-2xl flex items-center justify-center">
                <Camera className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue/80">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and discover how our comprehensive
            multimedia production services can elevate your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3">
                Book Your Service
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-3"
              >
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
