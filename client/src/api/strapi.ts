const BASE = import.meta.env.VITE_STRAPI_URL as string

export interface StrapiContent {
  content: string
}

export async function fetchStrapiContent(path: string): Promise<StrapiContent> {
  const res = await fetch(`${BASE}/api${path}`)
  if (!res.ok) throw new Error(`Strapi ${path} → ${res.status}`)

  const json = await res.json()
  return json.data as StrapiContent
}
