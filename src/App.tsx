import React, { useState } from 'react';
import { Facebook, Instagram, Music, Phone, MapPin, Clock, Mail, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich, bold shot of pure coffee perfection' },
    { name: 'Cappuccino', price: '$4.25', description: 'Creamy steamed milk with a perfect foam crown' },
    { name: 'Latte', price: '$4.75', description: 'Smooth espresso with velvety steamed milk' },
    { name: 'Americano', price: '$3.75', description: 'Espresso with hot water for a clean, pure taste' },
    { name: 'Macchiato', price: '$4.50', description: 'Espresso "marked" with a dollop of foamed milk' },
    { name: 'Mocha', price: '$5.25', description: 'Chocolate and coffee in perfect harmony' },
    { name: 'Cold Brew', price: '$4.00', description: 'Smooth, less acidic coffee steeped to perfection' },
    { name: 'Flat White', price: '$4.50', description: 'Double shot with microfoam for coffee purists' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-gray-700 font-light" style={{backgroundColor: '#F5F1EA', color: '#2F2F2F'}}>
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur-md z-50 border rounded-3xl mx-4 mt-2" style={{width: 'calc(100% - 2rem)', backgroundColor: 'rgba(184, 107, 75, 0.9)', borderColor: '#B86B4B'}}>
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold tracking-wider text-white" style={{color: '#FFFFFF'}}>
              MEGRO
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-white transition-colors duration-300 font-semibold tracking-wide"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="hover:text-white transition-colors duration-300 font-semibold tracking-wide"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-white transition-colors duration-300 font-semibold tracking-wide"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
              >
                Contact
              </button>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-6 ml-8">
                <a href="#" className="hover:text-white transition-colors duration-300" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                  <Music size={18} strokeWidth={1.5} />
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-8 pb-6 border-t pt-8" style={{borderColor: 'rgba(255, 255, 255, 0.3)'}}>
              <div className="flex flex-col space-y-6">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors duration-300 text-left font-semibold tracking-wide"
                  style={{color: 'rgba(255, 255, 255, 0.8)'}}
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-white transition-colors duration-300 text-left font-semibold tracking-wide"
                  style={{color: 'rgba(255, 255, 255, 0.8)'}}
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors duration-300 text-left font-semibold tracking-wide"
                  style={{color: 'rgba(255, 255, 255, 0.8)'}}
                >
                  Contact
                </button>
                
                {/* Mobile Social Media Icons */}
                <div className="flex items-center space-x-6 pt-4">
                  <a href="#" className="hover:text-white transition-colors duration-300" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
                    <Music size={18} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          <div className="absolute inset-0 bg-neutral-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider">
            <span className="text-white" style={{color: '#3E2C24'}}>MEGRO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
            Exceptional coffee crafted with precision and passion
          </p>
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-white px-10 py-4 font-bold tracking-wider transition-all duration-300 rounded-full hover:shadow-lg hover:scale-105"
            style={{backgroundColor: '#B86B4B'}}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#A55A3F'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#B86B4B'}
          >
            EXPLORE MENU
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-32" style={{backgroundColor: '#F5F1EA'}}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold tracking-wider" style={{color: '#3E2C24'}}>
                About
              </h2>
              <div className="space-y-6 font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
                <p className="text-lg">
                  Founded in 2020, Megro represents a commitment to excellence in every cup. 
                  We source our beans from sustainable farms worldwide, ensuring exceptional 
                  quality and ethical practices.
                </p>
                <p className="text-lg">
                  Our master roasters craft each blend with precision, creating unique flavors 
                  that satisfy discerning palates. At Megro, coffee is an art form—a moment 
                  of connection and contemplation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#3E2C24'}}>500+</div>
                  <div className="font-semibold tracking-wide" style={{color: '#2F2F2F'}}>CUSTOMERS</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: '#3E2C24'}}>15+</div>
                  <div className="font-semibold tracking-wide" style={{color: '#2F2F2F'}}>VARIETIES</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Coffee beans and brewing equipment"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32" style={{backgroundColor: '#EDE7DC'}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-8" style={{color: '#3E2C24'}}>
              Menu
            </h2>
            <p className="text-lg max-w-2xl mx-auto font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
              Our carefully curated selection of premium coffee beverages, 
              each crafted with precision and passion.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border rounded-2xl hover:scale-[1.02] flex justify-between items-center"
                style={{backgroundColor: '#F5F1EA', borderColor: '#D4C4B0'}}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold tracking-wide mb-2" style={{color: '#3E2C24'}}>{item.name}</h3>
                  <p className="font-medium leading-relaxed" style={{color: '#2F2F2F'}}>{item.description}</p>
                </div>
                <div className="ml-8">
                  <span className="font-bold text-2xl" style={{color: '#B86B4B'}}>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32" style={{backgroundColor: '#F5F1EA'}}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-8" style={{color: '#3E2C24'}}>
              Visit
            </h2>
            <p className="text-lg max-w-2xl mx-auto font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
              Experience the Megro difference. We're open daily, ready to serve 
              you the perfect cup.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <MapPin className="mt-1" size={20} strokeWidth={1.5} style={{color: '#B86B4B'}} />
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#3E2C24'}}>Location</h3>
                  <p className="font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
                    123 Coffee Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <Clock className="mt-1" size={20} strokeWidth={1.5} style={{color: '#B86B4B'}} />
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#3E2C24'}}>Hours</h3>
                  <p className="font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
                    Monday - Friday: 6:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <Phone className="mt-1" size={20} strokeWidth={1.5} style={{color: '#B86B4B'}} />
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#3E2C24'}}>Phone</h3>
                  <p className="font-medium" style={{color: '#2F2F2F'}}>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <Mail className="mt-1" size={20} strokeWidth={1.5} style={{color: '#B86B4B'}} />
                <div>
                  <h3 className="text-xl font-bold mb-3 tracking-wide" style={{color: '#3E2C24'}}>Email</h3>
                  <p className="font-medium" style={{color: '#2F2F2F'}}>hello@megrocoffee.com</p>
                </div>
              </div>
            </div>
            
            <div className="p-12 rounded-3xl border" style={{backgroundColor: '#EDE7DC', borderColor: '#D4C4B0'}}>
              <h3 className="text-2xl font-bold mb-8 tracking-wide" style={{color: '#3E2C24'}}>Get in Touch</h3>
              <form className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold mb-3 tracking-wide" style={{color: '#2F2F2F'}}>
                    NAME
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none font-medium"
                    style={{backgroundColor: '#F5F1EA', borderColor: '#D4C4B0', color: '#2F2F2F'}}
                    onFocus={(e) => e.target.style.borderColor = '#B86B4B'}
                    onBlur={(e) => e.target.style.borderColor = '#D4C4B0'}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 tracking-wide" style={{color: '#2F2F2F'}}>
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none font-medium"
                    style={{backgroundColor: '#F5F1EA', borderColor: '#D4C4B0', color: '#2F2F2F'}}
                    onFocus={(e) => e.target.style.borderColor = '#B86B4B'}
                    onBlur={(e) => e.target.style.borderColor = '#D4C4B0'}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-3 tracking-wide" style={{color: '#2F2F2F'}}>
                    MESSAGE
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none font-medium resize-none"
                    style={{backgroundColor: '#F5F1EA', borderColor: '#D4C4B0', color: '#2F2F2F'}}
                    onFocus={(e) => e.target.style.borderColor = '#B86B4B'}
                    onBlur={(e) => e.target.style.borderColor = '#D4C4B0'}
                    placeholder="Tell us about your coffee preferences..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full text-white py-4 px-6 font-bold tracking-wider transition-all duration-300 rounded-full hover:scale-105"
                  style={{backgroundColor: '#B86B4B'}}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#A55A3F'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#B86B4B'}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20" style={{backgroundColor: '#EDE7DC'}}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-wider" style={{color: '#3E2C24'}}>MEGRO</h3>
              <p className="font-medium leading-relaxed" style={{color: '#2F2F2F'}}>
                Crafting exceptional coffee experiences since 2020. 
                Every cup tells a story of passion and quality.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 tracking-wide" style={{color: '#3E2C24'}}>Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="transition-colors duration-300 font-medium"
                    style={{color: '#2F2F2F'}}
                    onMouseEnter={(e) => e.target.style.color = '#B86B4B'}
                    onMouseLeave={(e) => e.target.style.color = '#2F2F2F'}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('menu')}
                    className="transition-colors duration-300 font-medium"
                    style={{color: '#2F2F2F'}}
                    onMouseEnter={(e) => e.target.style.color = '#B86B4B'}
                    onMouseLeave={(e) => e.target.style.color = '#2F2F2F'}
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="transition-colors duration-300 font-medium"
                    style={{color: '#2F2F2F'}}
                    onMouseEnter={(e) => e.target.style.color = '#B86B4B'}
                    onMouseLeave={(e) => e.target.style.color = '#2F2F2F'}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 tracking-wide" style={{color: '#3E2C24'}}>Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="transition-colors duration-300" style={{color: '#2F2F2F'}} onMouseEnter={(e) => e.target.style.color = '#B86B4B'} onMouseLeave={(e) => e.target.style.color = '#2F2F2F'}>
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="transition-colors duration-300" style={{color: '#2F2F2F'}} onMouseEnter={(e) => e.target.style.color = '#B86B4B'} onMouseLeave={(e) => e.target.style.color = '#2F2F2F'}>
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="transition-colors duration-300" style={{color: '#2F2F2F'}} onMouseEnter={(e) => e.target.style.color = '#B86B4B'} onMouseLeave={(e) => e.target.style.color = '#2F2F2F'}>
                  <Music size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t mt-16 pt-8 text-center" style={{borderColor: '#D4C4B0'}}>
            <p className="font-medium" style={{color: '#2F2F2F'}}>
              © 2024 Megro Coffee. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;