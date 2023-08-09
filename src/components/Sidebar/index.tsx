import { useMemo, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { Container, ButtonLogin, ButtonSignOut } from './styles'

import logoImg from '../../assets/logo.png'
import { ActiveLink } from './components/ActiveLink'
import { useRouter } from 'next/router'
import { SignInModal } from '../SignInModal'

const NAV_ITEMS = [
  {
    name: 'Início',
    hfref: '/home',
    icon: <ChartLineUp size={24} />,
  },
  {
    name: 'Explorar',
    hfref: '/explore',
    icon: <Binoculars size={24} />,
  },
]

export function Sidebar() {
  const [openSignIn, setOpenSignIn] = useState(false)
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'

  const navItems = useMemo(() => {
    if (isSignedIn) {
      return NAV_ITEMS.concat({
        name: 'Perfil',
        hfref: '/profile',
        icon: <User size={24} />,
      })
    }

    return NAV_ITEMS
  }, [isSignedIn])

  async function handleSignOut() {
    await signOut()
  }

  return (
    <>
      <Container>
        <section>
          <Image src={logoImg} width={128} height={32} alt="Logo book-wise" />

          {navItems.map((item, index) => (
            <ActiveLink
              name={item.name}
              href={item.hfref}
              icon={item.icon}
              activeClassName="active"
              key={index}
            />
          ))}
        </section>

        {isSignedIn ? (
          <ButtonSignOut onClick={handleSignOut}>
            <div>
              <Image
                src={session.data.user.avatar_url}
                width={30}
                height={30}
                alt={session.data.user.name}
              />
            </div>
            <span>{session.data.user.name}</span> <SignOut />
          </ButtonSignOut>
        ) : (
          <ButtonLogin onClick={() => setOpenSignIn(true)}>
            <span>Fazer login</span> <SignIn />
          </ButtonLogin>
        )}
      </Container>

      <SignInModal
        open={openSignIn}
        onOpenChange={setOpenSignIn}
        callbackUrl="home"
      />
    </>
  )
}
