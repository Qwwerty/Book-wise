import { Avatar } from '@components/atoms/Avatar'
import { Container, Counters, Divider, Header, Title } from './styles'
import { Counter } from '../Counter'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'

interface IAnalytics {
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  readPages: number
  readAuthors: number
  ratedBooks: number
  mostReadCategory: string | null
}

export function Analytics({
  user,
  readPages,
  readAuthors,
  ratedBooks,
  mostReadCategory,
}: IAnalytics) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} size="lg" alt={user.name} />

        <Title>
          <p>{user.name}</p>
          <span>membro desde 2019</span>
        </Title>
      </Header>

      <Divider />

      <Counters>
        <Counter
          title={readPages}
          subtitle="Páginas lidas"
          icon={<BookOpen />}
        />
        <Counter
          title={ratedBooks}
          subtitle="Livros avaliados"
          icon={<Books />}
        />
        <Counter
          title={readAuthors}
          subtitle="Autores lidos"
          icon={<UserList />}
        />

        {mostReadCategory && (
          <Counter
            title={mostReadCategory}
            subtitle="Categoria mais lida"
            icon={<BookmarkSimple />}
          />
        )}
      </Counters>
    </Container>
  )
}
