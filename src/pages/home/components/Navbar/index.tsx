import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { Container, ButtonLogin, ButtonSignOut } from './styles'

import logoImg from '../../../../assets/logo.png'
import { ActiveLink } from './components/ActiveLink'
import { useSession } from 'next-auth/react'

export function Navbar() {
  const session = useSession()

  const isSignedIn = session.status === 'authenticated'
  const firstName = session?.data ? session.data.user.name.split(' ')[0] : ''

  return (
    <Container>
      <section>
        <Image src={logoImg} width={128} height={32} alt="Logo book-wise" />

        <ActiveLink activeClassName="active" href="/home" legacyBehavior>
          <a>
            <ChartLineUp />
            Início
          </a>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/explore" legacyBehavior>
          <a>
            <Binoculars />
            Explorar
          </a>
        </ActiveLink>

        {isSignedIn && (
          <ActiveLink activeClassName="active" href="/profile" legacyBehavior>
            <a>
              <User />
              Profile
            </a>
          </ActiveLink>
        )}
      </section>

      {isSignedIn ? (
        <ButtonSignOut>
          <div>
            <Image
              src={session.data.user.avatar_url}
              width={30}
              height={30}
              alt={session.data.user.name}
            />
          </div>
          <span>{firstName}</span> <SignOut />
        </ButtonSignOut>
      ) : (
        <ButtonLogin>
          <span>Fazer login</span> <SignIn />
        </ButtonLogin>
      )}
    </Container>
  )
}
