import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component
 * Dynamically updates document title and meta description using react-helmet-async.
 */
const SEO = ({ 
  title, 
  description = "Elevating spaces with premium interior design and construction services in Hyderabad and Bapatla. Expertise in interior works and renovations.",
  keywords = "Dandu Interiors, Interior Design Hyderabad, Home Renovation Bapatla, Civil Works Hyderabad, Premium Interior Designers Bapatla",
  canonical = "https://www.danduinteriors.com",
  schemaData = null
}) => {
  const location = useLocation();
  const baseTitle = "Dandu Interiors & Developers";
  const displayTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const currentUrl = `${canonical.replace(/\/$/, '')}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{displayTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Data: JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
