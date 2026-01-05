interface ImportMetaEnv {
  readonly PUBLIC_GATEWAY_URL?: string;
  readonly PUBLIC_GATEWAY_KEY?: string;
  readonly PUBLIC_ORACLE_MODEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

