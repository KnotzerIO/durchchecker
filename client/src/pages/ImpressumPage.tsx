import { useQuery } from '@tanstack/react-query'
import Markdown from 'react-markdown'
import { fetchStrapiContent } from '../api/strapi'
import { markdownComponents } from '../components/MarkdownComponents'

export default function ImpressumPage() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['impressum'],
    queryFn: () => fetchStrapiContent('/impressum'),
  })

  return (
    <div className="p-4">
      {isPending && <p className="text-slate-400">Wird geladen…</p>}
      {isError && <p className="text-slate-400">Inhalt konnte nicht geladen werden.</p>}
      {data && <Markdown components={markdownComponents}>{data.content}</Markdown>}
    </div>
  )
}
