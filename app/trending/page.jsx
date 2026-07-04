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
  // On Demand & Lifestyle
  { icon: Car, title: "Taxi Booking App", desc: "Uber-like taxi booking solution" },
  { icon: Smartphone, title: "On-Demand App", desc: "Multi-service booking platform" },
  { icon: Smartphone, title: "Home Services App", desc: "Plumber, electrician & handyman booking" },
  { icon: Smartphone, title: "Laundry App", desc: "Laundry pickup & delivery platform" },
  { icon: Smartphone, title: "Salon App", desc: "Salon & beauty appointment booking" },
  { icon: Smartphone, title: "Massage Booking App", desc: "Spa & massage scheduling system" },
  { icon: Smartphone, title: "Dating App", desc: "Modern dating & matchmaking solution" },
  { icon: Smartphone, title: "Matrimonial App", desc: "Marriage matchmaking platform" },
  { icon: HeartPulse, title: "Fitness App", desc: "Workout & fitness tracking application" },
  { icon: HeartPulse, title: "Yoga App", desc: "Online yoga classes platform" },
  { icon: Smartphone, title: "Lifestyle App", desc: "Lifestyle & productivity solution" },
  { icon: Smartphone, title: "Dog Walking App", desc: "Pet care booking platform" },
  { icon: Smartphone, title: "Pest Control App", desc: "Pest control booking system" },
  { icon: Car, title: "Car Wash App", desc: "On-demand car cleaning service" },
  { icon: Car, title: "Car Service App", desc: "Vehicle maintenance booking platform" },
  { icon: Car, title: "Car Rental Software", desc: "Fleet & rental management solution" },

  // Healthcare & Education
  { icon: HeartPulse, title: "Doctor Appointment App", desc: "Online doctor consultation platform" },
  { icon: HeartPulse, title: "Healthcare App", desc: "Complete healthcare management system" },
  { icon: Truck, title: "Medicine Delivery App", desc: "Online pharmacy delivery solution" },
  { icon: Smartphone, title: "Lawyer App", desc: "Legal consultation booking platform" },
  { icon: Smartphone, title: "Legal Software", desc: "Law firm management solution" },
  { icon: GraduationCap, title: "Kids Learning App", desc: "Interactive learning application" },
  { icon: GraduationCap, title: "Tutor App", desc: "Tutor & student marketplace" },
  { icon: GraduationCap, title: "School Management", desc: "School ERP & management software" },
  { icon: Baby, title: "Childcare Management", desc: "Daycare management system" },
  { icon: Baby, title: "Baby Tracking App", desc: "Child growth monitoring solution" },

  // Commerce Retail Finance
  { icon: ShoppingCart, title: "Shopping App", desc: "Mobile commerce application" },
  { icon: ShoppingCart, title: "Fashion eCommerce", desc: "Fashion online store platform" },
  { icon: ShoppingCart, title: "Grocery App", desc: "Online grocery delivery system" },
  { icon: Truck, title: "Food Donation App", desc: "Food donation & NGO platform" },
  { icon: Truck, title: "Food Truck Website", desc: "Food truck business website" },
  { icon: ShoppingCart, title: "Cloud Kitchen Management", desc: "Restaurant kitchen management" },
  { icon: Wallet, title: "Drive-Thru POS", desc: "Point of sale software" },
  { icon: Wallet, title: "Supermarket Billing", desc: "Retail billing solution" },
  { icon: Wallet, title: "eWallet App", desc: "Digital wallet application" },
  { icon: Wallet, title: "Expense Management", desc: "Business expense tracking" },
  { icon: Wallet, title: "Invoice Software", desc: "Invoice generation system" },
  { icon: Wallet, title: "Trading Software", desc: "Trading & investment platform" },
  { icon: Wallet, title: "Loyalty App", desc: "Customer rewards platform" },
  { icon: Wallet, title: "Online Bookkeeping", desc: "Accounting software solution" },
  { icon: Wallet, title: "Crowdfunding App", desc: "Fundraising platform" },
  { icon: ShoppingCart, title: "Auction App", desc: "Online bidding platform" },
  { icon: ShoppingCart, title: "Classified App", desc: "Buy & sell marketplace" },

  // Travel Media Sports Social
  { icon: Smartphone, title: "Hotel Booking App", desc: "Hotel reservation system" },
  { icon: Smartphone, title: "Travel & Tours Platform", desc: "Tour booking solution" },
  { icon: Video, title: "OTT Streaming App", desc: "Netflix-like OTT platform" },
  { icon: Music, title: "Music Streaming App", desc: "Spotify-like music app" },
  { icon: Video, title: "Video Streaming App", desc: "Live streaming solution" },
  { icon: Video, title: "Video Editing App", desc: "Online video editing software" },
  { icon: Video, title: "Short Video App", desc: "Reels-style video platform" },
  { icon: Music, title: "Podcast App", desc: "Podcast streaming platform" },
  { icon: Smartphone, title: "Social Media App", desc: "Community networking app" },
  { icon: Smartphone, title: "Messaging App", desc: "Real-time chat application" },
  { icon: Smartphone, title: "News App", desc: "Digital news publishing platform" },
  { icon: Smartphone, title: "News Application Guide", desc: "News portal development solution" },
  { icon: Smartphone, title: "Webcomic Website", desc: "Comic publishing platform" },
  { icon: Gamepad2, title: "Sports Software", desc: "Sports management platform" },
  { icon: Gamepad2, title: "Sports Event Booking", desc: "Tournament booking system" },
  { icon: Gamepad2, title: "Sports Betting App", desc: "Sports prediction platform" },
  { icon: Gamepad2, title: "Live Cricket Score App", desc: "Live score tracking solution" },

  // AI & Automation
  { icon: Bot, title: "AI Chatbot", desc: "AI-powered customer support assistant" },
  { icon: Bot, title: "AI SaaS Platform", desc: "Subscription-based AI software" },
  { icon: Bot, title: "AI Content Generator", desc: "Content generation platform" },
  { icon: Bot, title: "AI Automation", desc: "Workflow automation solution" },
  { icon: Smartphone, title: "EV Charging Finder", desc: "EV station locator & charging management platform" },
  { icon: Smartphone, title: "Driver App", desc: "Driver management & route tracking solution" },
  { icon: Truck, title: "Courier Delivery App", desc: "Parcel delivery & tracking platform" },
  { icon: Truck, title: "Packers & Movers App", desc: "Moving service booking & logistics system" },
  { icon: Truck, title: "Fuel Delivery App", desc: "On-demand fuel delivery solution" },
  { icon: Smartphone, title: "Party Planner App", desc: "Event planning & booking platform" },
  { icon: Smartphone, title: "Photographer Booking", desc: "Photographer hire & booking marketplace" },
  { icon: Smartphone, title: "Piano Trainer Booking", desc: "Music tutor booking platform" },
  { icon: Truck, title: "Flower Delivery App", desc: "Online flower ordering & delivery system" },
  { icon: Smartphone, title: "Astrology App", desc: "Astrology consultation & horoscope platform" },

  { icon: Wallet, title: "Rental Website", desc: "Property & rental listing management system" },
  { icon: Wallet, title: "Service Marketplace", desc: "Multi-vendor service marketplace solution" },
  { icon: Wallet, title: "Business Service Marketplace", desc: "B2B service provider platform" },
  { icon: Smartphone, title: "Business App", desc: "Business automation & management solution" },
  { icon: Rocket, title: "Startup App", desc: "Scalable startup MVP development platform" },
  { icon: Smartphone, title: "Franchise Management", desc: "Franchise operations & tracking software" },
  { icon: Database, title: "Warehouse Management", desc: "Inventory & warehouse management solution" },
  { icon: Truck, title: "Fleet Management", desc: "Vehicle fleet monitoring & control platform" },
  { icon: Smartphone, title: "GPS Tracking Solutions", desc: "Real-time GPS tracking software" },
  { icon: Smartphone, title: "Railway Tracking App", desc: "Train tracking & schedule management app" },
  { icon: Home, title: "Real Estate App", desc: "Property listing & management platform" },
  { icon: Globe, title: "Job Portal", desc: "Recruitment & job search website" },
  { icon: Megaphone, title: "Influencer Marketing", desc: "Influencer campaign management platform" },

  { icon: Globe, title: "Webcomic Website", desc: "Comic publishing & reading platform" },
  { icon: Smartphone, title: "Sports Software", desc: "Sports club & event management solution" },
  { icon: Smartphone, title: "Sports Event Booking", desc: "Sports event registration platform" },
  { icon: Wallet, title: "Sports Betting App", desc: "Sports prediction & betting platform" },
  { icon: Smartphone, title: "Live Cricket Score App", desc: "Real-time cricket scores & updates" },
  { icon: Gamepad2, title: "Fantasy Sports App", desc: "Fantasy sports league platform" },
  { icon: Gamepad2, title: "Fantasy Basketball", desc: "Fantasy basketball management system" },
  { icon: Gamepad2, title: "Fantasy Football", desc: "Fantasy football league platform" },
  { icon: Gamepad2, title: "Fantasy Golf", desc: "Fantasy golf tournament platform" },
  { icon: Gamepad2, title: "Fantasy Hockey", desc: "Fantasy hockey competition platform" },
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
            Trending Solutions
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            94+ Ready-Made
            <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              App Blueprints
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