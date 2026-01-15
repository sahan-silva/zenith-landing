/**
 * src/utils/waitlist.ts
 *
 * Supabase integration for Zenith Journal waitlist.
 * Stores email signups in Supabase with duplicate handling.
 *
 * Related: components/EmailForm.tsx, supabaseClient.ts
 */

import { supabase } from './supabaseClient';

export interface SubscribeResult {
  success: boolean;
  error?: string;
}

/**
 * Subscribe an email address to the Zenith Journal waitlist via Supabase.
 *
 * @param email - The email address to subscribe
 * @param source - Source identifier (default: 'zenith-landing')
 * @returns Promise resolving to success status and optional error message
 */
export async function subscribeToWaitlist(
  email: string,
  source: string = 'zenith-landing'
): Promise<SubscribeResult> {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  // Check if Supabase is configured
  if (!supabase) {
    console.warn('Supabase not configured. Email capture disabled.');
    // In development, simulate success
    if (import.meta.env.DEV) {
      console.log('DEV MODE: Would subscribe email:', email);
      return { success: true };
    }
    return { success: false, error: 'Email service not configured' };
  }

  try {
    const { error } = await supabase
      .from('waitlist_signups')
      .insert({ email: email.toLowerCase().trim(), source });

    if (error) {
      // Handle duplicate email (unique constraint violation)
      // Postgres error code 23505 = unique_violation
      if (error.code === '23505') {
        // Treat duplicate as success - user is already on waitlist
        return { success: true };
      }

      console.error('Supabase insert error:', error);
      return {
        success: false,
        error: 'Unable to join waitlist. Please try again later.',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Waitlist subscription error:', error);
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}
