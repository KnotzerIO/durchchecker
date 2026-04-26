import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500',
  secondary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
  'outline-primary':
    'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 focus-visible:ring-orange-500',
  'outline-secondary':
    'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-600',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
}

type SharedProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type AsButton = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps> & {
    to?: never
    href?: never
  }

type AsRouterLink = SharedProps &
  Omit<LinkProps, keyof SharedProps | 'to'> & {
    to: string
    href?: never
  }

type AsAnchor = SharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps> & {
    href: string
    to?: never
  }

type ButtonProps = AsButton | AsRouterLink | AsAnchor

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const cls = [base, variants[variant], sizes[size], className].join(' ')

  if ('to' in props && props.to !== undefined) {
    const { to, ...rest } = props as AsRouterLink
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    return (
      <a className={cls} {...(props as AsAnchor)}>
        {children}
      </a>
    )
  }

  return (
    <button className={cls} {...(props as AsButton)}>
      {children}
    </button>
  )
}
