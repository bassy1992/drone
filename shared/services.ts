import { Camera, Video, Zap, Shield, Award, Clapperboard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  slug: string;
  heroImage: string;
  cardImage: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  pricing: {
    package: string;
    description: string;
    features: string[];
    price: string;
  }[];
  gallery: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  };
}

export const services: Service[] = [
  {
    id: "drone-inspection",
    title: "Drone Inspection",
    description: "Professional aerial inspections for infrastructure, construction, and industrial facilities with detailed documentation.",
    shortDescription: "FAA certified pilots • 4K imaging • Thermal sensors • From $500",
    icon: Camera,
    slug: "drone-inspection",
    heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cardImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "FAA certified drone pilots",
      "4K high-resolution imaging",
      "Thermal and infrared capability",
      "Detailed inspection reports",
      "Real-time data collection",
      "Compliance documentation"
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "We evaluate your inspection needs and develop a customized flight plan to ensure comprehensive coverage."
      },
      {
        title: "Pre-Flight Planning",
        description: "Our certified pilots conduct thorough site surveys and coordinate with relevant authorities for safe operations."
      },
      {
        title: "Data Collection",
        description: "Using advanced drone technology, we capture high-resolution imagery and sensor data of your infrastructure."
      },
      {
        title: "Analysis & Reporting",
        description: "Our experts analyze the collected data and provide detailed reports with actionable insights and recommendations."
      }
    ],
    pricing: [
      {
        package: "Basic Inspection",
        description: "Perfect for routine maintenance checks",
        features: [
          "Up to 2 hours flight time",
          "High-resolution photography",
          "Basic inspection report",
          "Digital delivery"
        ],
        price: "Starting at $500"
      },
      {
        package: "Comprehensive Inspection",
        description: "Detailed analysis for critical infrastructure",
        features: [
          "Up to 4 hours flight time",
          "4K video + photography",
          "Thermal imaging",
          "Detailed technical report",
          "3D mapping (if applicable)",
          "Follow-up consultation"
        ],
        price: "Starting at $1,200"
      },
      {
        package: "Enterprise Solution",
        description: "Custom solutions for large-scale operations",
        features: [
          "Unlimited flight time",
          "Multi-day inspections",
          "Custom sensor packages",
          "Real-time monitoring",
          "Dedicated project manager",
          "Ongoing support"
        ],
        price: "Custom Quote"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    testimonial: {
      quote: "Their drone inspection services helped us identify critical issues early, saving us thousands in potential repairs.",
      author: "Mark Johnson",
      position: "Facilities Manager",
      company: "Industrial Solutions Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  },
  {
    id: "aerial-surveillance",
    title: "Aerial Surveillance",
    description: "Comprehensive aerial monitoring and surveillance services for security, safety, and operational oversight.",
    shortDescription: "24/7 monitoring • Real-time alerts • Perimeter security • From $400",
    icon: Shield,
    slug: "aerial-surveillance",
    heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cardImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "24/7 monitoring capabilities",
      "Real-time video streaming",
      "Advanced camera systems",
      "Perimeter security",
      "Event detection alerts",
      "Secure data transmission"
    ],
    process: [
      {
        title: "Security Assessment",
        description: "We analyze your property and security needs to design an optimal surveillance strategy."
      },
      {
        title: "System Setup",
        description: "Deploy advanced drone surveillance systems with real-time monitoring capabilities."
      },
      {
        title: "Active Monitoring",
        description: "Our trained operators monitor your property with immediate response to any security events."
      },
      {
        title: "Reporting & Analysis",
        description: "Receive detailed surveillance reports and security recommendations for ongoing protection."
      }
    ],
    pricing: [
      {
        package: "Perimeter Patrol",
        description: "Basic aerial surveillance for property boundaries",
        features: [
          "2-hour surveillance window",
          "Real-time monitoring",
          "Incident reporting",
          "Basic analytics"
        ],
        price: "Starting at $400"
      },
      {
        package: "Security Shield",
        description: "Comprehensive surveillance coverage",
        features: [
          "4-hour surveillance window",
          "Multi-angle coverage",
          "Thermal imaging",
          "Motion detection",
          "Immediate alerts",
          "Detailed reporting"
        ],
        price: "Starting at $800"
      },
      {
        package: "24/7 Guardian",
        description: "Round-the-clock surveillance protection",
        features: [
          "Continuous monitoring",
          "Multiple drone deployment",
          "Advanced threat detection",
          "Rapid response team",
          "Real-time communication",
          "Monthly security briefings"
        ],
        price: "Custom Quote"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "documentary-production",
    title: "Documentary Production",
    description: "Full-service documentary filmmaking from concept to completion, including aerial cinematography and ground production.",
    shortDescription: "Concept to completion • Aerial cinematography • Professional crew • From $5K",
    icon: Video,
    slug: "documentary-production",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cardImage: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Concept development",
      "Aerial cinematography",
      "Professional interviews",
      "Advanced editing suite",
      "Sound design & mixing",
      "Distribution support"
    ],
    process: [
      {
        title: "Concept Development",
        description: "We work with you to develop compelling storylines and visual narratives for your documentary."
      },
      {
        title: "Pre-Production",
        description: "Detailed planning including location scouting, interview scheduling, and production timeline."
      },
      {
        title: "Production",
        description: "Professional filming with drone cinematography, interviews, and B-roll footage capture."
      },
      {
        title: "Post-Production",
        description: "Expert editing, color grading, sound design, and final delivery in your preferred format."
      }
    ],
    pricing: [
      {
        package: "Short Documentary",
        description: "Perfect for corporate stories or personal projects",
        features: [
          "Up to 15 minutes runtime",
          "2 days of filming",
          "Basic aerial footage",
          "Professional editing",
          "Music licensing included"
        ],
        price: "Starting at $5,000"
      },
      {
        package: "Feature Documentary",
        description: "Comprehensive documentary production",
        features: [
          "30-60 minutes runtime",
          "5 days of filming",
          "Extensive aerial coverage",
          "Multiple interviews",
          "Advanced post-production",
          "Distribution guidance"
        ],
        price: "Starting at $15,000"
      },
      {
        package: "Premium Production",
        description: "High-end documentary with unlimited scope",
        features: [
          "Unlimited runtime",
          "Extended filming schedule",
          "International locations",
          "Celebrity interviews",
          "Festival submission",
          "Marketing support"
        ],
        price: "Custom Quote"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "corporate-media",
    title: "Corporate Media",
    description: "Professional corporate videos, training materials, promotional content, and executive interviews.",
    shortDescription: "Executive interviews • Brand videos • Training content • From $2.5K",
    icon: Award,
    slug: "corporate-media",
    heroImage: "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cardImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Executive interviews",
      "Company culture videos",
      "Product demonstrations",
      "Training materials",
      "Brand storytelling",
      "Multi-platform delivery"
    ],
    process: [
      {
        title: "Brand Discovery",
        description: "Understanding your company's values, goals, and target audience to create compelling content."
      },
      {
        title: "Content Strategy",
        description: "Developing a comprehensive content plan that aligns with your marketing and communication objectives."
      },
      {
        title: "Production",
        description: "Professional filming with corporate-grade equipment and experienced crew."
      },
      {
        title: "Delivery & Distribution",
        description: "Final content delivered in multiple formats optimized for your distribution channels."
      }
    ],
    pricing: [
      {
        package: "Corporate Basic",
        description: "Essential corporate video needs",
        features: [
          "1-2 minute video",
          "Single location filming",
          "Basic editing",
          "HD delivery",
          "Web-ready formats"
        ],
        price: "Starting at $2,500"
      },
      {
        package: "Professional Suite",
        description: "Comprehensive corporate media package",
        features: [
          "3-5 minute video",
          "Multiple locations",
          "Professional interviews",
          "Advanced editing",
          "4K delivery",
          "Social media cuts"
        ],
        price: "Starting at $5,500"
      },
      {
        package: "Enterprise Campaign",
        description: "Full-scale corporate media production",
        features: [
          "Multiple videos",
          "Extended production time",
          "Drone cinematography",
          "Animation & graphics",
          "Complete media kit",
          "Ongoing support"
        ],
        price: "Custom Quote"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "event-coverage",
    title: "Event Coverage",
    description: "Complete event documentation with multi-camera setups, drone footage, and live streaming capabilities.",
    shortDescription: "Multi-camera setup • Live streaming • Aerial footage • From $1.5K",
    icon: Zap,
    slug: "event-coverage",
    heroImage: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cardImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Multi-camera coverage",
      "Aerial event footage",
      "Live streaming services",
      "Real-time editing",
      "Professional audio",
      "Same-day highlights"
    ],
    process: [
      {
        title: "Event Planning",
        description: "Detailed consultation to understand your event requirements and coverage preferences."
      },
      {
        title: "Technical Setup",
        description: "Professional equipment deployment including cameras, drones, and streaming infrastructure."
      },
      {
        title: "Live Coverage",
        description: "Real-time event documentation with multiple camera angles and aerial perspectives."
      },
      {
        title: "Post-Event Delivery",
        description: "Edited highlights and full event footage delivered in your preferred format and timeline."
      }
    ],
    pricing: [
      {
        package: "Event Essentials",
        description: "Basic event coverage package",
        features: [
          "2-camera setup",
          "4-hour coverage",
          "Basic aerial shots",
          "Edited highlights reel",
          "Digital delivery"
        ],
        price: "Starting at $1,500"
      },
      {
        package: "Premium Coverage",
        description: "Comprehensive multi-angle documentation",
        features: [
          "4-camera setup",
          "8-hour coverage",
          "Extensive drone footage",
          "Live streaming option",
          "Full event video",
          "Same-day highlights"
        ],
        price: "Starting at $3,500"
      },
      {
        package: "Broadcast Quality",
        description: "Professional broadcast-level coverage",
        features: [
          "6+ camera setup",
          "Unlimited coverage time",
          "Professional streaming",
          "Real-time editing",
          "Multiple deliverables",
          "Post-event support"
        ],
        price: "Custom Quote"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "multimedia-production",
    title: "Multimedia Production",
    description: "End-to-end production services including pre-production planning, filming, editing, and post-production.",
    shortDescription: "Full production pipeline • VFX & graphics • Multi-platform • From $3K",
    icon: Clapperboard,
    slug: "multimedia-production",
    heroImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    cardImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    features: [
      "Full production pipeline",
      "Creative concept development",
      "Multi-format delivery",
      "Advanced post-production",
      "Animation & graphics",
      "Project management"
    ],
    process: [
      {
        title: "Creative Brief",
        description: "Collaborative planning session to define project scope, creative vision, and delivery requirements."
      },
      {
        title: "Pre-Production",
        description: "Comprehensive planning including scripting, storyboarding, and resource allocation."
      },
      {
        title: "Production Phase",
        description: "Professional filming with state-of-the-art equipment and experienced production crew."
      },
      {
        title: "Post-Production",
        description: "Advanced editing, visual effects, sound design, and final delivery across multiple platforms."
      }
    ],
    pricing: [
      {
        package: "Production Starter",
        description: "Basic multimedia production needs",
        features: [
          "1-day production",
          "Basic editing suite",
          "Standard delivery",
          "Web optimization",
          "2 revision rounds"
        ],
        price: "Starting at $3,000"
      },
      {
        package: "Professional Production",
        description: "Comprehensive multimedia solution",
        features: [
          "3-day production",
          "Advanced editing",
          "Motion graphics",
          "Multi-platform delivery",
          "Unlimited revisions",
          "Project management"
        ],
        price: "Starting at $8,000"
      },
      {
        package: "Enterprise Production",
        description: "Full-scale multimedia campaign",
        features: [
          "Extended production timeline",
          "Multiple deliverables",
          "Advanced VFX",
          "Original music scoring",
          "Distribution strategy",
          "Ongoing support"
        ],
        price: "Custom Quote"
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
