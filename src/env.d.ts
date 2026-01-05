/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
    interface Locals extends Runtime { }
}

interface Env {
    DB: D1Database;
    // Add other environment variables here
}

// Defining D1 types if not already present in the environment
interface D1Database {
    prepare(query: string): D1PreparedStatement;
    dump(): Promise<ArrayBuffer>;
    batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
    exec(query: string): Promise<D1ExecResult>;
}

interface D1PreparedStatement {
    bind(...values: any[]): D1PreparedStatement;
    first<T = unknown>(colName?: string): Promise<T | null>;
    run<T = unknown>(): Promise<D1Result<T>>;
    all<T = unknown>(): Promise<D1Result<T>>;
    raw<T = unknown>(): Promise<T[]>;
}

interface D1Result<T = unknown> {
    results: T[];
    success: boolean;
    meta: any;
    error?: string;
}

interface D1ExecResult {
    count: number;
    duration: number;
}
