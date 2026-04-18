import SectionTag from "../../components/ui/SectionTag";
import CTABanner from "../../components/CTABanner";

export default function IndustriesPage() {
  return (
    <div className="py-20 px-13 max-w-7xl mx-auto flex flex-col items-center">
      <SectionTag>Industries</SectionTag>
      <h1 className="font-display text-5xl font-black text-white mb-6">
        Industries We Serve
      </h1>
      <p className="text-secondary text-lg mb-20 text-center max-w-2xl">
        This is the new Industries page! Your Next.js router successfully found this file.
      </p>

      {/* Testing one of our new reusable components! */}
      <CTABanner />
    </div>
  );
}