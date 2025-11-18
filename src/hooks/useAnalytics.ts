import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackEvent, isGAInitialized } from '@/lib/analytics';

/**
 * React hook for Google Analytics tracking
 * 
 * Automatically tracks page views on route changes
 * Provides trackEvent function for custom event tracking
 * 
 * @example
 * ```tsx
 * const { trackEvent } = useAnalytics();
 * 
 * const handleButtonClick = () => {
 *   trackEvent('button_click', { button_name: 'start_quiz' });
 * };
 * ```
 */
export function useAnalytics() {
  const location = useLocation();

  // Track page views on route changes
  useEffect(() => {
    if (isGAInitialized()) {
      trackPageView(location.pathname + location.search);
    }
  }, [location.pathname, location.search]);

  return {
    trackEvent,
    isInitialized: isGAInitialized(),
  };
}

