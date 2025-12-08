export type ApiClientConfig = {
    baseUrl: string;
    fetchFn: typeof fetch;
    headers?: Record<string, string>;
};

export function createApiClient({ baseUrl, fetchFn, headers }: ApiClientConfig) {
    async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
        const res = await fetchFn(baseUrl + url, {
            headers: {
                "Content-Type": "application/json",
                ...(headers ?? {}),
                ...(options.headers ?? {})
            },
            ...options
        });

        if (!res.ok) {
            throw new Error(`API error ${res.status}: ${url}`);
        }

        // handle no content
        if (res.status === 204) return null as T;

        return res.json() as Promise<T>;
    }

    return {
        get: <T>(url: string) => request<T>(url),
        post: <T>(url: string, body?: unknown) => request<T>(url, { method: "POST", body: JSON.stringify(body) }),
        put: <T>(url: string, body?: unknown) => request<T>(url, { method: "PUT", body: JSON.stringify(body) }),
        patch: <T>(url: string, body?: unknown) => request<T>(url, { method: "PATCH", body: JSON.stringify(body) }),
        delete: <T>(url: string) => request<T>(url, { method: "DELETE" })
    };
}
