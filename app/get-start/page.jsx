import Link from "next/link";
import {
  Smartphone,
  Car,
  Baby,
  ShoppingCart,
  Truck,
  HeartPulse,
  GraduationCap,
  Gamepad2,
  Video,
  Music,
  Wallet,
  Bot,
  Rocket,
  Database,
  Home,
  Globe,
  Megaphone,
} from "lucide-react";

export default function TrendingSolutionsPage() {

  const solutions = [
  // Mobile Apps
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    desc: "Custom Android & iOS mobile apps",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    slug: "mobile-application-development",
    desc: "End-to-end app development services",
  },
  {
    icon: Smartphone,
    title: "iPhone App Development",
    slug: "iphone-app-development",
    desc: "Native iOS application solutions",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    slug: "android-app-development",
    desc: "Scalable Android applications",
  },
  {
    icon: Smartphone,
    title: "Hybrid App Development",
    slug: "hybrid-app-development",
    desc: "Cross-platform mobile apps",
  },
  {
    icon: Smartphone,
    title: "Native Mobile App Development",
    slug: "native-mobile-app-development",
    desc: "High-performance native applications",
  },
  {
    icon: Smartphone,
    title: "React Native Development",
    slug: "react-native-development",
    desc: "React Native mobile solutions",
  },
  {
    icon: Smartphone,
    title: "iPad App Development",
    slug: "ipad-app-development",
    desc: "Custom iPad application development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    slug: "mobile-app-design",
    desc: "UI/UX focused app design",
  },
  {
    icon: Smartphone,
    title: "Wearable App Development",
    slug: "wearable-app-development",
    desc: "Smartwatch & wearable applications",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    slug: "progressive-web-apps",
    desc: "Fast & installable web applications",
  },
  {
    icon: Smartphone,
    title: "Mobile App Prototyping",
    slug: "mobile-app-prototyping",
    desc: "Clickable product prototypes",
  },

  // Software Development
  {
    icon: Database,
    title: "Software Development",
    slug: "software-development",
    desc: "Custom software solutions",
  },
  {
    icon: Database,
    title: "Custom Software Development",
    slug: "custom-software-development",
    desc: "Tailored software systems",
  },
  {
    icon: Database,
    title: "Software Product Development",
    slug: "software-product-development",
    desc: "Build & launch software products",
  },
  {
    icon: Database,
    title: "Enterprise Product Development",
    slug: "enterprise-product-development",
    desc: "Enterprise-grade applications",
  },
  {
    icon: Database,
    title: "SaaS Application Development",
    slug: "saas-application-development",
    desc: "Cloud-based SaaS platforms",
  },
  {
    icon: Database,
    title: "Application Maintenance & Support",
    slug: "application-maintenance-support",
    desc: "Ongoing software maintenance",
  },
  {
    icon: Database,
    title: "Software Testing",
    slug: "software-testing",
    desc: "QA & automated testing services",
  },
  {
    icon: Database,
    title: "Low-Code Development",
    slug: "low-code-development",
    desc: "Rapid low-code application delivery",
  },
  {
    icon: Database,
    title: "Medical Device Software",
    slug: "medical-device-software",
    desc: "Healthcare software solutions",
  },

  // Web Development
  {
    icon: Globe,
    title: "Web Development",
    slug: "web-development",
    desc: "Modern web application development",
  },
  {
    icon: Globe,
    title: "Web Development Services",
    slug: "web-development-services",
    desc: "Professional website solutions",
  },
  {
    icon: Globe,
    title: "Web Development Consulting",
    slug: "web-development-consulting",
    desc: "Technical consulting services",
  },
  {
    icon: Globe,
    title: "Custom Web Development",
    slug: "custom-web-development",
    desc: "Fully customized web platforms",
  },
  {
    icon: Globe,
    title: "Web Design",
    slug: "web-design",
    desc: "Modern UI/UX web design",
  },
  {
    icon: Globe,
    title: "Web Portal Development",
    slug: "web-portal-development",
    desc: "Business portal solutions",
  },
  {
    icon: Globe,
    title: "Business Website Development",
    slug: "business-website-development",
    desc: "Corporate website development",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Development",
    slug: "ecommerce-development",
    desc: "Online store development",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    slug: "wordpress-development",
    desc: "Custom WordPress websites",
  },
  {
    icon: ShoppingCart,
    title: "Magento Development",
    slug: "magento-development",
    desc: "Magento ecommerce solutions",
  },
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    slug: "shopify-development",
    desc: "Shopify store development",
  },
  {
    icon: Globe,
    title: "Website Maintenance",
    slug: "website-maintenance",
    desc: "Website support & maintenance",
  },
  {
    icon: Globe,
    title: "Website Redesign",
    slug: "website-redesign",
    desc: "Modern website redesign",
  },
  {
    icon: Globe,
    title: "Website Migration",
    slug: "website-migration",
    desc: "Safe website migration services",
  },

  // Full Stack
  {
    icon: Database,
    title: "Full Stack Development",
    slug: "full-stack-development",
    desc: "Frontend + backend development",
  },
  {
    icon: Database,
    title: "PHP Development",
    slug: "php-development",
    desc: "Custom PHP solutions",
  },
  {
    icon: Database,
    title: "Laravel Development",
    slug: "laravel-development",
    desc: "Laravel web applications",
  },
  {
    icon: Database,
    title: "CodeIgniter Development",
    slug: "codeigniter-development",
    desc: "CodeIgniter solutions",
  },
  {
    icon: Database,
    title: "CakePHP Development",
    slug: "cakephp-development",
    desc: "CakePHP development services",
  },
  {
    icon: Database,
    title: "Django Development",
    slug: "django-development",
    desc: "Python Django applications",
  },
  {
    icon: Database,
    title: "Python Development",
    slug: "python-development",
    desc: "Custom Python software",
  },
  {
    icon: Database,
    title: "Node.js Development",
    slug: "nodejs-development",
    desc: "Node.js backend development",
  },
  {
    icon: Database,
    title: "AngularJS Development",
    slug: "angularjs-development",
    desc: "Angular web applications",
  },
  {
    icon: Database,
    title: "Vue.js Development",
    slug: "vuejs-development",
    desc: "Vue.js frontend solutions",
  },
  {
    icon: Database,
    title: "MEAN Stack Development",
    slug: "mean-stack-development",
    desc: "MongoDB, Express, Angular, Node",
  },
  {
    icon: Database,
    title: "Golang Development",
    slug: "golang-development",
    desc: "High-performance Go applications",
  },

  // AI
  {
    icon: Bot,
    title: "AI Development",
    slug: "ai-development",
    desc: "Custom AI solutions",
  },
  {
    icon: Bot,
    title: "AI Consulting",
    slug: "ai-consulting",
    desc: "AI strategy & consulting",
  },
  {
    icon: Bot,
    title: "Generative AI Development",
    slug: "generative-ai-development",
    desc: "ChatGPT & LLM solutions",
  },
  {
    icon: Bot,
    title: "Machine Learning Development",
    slug: "machine-learning-development",
    desc: "Predictive AI models",
  },
  {
    icon: Bot,
    title: "Deep Learning Development",
    slug: "deep-learning-development",
    desc: "Advanced neural networks",
  },
  {
    icon: Bot,
    title: "Natural Language Processing",
    slug: "natural-language-processing",
    desc: "Text & language AI solutions",
  },
  {
    icon: Bot,
    title: "Predictive Analytics",
    slug: "predictive-analytics",
    desc: "Forecasting & data insights",
  },
  {
    icon: Bot,
    title: "ChatGPT Integration",
    slug: "chatgpt-integration",
    desc: "AI chatbot integrations",
  },

  // Marketing & Enterprise
  {
    icon: Megaphone,
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "Online marketing services",
  },
  {
    icon: Megaphone,
    title: "SEO Services",
    slug: "seo-services",
    desc: "Search engine optimization",
  },
  {
    icon: Globe,
    title: "Web Hosting",
    slug: "web-hosting",
    desc: "Managed hosting services",
  },
  {
    icon: Rocket,
    title: "CRM Development",
    slug: "crm-development",
    desc: "Customer relationship systems",
  },
  {
    icon: Rocket,
    title: "Business Intelligence",
    slug: "business-intelligence",
    desc: "Data analytics & dashboards",
  },
  {
    icon: Rocket,
    title: "Startup Solutions",
    slug: "startup-solutions",
    desc: "MVP & startup development",
  },
];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50 text-slate-900 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-cyan-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-blue-300/30 rounded-full blur-[120px]" />
      </div>

      {/* HERO */}
      <section className="px-4 sm:px-6 py-20 md:py-32">

        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex px-5 py-2 rounded-full bg-white/70 backdrop-blur-2xl border border-white/70 shadow-lg text-sm">
            Trending Services
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            94+ services
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              Satisfying services
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Pre-built scalable app solutions across industries — designed to launch faster, cheaper, and smarter.
          </p>

        </div>

      </section>

      {/* GRID */}
      <section className="px-4 sm:px-6 pb-24">

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[32px] bg-white/60 backdrop-blur-2xl border border-white/70 shadow-xl p-6 md:p-8 hover:-translate-y-2 transition"
              >

                {/* glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-cyan-100/20 opacity-0 group-hover:opacity-100 transition" />

                <div className="relative">

                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-600" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-600 text-sm">
                    {item.desc}
                  </p>

                  <button className="mt-5 text-sm text-cyan-600 font-medium hover:underline">
                    Explore →
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-20 md:py-24">

        <div className="max-w-5xl mx-auto text-center relative overflow-hidden rounded-[40px] bg-white/60 backdrop-blur-3xl border border-white/70 p-8 md:p-14 shadow-2xl">

          <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/40 via-white/20 to-blue-100/40" />

          <div className="relative">

            <h2 className="text-3xl md:text-5xl font-bold">
              Want a Custom Trending Solution?
            </h2>

            <p className="mt-4 text-slate-600">
              We can customize any blueprint into your own scalable product.
            </p>

            <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:scale-105 transition">
              Get Started
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}