import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsAndConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | Dandu Interiors & Developers"
        description="Terms and Conditions for Dandu Interiors & Developers. Learn about our service agreements, regional availability, and communication policies."
      />
      <div className="bg-[#F8F5F2] min-h-screen pt-32 pb-20 font-sans">
        <div className="container-custom max-w-4xl px-6 lg:px-12">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 border-b border-[#1A1A1A]/10 pb-12"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1A1A1A]/40 block mb-4">Service Agreement</span>
            <h1 className="text-5xl md:text-7xl font-medium text-[#1A1A1A] tracking-tighter leading-none mb-6">
              Terms <span className="mx-4">&</span> <span className="font-serif italic text-[#1A1A1A]/60">Conditions</span>
            </h1>
            <p className="text-sm text-[#1A1A1A]/40 font-medium">Standard Terms for Dandu Interiors & Developers Services</p>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-12 text-[#1A1A1A]/70 leading-relaxed"
          >
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">1. Acceptance of Terms</h2>
              <p>
                By accessing this website or submitting an inquiry via our forms, you agree to be bound by these Terms and Conditions. These terms govern your use of the <strong>Dandu Interiors & Developers</strong> website and the preliminary phase of our design and construction services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">2. Service & Regional Availability</h2>
              <p>
                Our core interior design, renovation, and civil works services are primarily available in <strong>Hyderabad (Telangana)</strong> and <strong>Bapatla (Andhra Pradesh)</strong>. While we accept inquiries from other regions, service fulfillment is subject to logistical feasibility and specific agreement by our management.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">3. Communication Consent</h2>
              <p>
                By providing your phone number and email address through our website, you explicitly consent to being contacted by <strong>Dandu Interiors & Developers</strong> via **WhatsApp, Phone, or Email** regarding your inquiry. You acknowledge that WhatsApp is our primary channel for rapid communication and project updates.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">4. Preliminary Quotes & Estimates</h2>
              <p>
                All figures provided through our "Request a Quote" or budgeting tools are <strong>preliminary estimates only</strong>. Final project costs and timelines are determined only after:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional on-site measurements and inspection.</li>
                <li>Finalization of material specifications and design blueprints.</li>
                <li>Execution of a formal, written Service Agreement or Contract.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">5. Intellectual Property</h2>
              <p>
                All designs, 3D renders, architectural blueprints, and high-resolution project photography displayed on this website are the exclusive intellectual property of <strong>Dandu Interiors & Developers</strong>.
              </p>
              <p>
                You may not reproduce, distribute, or use our design concepts for commercial purposes without our express written consent. Unauthorized use of our project images is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">6. Limitation of Liability</h2>
              <p>
                Dandu Interiors & Developers shall not be liable for any indirect or consequential losses arising from the use of design inspiration or "Design Ideas" found on this website. Our professional liability is strictly governed by the individual project contracts signed at the time of engagement.
              </p>
            </section>

            <section className="space-y-4 text-sm pt-8 border-t border-[#1A1A1A]/10">
              <p>
                <strong>Jurisdiction:</strong> Any legal matters arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts in **Hyderabad, India**.
              </p>
              <p>
                Copyright &copy; {new Date().getFullYear()} Dandu Interiors & Developers. All rights reserved.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;

