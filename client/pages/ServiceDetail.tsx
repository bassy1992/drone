import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { getServiceBySlug } from "@shared/services";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const IconComponent = service.icon;

  return (
    <Layout>
      {/* Back Navigation */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-blue hover:text-brand-blue/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-blue/10 text-brand-blue border-brand-blue">
              Service Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-brand-blue">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-blue/10 text-brand-blue border-brand-blue">
              Pricing Packages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to meet your specific needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.pricing.map((pricing, index) => (
              <Card key={index} className={`border-2 hover:shadow-xl transition-all duration-300 ${
                index === 1 ? 'border-brand-blue shadow-lg scale-105' : 'border-gray-200'
              }`}>
                <CardContent className="p-8">
                  {index === 1 && (
                    <Badge className="mb-4 bg-brand-blue text-white">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pricing.package}</h3>
                  <p className="text-gray-600 mb-4">{pricing.description}</p>
                  <div className="text-3xl font-bold text-brand-blue mb-6">{pricing.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pricing.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-brand-blue flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/book?service=${service.id}&package=${encodeURIComponent(pricing.package)}`}>
                    <Button
                      className={`w-full ${
                        index === 1
                          ? 'bg-brand-blue hover:bg-brand-blue/90'
                          : 'bg-brand-orange hover:bg-brand-orange/90'
                      } text-white`}
                    >
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Project Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.gallery.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image}
                  alt={`${service.title} project ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {service.testimonial && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-8 bg-brand-blue/10 text-brand-blue border-brand-blue">
              Client Testimonial
            </Badge>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
              "{service.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={service.testimonial.avatar}
                alt={service.testimonial.author}
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">{service.testimonial.author}</div>
                <div className="text-gray-600">
                  {service.testimonial.position}, {service.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-blue/80">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and custom quote for your {service.title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/book?service=${service.id}`}>
              <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3">
                <Mail className="h-5 w-5 mr-2" />
                Book Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-blue text-lg px-8 py-3"
              onClick={() => window.open('tel:+1234567890', '_self')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
