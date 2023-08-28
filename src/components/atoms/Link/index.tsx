import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type props = {
  name: string
  icon: JSX.Element
  activeClassName: string
} & LinkProps

export function Link({ name, icon, activeClassName, ...rest }: props) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''

  return (
    <NextLink {...rest} className={className}>
      {icon}
      {name}
    </NextLink>
  )
}
