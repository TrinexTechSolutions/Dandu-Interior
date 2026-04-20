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
  image = "https://www.danduinteriors.com/favicon_io/android-chrome-512x512.png",
  schemaData = null,
  preloads = []
}) => {
  const location = useLocation();
  const baseTitle = "Dandu Interiors & Developers";
  const displayTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const currentUrl = `${canonical.replace(/\/$/, '')}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  // Dynamic Breadcrumb Schema
  const pathnames = location.pathname.split('/').filter(x => x);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.danduinteriors.com"
      },
      ...pathnames.map((path, index) => {
        const url = `https://www.danduinteriors.com/${pathnames.slice(0, index + 1).join('/')}`;
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
          "item": url
        };
      })
    ]
  };

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
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data: JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}

      {/* Preload Critical Assets */}
      {preloads.map((preload, index) => (
        <link 
          key={index}
          rel="preload"
          as={preload.as}
          href={preload.href}
          type={preload.type}
          crossOrigin={preload.crossOrigin}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
