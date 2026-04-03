import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * GoogleAnalytics Component
 * Monitors route changes and sends page_view events to GA4.
 */
const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Only run if gtag is available (won't be available if ad-blockers like Brave block it)
        if (typeof window.gtag === 'function') {
            window.gtag('config', 'G-C6YK9LHMS2', {
                page_path: location.pathname + location.search,
            });
            console.log(`GA4 Tracked: ${location.pathname + location.search}`);
        }
    }, [location]);

    return null; // This component doesn't render anything
};

export default GoogleAnalytics;
