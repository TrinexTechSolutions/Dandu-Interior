import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component
 * Dynamically updates document title and meta description for better indexing.
 */
const SEO = ({ 
  title, 
  description = "Elevating spaces with premium interior design and construction services in Hyderabad and Andhra Pradesh.",
  keywords = "Dandu Interiors, Interior Design Hyderabad, Home Renovation Bapatla"
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    const baseTitle = "Dandu Interiors & Developers";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Scroll to top on route change (Safe fallback)
    window.scrollTo(0, 0);

  }, [title, description, keywords, location]);

  return null; // This component doesn't render anything
};

export default SEO;
