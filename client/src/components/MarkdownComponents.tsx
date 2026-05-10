import type { Components } from 'react-markdown'

export const markdownComponents: Components = {
  h1: ({ children }) => <h1 className="text-3xl font-bold text-slate-900 mb-6 mt-0">{children}</h1>,
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-slate-800 mb-3 mt-8 pb-2 border-b border-slate-200">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-slate-800 mb-2 mt-6">{children}</h3>
  ),
  p: ({ children }) => <p className="text-slate-600 leading-relaxed mb-4">{children}</p>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 mb-4 text-slate-600 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 mb-4 text-slate-600 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-slate-800">{children}</strong>,
  em: ({ children }) => <em className="italic text-slate-500">{children}</em>,
  hr: () => <hr className="my-8 border-slate-200" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-slate-300 pl-4 my-4 text-slate-500 italic">
      {children}
    </blockquote>
  ),
}
