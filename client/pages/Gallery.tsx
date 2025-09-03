import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Video, Film, Play, ExternalLink } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photographyGallery = [
    {
      id: 1,
      title: "Luxury Real Estate",
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Stunning aerial view of luxury waterfront property"
    },
    {
      id: 2,
      title: "Mountain Landscape",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1508444845599-058643dfe9b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Breathtaking mountain peaks captured from above"
    },
    {
      id: 3,
      title: "City Skyline",
      category: "Urban",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Dynamic cityscape during golden hour"
    },
    {
      id: 4,
      title: "Coastal Wedding",
      category: "Events",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Romantic beach wedding ceremony from aerial perspective"
    },
    {
      id: 5,
      title: "Industrial Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Large-scale industrial facility documentation"
    },
    {
      id: 6,
      title: "Agricultural Fields",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Geometric patterns of farmland from above"
    }
  ];

  const videoGallery = [
    {
      id: 1,
      title: "Corporate Headquarters Tour",
      category: "Commercial",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2:30",
      description: "Cinematic showcase of modern office complex"
    },
    {
      id: 2,
      title: "Music Festival Coverage",
      category: "Events",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "3:45",
      description: "Dynamic aerial footage of outdoor music festival"
    },
    {
      id: 3,
      title: "Resort Property Showcase",
      category: "Real Estate",
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1:55",
      description: "Luxury resort marketing video with stunning aerials"
    },
    {
      id: 4,
      title: "Construction Progress",
      category: "Industrial",
      thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "4:20",
      description: "Time-lapse documentation of construction project"
    },
    {
      id: 5,
      title: "Nature Documentary",
      category: "Nature",
      thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "5:10",
      description: "Wildlife and landscape cinematography"
    },
    {
      id: 6,
      title: "Sports Event Coverage",
      category: "Sports",
      thumbnail: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2:15",
      description: "High-energy coverage of outdoor sporting event"
    }
  ];

  const documentaryGallery = [
    {
      id: 1,
      title: "Tech Startup Journey",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "12:30",
      description: "From garage to IPO - a tech company's incredible growth story"
    },
    {
      id: 2,
      title: "Sustainable Agriculture",
      category: "Environmental",
      thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "18:45",
      description: "Modern farming techniques revolutionizing food production"
    },
    {
      id: 3,
      title: "City Planning Evolution",
      category: "Urban Development",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "25:15",
      description: "How aerial technology is transforming urban planning"
    },
    {
      id: 4,
      title: "Coastal Conservation",
      category: "Environmental",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "22:10",
      description: "Protecting marine ecosystems through innovative monitoring"
    },
    {
      id: 5,
      title: "Industrial Innovation",
      category: "Industry",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "16:40",
      description: "How drones are revolutionizing industrial inspections"
    },
    {
      id: 6,
      title: "Community Rebuilding",
      category: "Social Impact",
      thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "30:20",
      description: "Aerial documentation of post-disaster community recovery"
    }
  ];

  const categories = ["All", "Real Estate", "Events", "Commercial", "Nature", "Urban", "Agriculture"];
  const videoCategories = ["All", "Commercial", "Events", "Real Estate", "Industrial", "Nature", "Sports"];
  const documentaryCategories = ["All", "Corporate", "Environmental", "Urban Development", "Industry", "Social Impact"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVideoCategory, setSelectedVideoCategory] = useState("All");
  const [selectedDocumentaryCategory, setSelectedDocumentaryCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All" 
    ? photographyGallery 
    : photographyGallery.filter(photo => photo.category === selectedCategory);

  const filteredVideos = selectedVideoCategory === "All"
    ? videoGallery
    : videoGallery.filter(video => video.category === selectedVideoCategory);

  const filteredDocumentaries = selectedDocumentaryCategory === "All"
    ? documentaryGallery
    : documentaryGallery.filter(doc => doc.category === selectedDocumentaryCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-0">
            Our Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our diverse multimedia portfolio featuring aerial photography, cinematic videography,
            and compelling documentaries showcasing our professional drone services across all industries.
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="photos" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-lg grid-cols-3 h-12">
                <TabsTrigger value="photos" className="flex items-center gap-2 text-sm">
                  <Camera className="h-4 w-4" />
                  Photography
                </TabsTrigger>
                <TabsTrigger value="videos" className="flex items-center gap-2 text-sm">
                  <Video className="h-4 w-4" />
                  Videography
                </TabsTrigger>
                <TabsTrigger value="documentaries" className="flex items-center gap-2 text-sm">
                  <Film className="h-4 w-4" />
                  Documentary
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Photography Tab */}
            <TabsContent value="photos" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-brand-blue hover:bg-brand-blue/90" 
                      : "border-gray-300 hover:border-brand-blue hover:text-brand-blue"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPhotos.map((photo) => (
                  <Dialog key={photo.id}>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                        <div className="relative overflow-hidden">
                          <img
                            src={photo.image}
                            alt={photo.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ExternalLink className="h-8 w-8 text-white" />
                          </div>
                          <Badge className="absolute top-4 left-4 bg-brand-orange text-white">
                            {photo.category}
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{photo.title}</h3>
                          <p className="text-gray-600">{photo.description}</p>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle className="sr-only">{photo.title} - {photo.category}</DialogTitle>
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            {/* Videography Tab */}
            <TabsContent value="videos" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {videoCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedVideoCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedVideoCategory(category)}
                    className={selectedVideoCategory === category 
                      ? "bg-brand-blue hover:bg-brand-blue/90" 
                      : "border-gray-300 hover:border-brand-blue hover:text-brand-blue"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <Card key={video.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-brand-blue ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-brand-orange text-white">
                        {video.category}
                      </Badge>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Documentary Tab */}
            <TabsContent value="documentaries" className="space-y-8">
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {documentaryCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedDocumentaryCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedDocumentaryCategory(category)}
                    className={selectedDocumentaryCategory === category
                      ? "bg-brand-blue hover:bg-brand-blue/90"
                      : "border-gray-300 hover:border-brand-blue hover:text-brand-blue"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Documentary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDocumentaries.map((documentary) => (
                  <Card key={documentary.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={documentary.thumbnail}
                        alt={documentary.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-brand-blue ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-brand-orange text-white">
                        {documentary.category}
                      </Badge>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {documentary.duration}
                      </div>
                      <div className="absolute top-4 right-4 bg-brand-blue/90 text-white px-2 py-1 rounded text-xs font-medium">
                        DOCUMENTARY
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{documentary.title}</h3>
                      <p className="text-gray-600">{documentary.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to create something amazing together? Let's discuss your project 
            and bring your vision to life with our professional drone services.
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-3">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
