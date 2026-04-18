import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for Dandu Interiors & Developers. Learn about how we handle and protect your personal data during your journey with us."
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
          <p className="text-sm text-[#1A1A1A]/40 font-medium">Last Updated: April 3, 2026</p>
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
              Welcome to <strong>Dandu Interior and Developers</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">2. Data We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. The personal information we collect depends on the context of your interactions with us and the choices you make.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Data:</strong> Name, Email Address, WhatsApp Number, and Phone Number.</li>
              <li><strong>Property Data:</strong> Property Location, Property Type, and Project Requirements.</li>
              <li><strong>Financial Data:</strong> Estimated Project Budget (for quote requests).</li>
              <li><strong>Usage Data:</strong> Information about how you use our website, services, and products.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">3. How We Use Your Data</h2>
            <p>
              We use your personal data only when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage your requests for design consultations and project quotes.</li>
              <li>To communicate with you via WhatsApp, Phone, or Email regarding your project inquiries.</li>
              <li>To improve our website, services, and marketing efforts.</li>
              <li>To comply with legal or regulatory obligations.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">4. Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p>
              We may utilize third-party services such as <strong>Google Analytics</strong> to monitor and analyze the use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">5. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our services. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WhatsApp:</strong> For direct communication and project updates.</li>
              <li><strong>Brevo (or similar):</strong> For processing email communications and newsletters.</li>
              <li><strong>Google Maps:</strong> For displaying our office locations (Hyderabad and Bapatla).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">6. Data Security</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">7. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-[#1A1A1A] uppercase">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="font-medium text-[#1A1A1A]">
              Dandu Interior and Developers<br />
              Email: danduinteriordesigns@gmail.com<br />
              Phone: +{import.meta.env.VITE_WHATSAPP_NUMBER || '919866166612'}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  </>
);
};

export default PrivacyPolicy;
