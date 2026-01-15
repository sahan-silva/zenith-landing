/**
 * src/utils/convertkit.ts
 *
 * ConvertKit integration for Zenith Journal waitlist.
 * Uses ConvertKit's public form endpoint (no API key required).
 *
 * Security: This uses the public form submission endpoint, which is the same
 * endpoint used by ConvertKit's embedded forms. No secrets are exposed.
 *
 * Related: components/EmailForm.tsx
 */

const CONVERTKIT_FORM_ID = import.meta.env.VITE_CONVERTKIT_FORM_ID;

export interface SubscribeResult {
  success: boolean;
  error?: string;
}

/**
 * Subscribe an email address to the Zenith Journal waitlist via ConvertKit.
 * Uses the public form submission endpoint (same as embedded forms).
 *
 * @param email - The email address to subscribe
 * @returns Promise resolving to success status and optional error message
 */
export async function subscribeToWaitlist(email: string): Promise<SubscribeResult> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  // Check for required environment variable
  if (!CONVERTKIT_FORM_ID) {
    console.warn('ConvertKit form ID not configured. Email capture disabled.');
    // In development, simulate success
    if (import.meta.env.DEV) {
      console.log('DEV MODE: Would subscribe email:', email);
      return { success: true };
    }
    return { success: false, error: 'Email service not configured' };
  }

  try {
    // Use ConvertKit's public form endpoint (no API key required)
    // This is the same endpoint used by ConvertKit's embedded forms
    const formData = new FormData();
    formData.append('email_address', email);

    const response = await fetch(
      `https://app.convertkit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`,
      {
        method: 'POST',
        body: formData,
      }
    );

    // ConvertKit returns 200 for successful submissions
    if (response.ok) {
      return { success: true };
    }

    // Handle error responses
    console.error('ConvertKit form submission error:', response.status);
    return {
      success: false,
      error: 'Unable to subscribe. Please try again later.'
    };
  } catch (error) {
    console.error('ConvertKit subscription error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.'
    };
  }
}
