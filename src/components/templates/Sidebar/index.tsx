import { useMemo } from 'react'
import { Binoculars, ChartLineUp, User } from 'phosphor-react'
import { useSession } from 'next-auth/react'
import { Image } from '@components/atoms/Image'
import { Container } from './styles'
import { SidebarLinks } from '@components/molecules/SidebarLinks'
import { SidebarAuthentication } from '@components/organims/SidebarAuthentication'

interface Link {
  name: string
  href: string
  icon: JSX.Element
  auth?: boolean
}

const NAV_ITEMS = [
  {
    name: 'Início',
    href: '/home',
    icon: <ChartLineUp size={24} />,
    order: 1,
  },
  {
    name: 'Explorar',
    href: '/explore',
    icon: <Binoculars size={24} />,
    order: 2,
  },
  {
    name: 'Perfil',
    href: '/profile',
    icon: <User size={24} />,
    auth: true,
    order: 3,
  },
]

export function Sidebar() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  const links = useMemo(() => {
    const items = NAV_ITEMS.reduce(
      (acc, current) => {
        if (current?.auth) {
          acc.linksWithAuthentication.push(current)
          return acc
        }

        acc.linksWithoutAuthentications.push(current)
        return acc
      },
      {
        linksWithoutAuthentications: [] as Array<Link>,
        linksWithAuthentication: [] as Array<Link>,
      },
    )

    if (isSignedIn) {
      items.linksWithAuthentication = items.linksWithAuthentication.map(
        (item) => {
          if (item.href === '/profile') {
            item.href = `/profile/${session.data.user.id}`
          }

          return item
        },
      )

      return [
        ...items.linksWithoutAuthentications,
        ...items.linksWithAuthentication,
      ]
    }

    return [...items.linksWithoutAuthentications]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn])

  return (
    <Container>
      <section>
        <Image
          src="/images/logo.svg"
          width={128}
          height={32}
          alt="Logo book-wise"
        />

        <SidebarLinks links={links} />
      </section>

      <SidebarAuthentication />
    </Container>
  )
}
