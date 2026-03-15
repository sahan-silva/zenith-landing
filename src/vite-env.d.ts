/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONVERTKIT_FORM_ID: string;
  readonly VITE_USE_CAREER_RESILIENCE_POSITIONING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
