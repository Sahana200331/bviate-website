// File: src/components/home/ServicesGrid.js
// (This is the missing component required for your Services page to work properly)

import Link from "next/link";

const services = [
  {
    title: "N8N Automation",
    description: "Your business should grow while you sleep with custom automated workflows.",
    icon: "⚡",
    link: "/services/automation"
  },
  {
    title: "Web Development",
    description: "High-performance, scalable websites built to convert visitors into clients.",
    icon: "💻",
    link: "/services/web-development"
  },
  {
    title: "SEO Mastery",
    description: "Dominate search rankings and drive consistent organic traffic to your brand.",
    icon: "🔍",
    link: "/services/seo"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns that maximize your ROAS and lower your CPL.",
    icon: "📈",
    link: "/services/performance-marketing"
  },
  {
    title: "Social Media",
    description: "Engaging content strategies that build a loyal community around your brand.",
    icon: "📱",
    link: "/services/social-media"
  },
  {
    title: "Funnels & Copywriting",
    description: "Persuasive sales funnels and copy that turn clicks into paying customers.",
    icon: "✍️",
    link: "/services/funnels-copywriting"
  }
];

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className="group relative bg-slate-900 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-blue-500/50 flex flex-col h-full overflow-hidden"
        >
          <div className="text-4xl mb-6">{service.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-slate-400 mb-8 flex-grow">{service.description}</p>
          <Link 
            href={service.link}
            className="inline-flex items-center text-blue-500 font-semibold group-hover:text-blue-400 transition-colors mt-auto"
          >
            Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </div>
      ))}
    </div>
  );
}