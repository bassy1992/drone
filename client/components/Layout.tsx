import { ReactNode } from "react";
import Navigation from "./Navigation";
import FloatingWatchDemo from "./FloatingWatchDemo";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>{children}</main>
      <FloatingWatchDemo />
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F261a98e6df434ad1ad15c1896e5c6aa3%2Fe303b72f25324339babe2f417ecaf795?format=webp&width=200"
                alt="Goom Captions"
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 max-w-md">
                Complete multimedia production services including drone operations, documentary filmmaking,
                corporate media, event coverage, and aerial surveillance. Bringing your vision to life.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Drone Inspection</li>
                <li>Aerial Surveillance</li>
                <li>Documentary Production</li>
                <li>Corporate Media</li>
                <li>Event Coverage</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@goomcaptions.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Follow us on social</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Goom Captions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
