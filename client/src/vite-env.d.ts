/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
  readonly VITE_POSTNORD_BASE_URL: string;
  readonly VITE_POSTNORD_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
