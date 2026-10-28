// lib/fbq.ts
type FbqFn = (...args: any[]) => void;

declare global {
    interface Window {
        fbq?: FbqFn;
    }
}

export const pixelEvent = (
    event: string,
    params?: Record<string, unknown>,
    kind: 'track' | 'trackCustom' = 'track',
) => {
    if (typeof window === 'undefined' || !window.fbq) return;
    window.fbq(kind, event, params);
};

// Convenience wrappers for the specific events you're tracking
export const trackPageView = () => pixelEvent('PageView');
export const trackButtonClick = (label: string) =>
    pixelEvent('ButtonClick', { label }, 'trackCustom');
export const trackBookDemo = (source: 'nav' | 'form' | 'page') =>
    pixelEvent('Schedule', { source }); // "Schedule" is Meta's standard event for booking/demo intent
export const trackFormSubmit = () => pixelEvent('Lead');