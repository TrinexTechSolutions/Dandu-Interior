import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TermsAndConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | Dandu Interiors & Developers"
        description="Terms and Conditions for using Dandu Interior and Developers services. Please read our agreement carefully regarding our design, renovation, and construction services."
      />
      <div className="bg-[#F8F5F2] min-h-screen pt-32 pb-20 font-sans">
      <div className="container-custom max-w-4xl px-6 lg:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 border-b border-[#1A1A1A]/10 pb-12"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1A1A1A]/40 block mb-4">Legal Notice</span>
          <h1 className="text-5xl md:text-7xl font-medium text-[#1A1A1A] tracking-tighter leading-none mb-6">
            Terms <span className="mx-4">&</span> <span className="font-serif italic text-[#1A1A1A]/60">Conditions</span>
          </h1>
          <p className="text-sm text-[#1A1A1A]/40 font-medium">Agreement for Dandu Interior and Developers Services</p>
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
              By accessing and using the website of <strong>Dandu Interior and Developers</strong>, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">2. Use of Site</h2>
            <p>
              This website is intended for individuals seeking information regarding our interior design, renovation, and structural planning services. You may use our site for lawful purposes only and you are prohibited from violating any laws via the site or interfering with its proper operation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">3. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, <strong>Dandu Interior and Developers</strong> owns the intellectual property rights for all material on the website, including all images, project designs, structural plans, and text content.
            </p>
            <p>
              You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions. You must not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish material from our website.</li>
              <li>Sell, rent, or sub-license material from the website.</li>
              <li>Reproduce, duplicate, or copy material from the website for commercial purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">4. Service Estimates and Quotes</h2>
            <p>
              Quotes provided via our <strong>Request A Quote</strong> form are preliminary estimates only. Final project costs and timelines are subject to detailed site inspection, selection of materials, and signed contractual agreements between <strong>Dandu Interior and Developers</strong> and the client.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">5. User Obligations</h2>
            <p>
              When using our contact and quote forms, you agree to provide true, accurate, and complete information. You are responsible for any consequences arising from the provision of inaccurate or fraudulent information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, <strong>Dandu Interior and Developers</strong> excludes all representations, warranties, and conditions relating to our website and the use of this website.
            </p>
            <p>
              We will not be liable for any loss or damage of any nature resulting from the use of information provided on this website, particularly regarding design inspiration and structural planning ideas, which are for general guidance only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">7. Termination</h2>
            <p>
              We reserve the right to terminate your access to the website without any prior notice if you violate any of the terms of this agreement.
            </p>
          </section>

          <section className="space-y-4 text-sm pt-8 border-t border-[#1A1A1A]/10">
            <p>
              <strong>Dandu Interior and Developers</strong> reserves the right to modify these terms from time to time at our sole discretion. Therefore, you should review these page periodically.
            </p>
            <p>
              Copyright &copy; {new Date().getFullYear()} Dandu Interior and Developers. All rights reserved.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  </>
);
};

export default TermsAndConditions;
