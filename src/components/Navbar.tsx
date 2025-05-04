
import { Link } from "react-router-dom";
import { Calendar, PlusCircle } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur sticky top-0 z-30">
      <div className="section-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          <Link to="/" className="text-xl font-heading font-bold text-foreground">
            CampusEvents
          </Link>
        </div>
        
        <nav className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-muted-foreground font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/submit" 
            className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <PlusCircle className="h-4 w-4" />
            <span className="font-medium">Add Event</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
