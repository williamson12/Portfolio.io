import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Code, 
  Database, 
  Shield, 
  Brain,
  Star,
  ExternalLink,
  ChevronRight,
  Award,
  Calendar,
  Building,
  User,
  Trophy,
  Crown,
  Sparkles,
  Zap,
  Target,
  Eye,
  TrendingUp,
  Users,
  Search
} from "lucide-react";
import { mockData } from "../mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillCategories = {
    "AI/ML": { color: "from-amber-400 to-orange-600", textColor: "text-amber-900", icon: Brain },
    "Analytics": { color: "from-purple-500 to-pink-600", textColor: "text-purple-900", icon: TrendingUp },
    "Database": { color: "from-blue-500 to-cyan-600", textColor: "text-blue-900", icon: Database },
    "Strategy": { color: "from-emerald-500 to-teal-600", textColor: "text-emerald-900", icon: Target },
    "Programming": { color: "from-indigo-500 to-purple-600", textColor: "text-indigo-900", icon: Code },
    "Security": { color: "from-red-500 to-rose-600", textColor: "text-red-900", icon: Shield },
    "Infrastructure": { color: "from-gray-500 to-slate-600", textColor: "text-gray-900", icon: Building }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,215,0,0.1), transparent 40%)`
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-gold-500/20">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
              WE
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Testimonials", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-gold-400 relative group ${
                    activeSection === item.toLowerCase() ? "text-gold-400" : "text-white/80"
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-gold-500 to-amber-600 text-black hover:from-gold-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
            >
              <Crown className="w-4 h-4 mr-2" />
              Connect
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-6 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/30 to-black/40"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-gold-400/20 to-amber-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-bounce"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Sparkles className="w-6 h-6 text-gold-400" />
                  <span className="text-gold-400 font-medium tracking-wider uppercase text-sm">
                    Tech Visionary
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-8xl font-light tracking-tight">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Willson
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gold-400 via-amber-500 to-gold-600 bg-clip-text text-transparent font-bold">
                    Emerald
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-xl">
                  {mockData.personal.tagline}
                </p>
                
                <p className="text-lg text-gold-400 font-medium">
                  {mockData.personal.subtitle}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">{mockData.stats.followers}</div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">{mockData.stats.connections}</div>
                  <div className="text-sm text-gray-400">Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">{mockData.stats.profileViews}</div>
                  <div className="text-sm text-gray-400">Profile Views</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-amber-600 text-black hover:from-gold-400 hover:to-amber-500 transition-all duration-300 group shadow-lg hover:shadow-gold-500/25"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View Innovations
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 transition-all duration-300"
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Let's Collaborate
                </Button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/30 to-amber-500/30 blur-3xl rounded-full scale-110"></div>
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-gold-400/50 shadow-2xl">
                  <img
                    src={mockData.personal.profileImage}
                    alt="Willson Emerald"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                  <Crown className="w-4 h-4 inline mr-1" />
                  AI Innovator
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <Trophy className="w-4 h-4 inline mr-1" />
                  Harvard Alumnus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-purple-900/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
                Visionary
              </span>
              <span className="text-white"> Story</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {mockData.personal.bio}
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {mockData.personal.vision}
                </p>
                <blockquote className="border-l-4 border-gold-400 pl-6 italic text-gold-200 text-lg">
                  "{mockData.personal.philosophy}"
                </blockquote>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gold-500/10 to-amber-600/10 p-6 rounded-xl border border-gold-400/20">
                  <Crown className="w-8 h-8 text-gold-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Elite Training</h3>
                  <p className="text-sm text-gray-400">Harvard-Aspire & McKinsey Forward Alumni</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-xl border border-purple-400/20">
                  <Brain className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">AI Innovation</h3>
                  <p className="text-sm text-gray-400">Leading next-gen AI solutions</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 rounded-xl border border-emerald-400/20">
                  <Target className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Strategic Vision</h3>
                  <p className="text-sm text-gray-400">Digital transformation expertise</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 p-6 rounded-xl border border-blue-400/20">
                  <Shield className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Security First</h3>
                  <p className="text-sm text-gray-400">Cybersecurity foundations</p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="bg-gradient-to-br from-black/40 to-purple-900/20 p-8 rounded-2xl border border-gold-400/20 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-gold-400 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Elite Credentials
              </h3>
              
              <div className="space-y-6">
                {/* Current Education */}
                <div className="border-l-4 border-gold-400 pl-6">
                  <h4 className="font-semibold text-white text-lg">{mockData.education.current.degree}</h4>
                  <p className="text-gold-300">{mockData.education.current.institution}</p>
                  <p className="text-sm text-gray-400">{mockData.education.current.duration} • {mockData.education.current.specialization}</p>
                </div>

                <Separator className="bg-gray-600" />

                {/* Executive Programs */}
                <div className="space-y-4">
                  {mockData.education.executive.map((program, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Crown className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-white">{program.program}</p>
                        <p className="text-gold-300 text-sm">{program.institution}</p>
                        <p className="text-gray-400 text-xs">{program.year} • {program.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="bg-gray-600" />

                {/* Key Certifications */}
                <div className="space-y-3">
                  {mockData.certifications.slice(0, 3).map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Trophy className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-white text-sm">{cert.name}</p>
                        <p className="text-amber-300 text-xs">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/20 to-black/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              <span className="text-white">Elite </span>
              <span className="bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(
              mockData.skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
              }, {})
            ).map(([category, skills]) => {
              const categoryInfo = skillCategories[category] || { color: "from-gray-500 to-slate-600", textColor: "text-gray-900", icon: Code };
              const IconComponent = categoryInfo.icon;
              
              return (
                <Card key={category} className="bg-gradient-to-br from-black/40 to-gray-900/40 border border-gold-400/20 backdrop-blur-sm hover:border-gold-400/40 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryInfo.color} shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-gold-400 transition-colors">{category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gold-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${categoryInfo.color} transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-purple-900/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
                Leadership
              </span>
              <span className="text-white"> Journey</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {mockData.experience.map((exp, index) => (
              <Card key={exp.id} className="bg-gradient-to-br from-black/40 to-gray-900/40 border border-gold-400/20 backdrop-blur-sm hover:border-gold-400/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className="flex items-start space-x-3 mb-4">
                        {exp.type === 'leadership' ? (
                          <Crown className="w-6 h-6 text-gold-400 mt-1" />
                        ) : (
                          <Trophy className="w-6 h-6 text-amber-400 mt-1" />
                        )}
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-gold-300 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gold-400 mb-3 flex items-center">
                          <Zap className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} className="bg-gradient-to-r from-gold-500/20 to-amber-600/20 text-gold-300 border border-gold-400/30 hover:bg-gold-500/30 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/20 to-black/50"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              <span className="text-white">Innovation </span>
              <span className="bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.projects.map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-black/40 to-gray-900/40 border border-gold-400/20 backdrop-blur-sm hover:border-gold-400/40 transition-all duration-300 group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 text-purple-300 border border-purple-400/30">
                      {project.category}
                    </Badge>
                    <ExternalLink className="w-5 h-5 text-gold-400 group-hover:text-gold-300 transition-colors cursor-pointer" />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-400">{project.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gold-400 mb-2 text-sm flex items-center">
                      <Sparkles className="w-4 h-4 mr-1" />
                      Impact Highlights
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="w-3 h-3 text-gold-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gold-400/30 text-gold-300 hover:bg-gold-400/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-purple-900/30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
                Elite
              </span>
              <span className="text-white"> Endorsements</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-black/40 to-gray-900/40 border border-gold-400/20 backdrop-blur-sm hover:border-gold-400/40 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-gold-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gold-300">{testimonial.position}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-purple-900/50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-light mb-6">
            <span className="text-white">Let's Create </span>
            <span className="bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Connect with a Harvard-trained AI innovator who brings strategic thinking and technical mastery to every collaboration.
          </p>

          {/* Contact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-gold-500/10 to-amber-600/10 p-6 rounded-xl border border-gold-400/20">
              <Eye className="w-8 h-8 text-gold-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gold-400">{mockData.stats.profileViews}</div>
              <div className="text-sm text-gray-400">Profile Views</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-xl border border-purple-400/20">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-purple-400">{mockData.stats.postImpressions}</div>
              <div className="text-sm text-gray-400">Post Impressions</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 p-6 rounded-xl border border-emerald-400/20">
              <Search className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-400">{mockData.stats.searchAppearances}</div>
              <div className="text-sm text-gray-400">Search Appearances</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <a
              href={`mailto:${mockData.personal.email}`}
              className="flex items-center space-x-3 text-gray-300 hover:text-gold-400 transition-colors group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">{mockData.personal.email}</span>
            </a>
            <a
              href={`https://${mockData.personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-gold-400 transition-colors group"
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg">LinkedIn Profile</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => window.open(`mailto:${mockData.personal.email}`, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-amber-600 text-black hover:from-gold-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-gold-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Elite Message
            </Button>
            <Button
              onClick={() => window.open(`https://${mockData.personal.linkedin}`, '_blank')}
              variant="outline"
              size="lg"
              className="border-gold-400/50 text-gold-400 hover:bg-gold-400/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gold-400/20 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-amber-500 bg-clip-text text-transparent">
              Willson Emerald
            </div>
            <p className="text-lg text-gray-300">Tech Visionary • Harvard Alumnus • AI Innovator</p>
            <p className="text-sm">© 2025 Willson Emerald. Crafted with luxury precision and innovative vision.</p>
            <p className="text-xs text-gold-400">Building tomorrow's AI solutions, today.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;