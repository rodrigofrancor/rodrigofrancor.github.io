import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Globe, 
  Linkedin, 
  Twitter,
  BookOpen,
  GraduationCap,
  Award,
  FileText,
  Languages,
  Menu,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import profileImage from './assets/profile.jpg'
import './App.css'

// Language content
const content = {
  en: {
    nav: {
      about: 'About',
      research: 'Research',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      title: 'Dr. [Your Name]',
      subtitle: 'Economist & Researcher',
      description: 'Specializing in [Your Research Areas] with a focus on data-driven economic analysis and policy research.',
      downloadCV: 'Download CV',
      contactMe: 'Contact Me'
    },
    about: {
      title: 'About Me',
      content: `I am an economist with expertise in [your specialization areas]. My research focuses on [describe your main research interests and methodologies]. I hold a Ph.D. in Economics from [University Name] and have published research in [mention key areas or journals].

My work combines rigorous economic theory with empirical analysis to address important policy questions. I am particularly interested in [specific research interests] and their implications for [policy areas or economic outcomes].`
    },
    research: {
      title: 'Research & Publications',
      workingPapers: 'Working Papers',
      publications: 'Published Articles',
      workInProgress: 'Work in Progress',
      papers: [
        {
          title: 'Sample Working Paper Title',
          authors: 'Your Name, Co-Author Name',
          journal: 'Under Review',
          year: '2024',
          abstract: 'This paper examines [research question] using [methodology]. We find that [key findings]. The results have important implications for [policy/theory].',
          link: '#',
          type: 'working'
        },
        {
          title: 'Published Research Article',
          authors: 'Your Name, Co-Author Name',
          journal: 'Journal of Economic Research',
          year: '2023',
          abstract: 'This study investigates [research topic] through [approach]. Our analysis reveals [findings] and contributes to the literature on [field].',
          link: '#',
          type: 'published'
        }
      ]
    },
    cv: {
      title: 'Curriculum Vitae',
      download: 'Download Full CV',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills & Expertise',
      educationItems: [
        {
          degree: 'Ph.D. in Economics',
          institution: 'University Name',
          year: '2020',
          details: 'Dissertation: "Title of Your Dissertation"'
        },
        {
          degree: 'M.A. in Economics',
          institution: 'University Name',
          year: '2016'
        }
      ],
      experienceItems: [
        {
          position: 'Current Position',
          organization: 'Institution/Company Name',
          period: '2020 - Present',
          description: 'Brief description of your current role and responsibilities.'
        },
        {
          position: 'Previous Position',
          organization: 'Previous Institution',
          period: '2018 - 2020',
          description: 'Description of previous role and achievements.'
        }
      ],
      skillsItems: [
        'Econometric Analysis',
        'Statistical Software (R, Stata, Python)',
        'Data Visualization',
        'Policy Analysis',
        'Research Design',
        'Academic Writing'
      ]
    },
    contact: {
      title: 'Contact Information',
      email: 'your.email@university.edu',
      phone: '+1 (555) 123-4567',
      address: 'Department of Economics\nUniversity Name\nCity, State 12345',
      office: 'Office: Building Name, Room 123'
    }
  },
  es: {
    nav: {
      about: 'Acerca de',
      research: 'Investigación',
      cv: 'CV',
      contact: 'Contacto'
    },
    hero: {
      title: 'Dr. [Tu Nombre]',
      subtitle: 'Economista e Investigador',
      description: 'Especializado en [Tus Áreas de Investigación] con enfoque en análisis económico basado en datos e investigación de políticas.',
      downloadCV: 'Descargar CV',
      contactMe: 'Contáctame'
    },
    about: {
      title: 'Acerca de Mí',
      content: `Soy un economista con experiencia en [tus áreas de especialización]. Mi investigación se centra en [describe tus principales intereses de investigación y metodologías]. Tengo un Ph.D. en Economía de [Nombre de la Universidad] y he publicado investigación en [menciona áreas clave o revistas].

Mi trabajo combina teoría económica rigurosa con análisis empírico para abordar importantes preguntas de política. Estoy particularmente interesado en [intereses específicos de investigación] y sus implicaciones para [áreas de política o resultados económicos].`
    },
    research: {
      title: 'Investigación y Publicaciones',
      workingPapers: 'Documentos de Trabajo',
      publications: 'Artículos Publicados',
      workInProgress: 'Trabajo en Progreso',
      papers: [
        {
          title: 'Título de Documento de Trabajo de Ejemplo',
          authors: 'Tu Nombre, Nombre del Coautor',
          journal: 'En Revisión',
          year: '2024',
          abstract: 'Este documento examina [pregunta de investigación] usando [metodología]. Encontramos que [hallazgos clave]. Los resultados tienen importantes implicaciones para [política/teoría].',
          link: '#',
          type: 'working'
        },
        {
          title: 'Artículo de Investigación Publicado',
          authors: 'Tu Nombre, Nombre del Coautor',
          journal: 'Revista de Investigación Económica',
          year: '2023',
          abstract: 'Este estudio investiga [tema de investigación] a través de [enfoque]. Nuestro análisis revela [hallazgos] y contribuye a la literatura sobre [campo].',
          link: '#',
          type: 'published'
        }
      ]
    },
    cv: {
      title: 'Currículum Vitae',
      download: 'Descargar CV Completo',
      education: 'Educación',
      experience: 'Experiencia',
      skills: 'Habilidades y Experiencia',
      educationItems: [
        {
          degree: 'Ph.D. en Economía',
          institution: 'Nombre de la Universidad',
          year: '2020',
          details: 'Tesis: "Título de Tu Tesis"'
        },
        {
          degree: 'M.A. en Economía',
          institution: 'Nombre de la Universidad',
          year: '2016'
        }
      ],
      experienceItems: [
        {
          position: 'Posición Actual',
          organization: 'Nombre de Institución/Empresa',
          period: '2020 - Presente',
          description: 'Breve descripción de tu rol actual y responsabilidades.'
        },
        {
          position: 'Posición Anterior',
          organization: 'Institución Anterior',
          period: '2018 - 2020',
          description: 'Descripción del rol anterior y logros.'
        }
      ],
      skillsItems: [
        'Análisis Econométrico',
        'Software Estadístico (R, Stata, Python)',
        'Visualización de Datos',
        'Análisis de Políticas',
        'Diseño de Investigación',
        'Escritura Académica'
      ]
    },
    contact: {
      title: 'Información de Contacto',
      email: 'tu.email@universidad.edu',
      phone: '+1 (555) 123-4567',
      address: 'Departamento de Economía\nNombre de la Universidad\nCiudad, Estado 12345',
      office: 'Oficina: Nombre del Edificio, Sala 123'
    }
  }
}

function App() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const t = content[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'research', 'cv', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="font-bold text-xl text-slate-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Dr. [Name]
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="ml-4"
              >
                <Languages className="w-4 h-4 mr-2" />
                {language === 'en' ? 'ES' : 'EN'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              >
                <Languages className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-200"
            >
              <div className="px-4 py-2 space-y-1">
                {Object.entries(t.nav).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeSection === key 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                {t.hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-6">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-5 h-5 mr-2" />
                  {t.hero.downloadCV}
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  <Mail className="w-5 h-5 mr-2" />
                  {t.hero.contactMe}
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
              {t.about.title}
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              {t.about.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
              {t.research.title}
            </h2>
            
            <div className="space-y-8">
              {t.research.papers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{paper.title}</CardTitle>
                          <CardDescription className="text-base">
                            {paper.authors} • {paper.journal} • {paper.year}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={paper.type === 'published' ? 'default' : 'secondary'}>
                            {paper.type === 'published' ? t.research.publications : t.research.workingPapers}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">{paper.abstract}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                {t.cv.title}
              </h2>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-5 h-5 mr-2" />
                {t.cv.download}
              </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                    {t.cv.education}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {t.cv.educationItems.map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <h4 className="font-semibold text-slate-900">{item.degree}</h4>
                      <p className="text-slate-600">{item.institution}</p>
                      <p className="text-sm text-slate-500">{item.year}</p>
                      {item.details && (
                        <p className="text-sm text-slate-600 mt-1">{item.details}</p>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    {t.cv.experience}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {t.cv.experienceItems.map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <h4 className="font-semibold text-slate-900">{item.position}</h4>
                      <p className="text-slate-600">{item.organization}</p>
                      <p className="text-sm text-slate-500">{item.period}</p>
                      <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    {t.cv.skills}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {t.cv.skillsItems.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              {t.contact.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-400" />
                    <span>{t.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-400" />
                    <span>{t.contact.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                    <div>
                      {t.contact.address.split('\n').map((line, index) => (
                        <div key={index}>{line}</div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-400" />
                    <span>{t.contact.office}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-600 hover:bg-slate-700">
                      <Globe className="w-4 h-4 mr-2" />
                      ORCID
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Dr. [Your Name]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

