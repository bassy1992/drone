import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const FloatingWatchDemo = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg"
        className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full px-6 py-3"
      >
        <Play className="mr-2 h-5 w-5" />
        Watch Demo
      </Button>
    </div>
  );
};

export default FloatingWatchDemo;
