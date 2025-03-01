"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface MenuItem {
  title: string;
  href: string;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "/") {
      sectionId = "home";
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

 
      setOpen(false);
    }
  };

  const menuItems: MenuItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Service", href: "#service" },
    { title: "Project", href: "#project" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 px-4 py-2"
    >
      <div className="max-w-7xl mx-auto bg-black/5 backdrop-blur-lg rounded-full p-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className={`text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text ${righteous.className}`}
          >
            MFF
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className={cn(
                  "px-4 py-2 rounded-full transition-all",
                  "hover:bg-purple-500 hover:text-white"
                )}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu (Hamburger) */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="p-2 rounded-md text-purple-600 hover:bg-purple-100 transition-all">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left" className="bg-white w-64 p-6">
                <SheetHeader>
                  <SheetTitle className={righteous.className}>MFF</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {menuItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(item.href.replace("#", ""))}
                      className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-all"
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
