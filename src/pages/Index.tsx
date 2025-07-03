import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, TreePine, Bird, Star, Palette, Play, Search, Laptop, Users, Clock, Utensils, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <TreePine className="h-8 w-8 text-green-600" />
                <Bird className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">My Tree Birds</h1>
                <p className="text-xs text-gray-600">Day Care</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About Us</a>
              <a href="#programs" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Programs</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Enroll Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-6">
              <TreePine className="h-12 w-12 text-green-600 animate-pulse" />
              <Bird className="h-10 w-10 text-blue-500 animate-bounce" />
              <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              My Tree Birds
              <span className="block text-green-600">Day Care</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Where Little Ones Learn, Grow, and Flourish
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all">
                Discover Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <h4 className="text-xl font-semibold text-green-700 mb-4">Nurturing Young Children</h4>
                <p className="text-gray-600 leading-relaxed">
                  At My Tree Birds Day Care, we are dedicated to providing a nurturing and inclusive environment for young children. Our curriculum is designed to foster creativity and curiosity through interactive learning methods, incorporating play-based activities, early childhood development techniques, and sensory exploration.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We believe in nurturing children's character alongside their early education, offering enriching programs in arts, music, and language development. Our commitment is evident through engaging activities, dynamic learning experiences, and community engagement that signify our focus on holistic growth and empowerment.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Story</h3>
                </div>
                <h4 className="text-xl font-semibold text-blue-700 mb-4">Building Bright Futures</h4>
                <p className="text-gray-600 leading-relaxed">
                  With a rich history of nurturing young children, My Tree Birds Day Care has been a cornerstone of early childhood development for many years. Our journey has been characterized by an unwavering commitment to providing quality care and educational experiences for young children.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We have consistently adapted to meet the evolving needs of early childhood education, ensuring that our little ones receive the best foundation for their future. Our legacy is defined by a tradition of excellence in early childhood development and a nurturing environment that has shaped numerous young minds.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all">
              Discover More
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6">Comprehensive learning experiences designed for every child</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Arts & Crafts</h3>
                <Badge className="bg-pink-100 text-pink-700 mb-4">Creative Expression</Badge>
                <p className="text-gray-600">Unleash creativity through painting, drawing, and crafting activities that develop fine motor skills and artistic expression.</p>
              </div>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Physical Development</h3>
                <Badge className="bg-orange-100 text-orange-700 mb-4">Active Play</Badge>
                <p className="text-gray-600">Build strength, coordination, and healthy habits through structured physical activities and outdoor playtime.</p>
              </div>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Discovery & Exploration</h3>
                <Badge className="bg-purple-100 text-purple-700 mb-4">Curiosity Building</Badge>
                <p className="text-gray-600">Foster natural curiosity through hands-on experiments, nature walks, and interactive learning experiences.</p>
              </div>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Laptop className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Technology</h3>
                <Badge className="bg-blue-100 text-blue-700 mb-4">Digital Literacy</Badge>
                <p className="text-gray-600">Introduce age-appropriate technology skills through educational games and interactive learning tools.</p>
              </div>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">STEM Education</h3>
                <Badge className="bg-green-100 text-green-700 mb-4">Future Ready</Badge>
                <p className="text-gray-600">Build foundation in science, technology, engineering, and math through fun, hands-on activities and experiments.</p>
              </div>
            </Card>

            <Card className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Social Skills</h3>
                <Badge className="bg-yellow-100 text-yellow-700 mb-4">Community Building</Badge>
                <p className="text-gray-600">Develop communication, empathy, and teamwork skills through group activities and collaborative play.</p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Stay Connected With Us</p>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all">
              Learn More About Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Meal Services</h3>
                <p className="text-gray-600 mb-6">Nutritious, balanced meals prepared fresh daily to support healthy growth and development.</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>1 hr</span>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Book Now
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-pink-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-pink-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Arts & Crafts</h3>
                <p className="text-gray-600 mb-6">Creative sessions that inspire imagination and develop fine motor skills through various artistic activities.</p>
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  Book Now
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center">
                <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Daily Care</h3>
                <p className="text-gray-600 mb-6">Comprehensive daily care including supervision, learning activities, and personal attention for each child.</p>
                <Button className="w-full bg-blue-600 hover:blue-700">
                  Book Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stay Connected With Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 mb-8">
            Ready to give your child the best start? Contact us today to learn more about our programs and schedule a visit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all">
              Contact Us Today
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="h-8 w-8 text-green-400" />
                <Bird className="h-6 w-6 text-blue-400" />
                <div>
                  <h3 className="text-xl font-bold">My Tree Birds</h3>
                  <p className="text-sm text-gray-400">Day Care</p>
                </div>
              </div>
              <p className="text-gray-400">Where Little Ones Learn, Grow, and Flourish</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Arts & Crafts</li>
                <li>Physical Development</li>
                <li>STEM Education</li>
                <li>Social Skills</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Learning Lane</p>
                <p>📞 (555) 123-4567</p>
                <p>✉️ info@mytreebirds.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 My Tree Birds Day Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
