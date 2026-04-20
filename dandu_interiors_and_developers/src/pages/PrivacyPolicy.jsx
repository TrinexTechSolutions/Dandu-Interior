import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  const lastUpdated = "April 20, 2026";

  return (
    <>
      <SEO 
        title="Privacy Policy | Dandu Interiors & Developers"
        description="Privacy Policy for Dandu Interiors & Developers. Learn how we handle your lead data, analytics, and communications."
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
              Privacy <span className="font-serif italic text-[#1A1A1A]/60">Policy</span>
            </h1>
            <p className="text-sm text-[#1A1A1A]/40 font-medium">Last Updated: {lastUpdated}</p>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-12 text-[#1A1A1A]/70 leading-relaxed"
          >
            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">1. Introduction</h2>
              <p>
                At <strong>Dandu Interiors & Developers</strong>, we are committed to protecting your privacy and ensuring a secure experience. This policy explains how we collect, use, and safeguard the information you provide through our website and lead generation forms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">2. Information We Collect</h2>
              <p>
                We collect information that you voluntarily provide when you interact with our inquiry forms (Contact Us, Request a Quote, or Book a Call). This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity & Contact:</strong> Full name, email address, and WhatsApp/Phone number.</li>
                <li><strong>Project Details:</strong> Property location (Hyderabad, Bapatla, etc.), property type (Villa, Apartment, Commercial), and project requirements.</li>
                <li><strong>Budgetary Information:</strong> Estimated project budget for interior and civil works.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">3. Technical Data & Analytics</h2>
              <p>
                To provide a high-performance experience, we use modern monitoring and analytics tools:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vercel Analytics & Speed Insights:</strong> We monitor website performance and visitor traffic in an aggregated, non-identifiable way to improve loading speeds and user experience.</li>
                <li><strong>Google Analytics (GA4):</strong> We track user interactions (such as link clicks and form submissions) to measure the effectiveness of our marketing efforts.</li>
                <li><strong>Cookies:</strong> Our website uses essential cookies to manage your session and provide smooth navigation.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">4. How We Use Your Information</h2>
              <p>
                The data we collect is used primarily to facilitate your design and construction inquiries:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To contact you regarding your specific project request.</li>
                <li>To store your lead in our <strong>Brevo (formerly Sendinblue) CRM</strong> for synchronized professional follow-ups.</li>
                <li>To send automated email confirmations and project alerts.</li>
                <li>To provide regional service support specific to your location (Hyderabad or Bapatla).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">5. Third-Party Sharing</h2>
              <p>
                We do not sell your personal data. We only share information with service providers necessary for our operations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>CRM & Email (Brevo):</strong> For managing contact records and sending administrative notifications.</li>
                <li><strong>Hosting & Performance (Vercel):</strong> For website uptime and performance monitoring.</li>
                <li><strong>Communication (WhatsApp):</strong> To initiate direct conversations at your request.</li>
                <li><strong>Maps (Google Maps):</strong> To display our office locations accurately.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">6. Your Data Rights</h2>
              <p>
                As a user, you have the right to request access to the data we hold about you, request corrections, or ask for the deletion of your contact record from our system. To exercise these rights, please contact us via the details provided below.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">7. Contact Us</h2>
              <div className="font-medium text-[#1A1A1A] p-8 border border-[#1A1A1A]/10 rounded-2xl bg-white/50">
                <p className="mb-2 uppercase tracking-widest text-[10px] font-bold text-black/40">Official Notice Address</p>
                <p className="text-lg">Dandu Interiors & Developers</p>
                <p>Hyderabad | Bapatla</p>
                <p className="mt-4">Email: danduinteriordesigns@gmail.com</p>
                <p>WhatsApp: +91 {import.meta.env.VITE_WHATSAPP_NUMBER?.slice(2) || '9866166612'}</p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

