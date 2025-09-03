import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { services } from "@shared/services";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Fe303b72f25324339babe2f417ecaf795?format=webp&width=200"
              alt="Goom Captions Drone Services"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-brand-blue",
                  isActive(item.href)
                    ? "text-brand-blue border-b-2 border-brand-blue"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80">
                <div className="px-3 py-2 border-b border-gray-100">
                  <div className="font-semibold text-gray-900 text-sm">Professional Drone Services</div>
                  <div className="text-xs text-gray-500">FAA certified • Fully insured • Professional equipment</div>
                </div>
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <DropdownMenuItem key={service.id} asChild>
                      <Link
                        to={`/services/${service.slug}`}
                        className="flex items-start space-x-3 p-3 hover:bg-brand-blue/5 transition-colors duration-200"
                      >
                        <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-brand-blue" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 text-sm mb-1">{service.title}</div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            {service.shortDescription}
                          </div>
                        </div>
                        <div className="flex items-center text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                <div className="border-t border-gray-100 p-3">
                  <Link
                    to="/book"
                    className="flex items-center justify-center space-x-2 bg-brand-orange hover:bg-brand-orange/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                    <span>Book Any Service</span>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors",
                    isActive(item.href)
                      ? "text-brand-blue bg-brand-blue/10"
                      : "text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="border-t pt-3 mt-2">
                <div className="px-3 py-2">
                  <div className="text-sm font-semibold text-gray-900">Professional Drone Services</div>
                  <div className="text-xs text-gray-500 mb-2">FAA certified • Fully insured</div>
                </div>
                {services.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      className="flex items-start space-x-3 px-3 py-3 hover:bg-brand-blue/5 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center mt-0.5">
                        <IconComponent className="h-4 w-4 text-brand-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900">{service.title}</div>
                        <div className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                          {service.shortDescription}
                        </div>
                      </div>
                    </Link>
                  );
                })}
                <div className="px-3 py-2 border-t border-gray-100 mt-2">
                  <Link to="/book" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                      </svg>
                      Book Any Service
                    </Button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
