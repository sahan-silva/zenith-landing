import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' as const },
};

const PrivacyPolicy: React.FC = () => {
  const effectiveDate = 'March 14, 2026';

  return (
    <main className="relative min-h-screen bg-ink font-body">
      <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-stone hover:text-cream transition-colors duration-300 mb-12"
        >
          <span>&larr;</span>
          <span className="text-sm">Back to Zenith Journal</span>
        </a>

        <motion.div {...fadeIn} viewport={{ once: true }}>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-cream tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-stone text-sm mb-12">
            Effective: {effectiveDate}
          </p>

          <div className="space-y-10 text-cream/90 leading-relaxed">
            {/* Intro */}
            <p>
              Zenith Journal ("we", "us", "our") is operated by Aramuna. This
              Privacy Policy explains how we collect, use, and protect your
              information when you use the Zenith Journal mobile application
              ("the App").
            </p>

            {/* 1 */}
            <Section title="1. Information We Collect">
              <Subsection title="Account Information">
                <p>
                  When you create an account, we collect your email address and
                  a securely hashed password. You may optionally provide a
                  display name.
                </p>
              </Subsection>

              <Subsection title="Journal Content">
                <p>
                  Your journal entries, including text, mood selections, tags,
                  and titles, are stored securely in our database. This content
                  is yours — we never sell it, share it with third parties, or
                  use it to train AI models.
                </p>
              </Subsection>

              <Subsection title="Voice Recordings">
                <p>
                  If you use the voice journaling feature, audio recordings are
                  temporarily uploaded for transcription. Once transcribed, the
                  text is saved as a journal entry. Audio files are stored in
                  your private storage bucket and are only accessible by you.
                </p>
              </Subsection>

              <Subsection title="Images">
                <p>
                  If you use the photo scanning feature, images are temporarily
                  uploaded for text extraction (OCR). Extracted text is saved as
                  journal content. Images are stored in your private storage
                  bucket and are only accessible by you.
                </p>
              </Subsection>

              <Subsection title="Usage Data">
                <p>
                  We collect basic analytics such as mood trends and journaling
                  streaks to power your personal statistics. This data is
                  associated with your account and is never shared externally.
                </p>
              </Subsection>
            </Section>

            {/* 2 */}
            <Section title="2. How We Use Your Information">
              <ul className="list-disc list-inside space-y-2 text-cream/80">
                <li>To provide and maintain the App</li>
                <li>
                  To generate AI-powered reflections and insights based on your
                  journal entries
                </li>
                <li>
                  To extract goals, tasks, and bucket list items from your
                  entries
                </li>
                <li>To transcribe voice recordings into journal entries</li>
                <li>
                  To extract text from images you upload
                </li>
                <li>To display your personal journaling statistics</li>
                <li>To send you optional daily journaling reminders</li>
              </ul>
            </Section>

            {/* 3 */}
            <Section title="3. AI Processing">
              <p>
                Your journal entries are processed by third-party AI services
                (Google Gemini) to generate reflections, mood analysis, and
                entity extraction. This processing happens in real time and we
                do not store AI training data from your entries. The AI
                providers' own privacy policies govern their handling of data
                during processing — however, we use API configurations that
                opt out of model training with your data.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. Data Storage & Security">
              <p>
                Your data is stored on{' '}
                <a
                  href="https://supabase.com"
                  className="text-ember hover:text-dawn transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Supabase
                </a>
                , a secure cloud platform. We implement:
              </p>
              <ul className="list-disc list-inside space-y-2 text-cream/80 mt-3">
                <li>Row-Level Security (RLS) ensuring you can only access your own data</li>
                <li>Encrypted connections (HTTPS/TLS) for all data in transit</li>
                <li>Secure password hashing</li>
                <li>Private storage buckets for your media files</li>
              </ul>
            </Section>

            {/* 5 */}
            <Section title="5. Data Sharing">
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. Your data is only shared
                with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-cream/80 mt-3">
                <li>
                  <strong>Supabase</strong> — for data storage and
                  authentication
                </li>
                <li>
                  <strong>Google Gemini</strong> — for AI reflection and text
                  extraction processing (opted out of model training)
                </li>
              </ul>
            </Section>

            {/* 6 */}
            <Section title="6. Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-cream/80 mt-3">
                <li>Access all data associated with your account</li>
                <li>Delete individual journal entries at any time</li>
                <li>Delete your account and all associated data</li>
                <li>Export your journal data</li>
                <li>Opt out of AI-powered reflections</li>
              </ul>
              <p className="mt-3">
                Account deletion is available directly within the App under
                Settings. When you delete your account, all journal entries,
                media files, and personal data are permanently removed.
              </p>
            </Section>

            {/* 7 */}
            <Section title="7. Data Retention">
              <p>
                We retain your data for as long as your account is active. If
                you delete your account, all associated data is permanently
                deleted within 30 days. We do not retain backups of deleted
                accounts.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Children's Privacy">
              <p>
                Zenith Journal is not intended for children under the age of 13.
                We do not knowingly collect information from children under 13.
                If we learn that we have collected data from a child under 13, we
                will delete it promptly.
              </p>
            </Section>

            {/* 9 */}
            <Section title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy
                within the App and updating the effective date above.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. Contact Us">
              <p>
                If you have questions about this Privacy Policy or your data,
                contact us at:
              </p>
              <p className="mt-3">
                <a
                  href="mailto:info@aramuna.com"
                  className="text-ember hover:text-dawn transition-colors"
                >
                  info@aramuna.com
                </a>
              </p>
            </Section>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-stone/20">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <a href="/" className="font-display text-lg font-bold text-cream">
            Zenith <span className="text-stone font-body font-normal">Journal</span>
          </a>
          <p className="text-stone/60 text-sm">
            {new Date().getFullYear()} Aramuna. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

/* ── Helpers ─────────────────────────────── */

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section>
    <h2 className="font-display text-xl font-bold text-cream mb-4 tracking-tight">
      {title}
    </h2>
    {children}
  </section>
);

const Subsection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="mb-4">
    <h3 className="font-display text-base font-semibold text-cream/90 mb-2">
      {title}
    </h3>
    {children}
  </div>
);

export default PrivacyPolicy;
