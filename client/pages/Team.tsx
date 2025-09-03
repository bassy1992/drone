import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Lead Pilot & Creative Director",
      bio: "FAA certified commercial drone pilot with over 8 years of experience in aerial cinematography. Specializes in luxury real estate and commercial projects.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["FAA Part 107", "Certified Flight Instructor", "Advanced Cinematography"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@goomcaptions.com"
      }
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "Senior Photographer & Editor",
      bio: "Award-winning photographer with expertise in post-production and color grading. Transforms raw aerial footage into stunning visual narratives.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["Adobe Certified Expert", "Professional Photography", "Color Grading Specialist"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@goomcaptions.com"
      }
    },
    {
      id: 3,
      name: "Mike Thompson",
      role: "Technical Operations Manager",
      bio: "Drone technology specialist ensuring all equipment operates at peak performance. Handles technical setup, maintenance, and safety protocols.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["Drone Maintenance Certified", "Safety Management Systems", "Electronics Engineering"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mike@goomcaptions.com"
      }
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Video Production Specialist",
      bio: "Cinematic storyteller with a passion for creating compelling video content. Brings artistic vision to every aerial video project.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["Film Production Certificate", "Motion Graphics", "Drone Cinematography"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emma@goomcaptions.com"
      }
    },
    {
      id: 5,
      name: "David Park",
      role: "Client Relations & Project Manager",
      bio: "Ensures seamless project execution from initial consultation to final delivery. Your primary point of contact for all project communications.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["Project Management Professional", "Client Relations Certified", "Business Communications"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@goomcaptions.com"
      }
    },
    {
      id: 6,
      name: "Lisa Wang",
      role: "Marketing & Content Strategist",
      bio: "Digital marketing expert who helps clients maximize the impact of their aerial content across all platforms and marketing channels.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      certifications: ["Digital Marketing Certified", "Content Strategy", "Social Media Marketing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@goomcaptions.com"
      }
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "8", label: "Years Experience" },
    { number: "15+", label: "Awards Won" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-0">
            Meet Our Team
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Experts Behind the Lens
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our passionate team of certified professionals brings together years of experience
            in multimedia production, drone operations, documentary filmmaking, and corporate media to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-brand-blue">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each team member brings unique expertise in multimedia production to ensure your project
              receives the highest level of professionalism and creative excellence across all media formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-brand-orange font-medium">{member.role}</p>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <Button size="sm" variant="outline" className="p-2 h-9 w-9">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 h-9 w-9">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2 h-9 w-9">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange">
                Our Values
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We believe in pushing the boundaries of aerial creativity while maintaining 
                the highest standards of safety and professionalism.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-blue font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
                    <p className="text-gray-600">Every flight operation follows strict safety protocols and regulations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-orange font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Creative Excellence</h3>
                    <p className="text-gray-600">We push creative boundaries to deliver visually stunning results.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-brand-blue font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Client Partnership</h3>
                    <p className="text-gray-600">We work closely with clients to understand and exceed their vision.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-blue/80">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented professionals who share our passion 
            for aerial creativity and excellence. Explore opportunities to grow with us.
          </p>
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3">
            View Open Positions
          </Button>
        </div>
      </section>
    </Layout>
  );
}
