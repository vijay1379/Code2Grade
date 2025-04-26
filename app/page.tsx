"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BarChartIcon as ChartBar,
  MonitorCog, 
  Code,
  Database,     
  FileText,
  Mail,
  MessageSquare,
  MoveRight,
  PresentationIcon,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  // Add state to control project visibility
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    price: string;
    description: string;
    content: string;
    videoUrl?: string;
    sourceLink?: string;
    badges: string[];
    icon: React.ReactNode;
  } | null>(null);

  // All project cards data (you can keep this outside the component if preferred)
  const projectCards = [
    {
      title: "Sentiment Analysis System",
      price: "₹6,500",
      description: "Analyze customer reviews and social media comments to determine sentiment",
      icon: <Brain className="h-16 w-16 text-muted-foreground/50" />,
      badges: ["Python", "NLTK", "BERT"],
      content: "A complete sentiment analysis system that processes text data and classifies it as positive, negative, or neutral with detailed analytics.",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      sourceLink: "https://github.com/yourusername/sentiment-analysis"
    },
    {
      title: "Predictive Analytics Dashboard",
      price: "₹7,000",
      description: "Interactive dashboard with predictive capabilities for business data",
      icon: <ChartBar className="h-16 w-16 text-muted-foreground/50" />,
      badges: ["Python", "TensorFlow", "Dash"],
      content: "A comprehensive dashboard that visualizes business metrics and uses machine learning to predict future trends.",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      sourceLink: "https://github.com/yourusername/predictive-dashboard"
    },
    {
      title: "Recommendation Engine",
      price: "₹6,000",
      description: "Content-based and collaborative filtering recommendation system",
      icon: <Database className="h-16 w-16 text-muted-foreground/50" />,
      badges: ["Python", "Scikit-learn", "Flask"],
      content: "A recommendation system that suggests products or content based on user behavior and preferences.",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      sourceLink: "https://github.com/yourusername/recommendation-engine"
    },
    {
      title: "Image Classification System",
      price: "₹5,500",
      description: "Deep learning model for classifying images into different categories",
      icon: <Brain className="h-16 w-16 text-muted-foreground/50" />,
      badges: ["Python", "TensorFlow", "CNN"],
      content: "An image classification system using convolutional neural networks with a user-friendly interface.",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      sourceLink: "https://github.com/yourusername/image-classification"
    },
    {
      title: "Fraud Detection System",
      price: "₹6,800",
      description: "Machine learning system to detect fraudulent transactions",
      icon: <ChartBar className="h-16 w-16 text-muted-foreground/50" />,
      badges: ["Python", "Scikit-learn", "XGBoost"],
      content: "A fraud detection system that identifies suspicious transactions using advanced machine learning algorithms.",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      sourceLink: "https://github.com/yourusername/fraud-detection"
    },
    {
      title: "Stock Price Prediction",
      price: "₹5,800",
      description: "Time series forecasting model for stock price prediction",
      icon: <Database className="h-16 w-16 text-muted-foreground/50" />,
      badges: ["Python", "LSTM", "Pandas"],
      content: "A stock price prediction system using LSTM neural networks with historical data analysis and visualization.",
      videoUrl: "https://www.youtube.com/embed/your-video-id",
      sourceLink: "https://github.com/yourusername/stock-prediction"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl">
            <Brain className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Code2Grade</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          
          <Button asChild className="hidden md:flex">
            <Link href="#contact">Request a Project</Link>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b">
            <nav className="container flex flex-col gap-4 py-4">
              <Link
                href="#projects"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Request a Project
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  AI & Data Science Projects for Students
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                  Showcasing my portfolio of completed AI/ML and data science projects. Similar custom projects
                  available for students.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                  <Button size="lg" asChild className="w-full sm:w-auto">
                    <Link href="#projects">
                      View My Work
                      <MoveRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                    <Link href="#contact">Request a Project</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-20 blur-xl"></div>
                  <div className="relative bg-background rounded-lg shadow-lg p-4 sm:p-6 h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-muted rounded-lg">
                        <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                        <span className="text-xs sm:text-sm font-medium">AI/ML</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-muted rounded-lg">
                        <ChartBar className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                        <span className="text-xs sm:text-sm font-medium">Data Analysis</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-muted rounded-lg">
                        <MonitorCog className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                        <span className="text-xs sm:text-sm font-medium">Web</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-muted rounded-lg">
                        <Code className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                        <span className="text-xs sm:text-sm font-medium">Development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Completed Projects</h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl">
                A showcase of AI and data science projects I've built for students
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(showAllProjects ? projectCards : projectCards.slice(0, 3)).map((project, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="h-40 sm:h-48 bg-muted rounded-md flex items-center justify-center mb-4">
                      {project.icon}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                      <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        Similar projects from {project.price}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.badges.map((badge, i) => (
                        <Badge key={i} className="text-xs sm:text-sm">{badge}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.content}
                    </p>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <PresentationIcon className="h-4 w-4" />
                      <span>PPT Included</span>
                      <FileText className="h-4 w-4 ml-3" />
                      <span>Report Included</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8 sm:mt-10">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="w-full sm:w-auto"
              >
                {showAllProjects ? "Show Less" : "View More Projects"}
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Services Offered</h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl">
                Custom AI and data science projects for students
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-background">
                <CardHeader>
                  <Brain className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle className="text-lg sm:text-xl">AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Computer Vision & Image Processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Image & Speech Recognition
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Natural Language Processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Recommendation Systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      CNN & RNN Models
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <ChartBar className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Data Science & Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Data Visualization Dashboards
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Statistical Analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Time Series Forecasting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Market Basket Analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Customer Segmentation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <Database className="h-8 w-8 sm:h-10 sm:w-10 text-primary mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Database Design & Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Web Applications
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      API Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Cloud-based Solutions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-12 sm:py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Project Pricing</h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl">
                Transparent pricing for custom AI and data science projects
              </p>
            </div>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Basic Package</CardTitle>
                  <CardDescription>Source code only</CardDescription>
                  <div className="mt-4 text-3xl sm:text-4xl font-bold">₹5,000-6,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Complete source code
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Basic documentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Installation instructions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-background border-primary">
                <CardHeader>
                  <div className="py-1 px-3 bg-primary text-primary-foreground rounded-full text-xs font-medium w-fit mx-auto mb-2">
                    MOST POPULAR
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Complete Package</CardTitle>
                  <CardDescription>Code + Documentation + Presentation</CardDescription>
                  <div className="mt-4 text-3xl sm:text-4xl font-bold">₹6,500-7,000</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Complete source code
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Comprehensive documentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Professional PowerPoint presentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Detailed project report
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Priority email support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="#contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Premium Package</CardTitle>
                  <CardDescription>Complex projects with advanced features</CardDescription>
                  <div className="mt-4 text-3xl sm:text-4xl font-bold">Custom Pricing</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Advanced project implementation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Comprehensive documentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Professional PowerPoint presentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Detailed project report
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Video walkthrough
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Premium support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="#contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl">
                Simple process to get your custom project
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-4 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Discuss Requirements</h3>
                <p className="text-sm text-muted-foreground">Share your project requirements and academic needs</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Get a Quote</h3>
                <p className="text-sm text-muted-foreground">Receive a detailed quote based on your project scope</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Project Development</h3>
                <p className="text-sm text-muted-foreground">I build your project with regular updates</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery & Support</h3>
                <p className="text-sm text-muted-foreground">
                  Receive your complete project with documentation and support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Request a Project</h2>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
                  Need a custom AI or data science project for your Final Year or Internship Project? Fill out the form and I'll get back to you
                  within 24 hours with project details and pricing.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Project Request Form</CardTitle>
                  <CardDescription>Tell me about your project requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="https://formspree.io/f/xrbqbkkk" method="POST" className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="project-type"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Project Type
                      </label>
                      <select
                        id="project-type"
                        name="projectType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="ai">AI/Machine Learning</option>
                        <option value="data">Data Science/Analytics</option>
                        <option value="bigdata">Web Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="package"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Preferred Package
                      </label>
                      <select
                        id="package"
                        name="package"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select a package</option>
                        <option value="basic">Basic (Code Only)</option>
                        <option value="complete">Complete (Code + PPT + Report)</option>
                        <option value="premium">Premium (Complex Project)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="requirements"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Project Requirements
                      </label>
                      <textarea
                        id="requirements"
                        name="requirements"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Describe your project requirements, deadline, and any specific features needed"
                        required
                      />
                    </div>
                    <input type="text" name="_gotcha" style={{ display: 'none' }} />
                    <input type="hidden" name="_next" value="https://your-website.com/thank-you" />
                    <input type="hidden" name="_subject" value="New AI Project Request" />
                    <Button type="submit" className="w-full">Submit Request</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Student Feedback</h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl">What students say about my projects</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm sm:text-base">RS</span>
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">Rahul S.</CardTitle>
                      <CardDescription>Computer Science Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "The sentiment analysis project was exactly what I needed for my final year project. The code was
                    well-documented and the presentation helped me explain the concepts clearly to my professors."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm sm:text-base">AP</span>
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">Ananya P.</CardTitle>
                      <CardDescription>Data Science Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "The recommendation system project was comprehensive and well-implemented. The report was detailed
                    and helped me understand the underlying algorithms. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-semibold text-primary text-sm sm:text-base">VK</span>
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg">Vikram K.</CardTitle>
                      <CardDescription>AI Specialization Student</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    "The image classification project was excellent. The code was clean and well-structured, and the
                    presentation slides were professional. I received great feedback from my professors."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        description={selectedProject?.description || ""}
        content={selectedProject?.content || ""}
        videoUrl={selectedProject?.videoUrl}
        sourceLink={selectedProject?.sourceLink}
        badges={selectedProject?.badges}
        icon={selectedProject?.icon}
      />

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 Code2Grade All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
