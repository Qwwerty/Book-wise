import { useState } from 'react'
import Image from 'next/image'
import {
  Author,
  Book,
  Container,
  Description,
  Header,
  HeaderInfo,
  Text,
  Title,
} from './styles'
import { Ratings } from '../../../../../../../../components/Ratings'

import tmpImg from '../../../../../../../../assets/covers/o-hobbit.png'

const MAX_LENGTH = 229

export function CardReview() {
  const [isShowMore, setIsShowMore] = useState(false)

  const text =
    'Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh, Sed vulputate massa velit nibh, Sed vulputate massa velit nibh, Sed vulputate massa velit nibh, Sed vulputate massa velit nibh, Sed vulputate massa velit nibh, Sed vulputate massa velit nibh'

  const hasOverflowText = text.length > MAX_LENGTH

  return (
    <Container isShowMore={isShowMore}>
      <Header>
        <HeaderInfo>
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/22650940?v=4"
              width={40}
              height={40}
              alt=""
            />
          </div>

          <div>
            <p>Jaxson Dias</p>
            <span>Hoje</span>
          </div>
        </HeaderInfo>
        <Ratings quantity={4} />
      </Header>

      <Book>
        <Image src={tmpImg} width={108} height={152} alt="" />

        <Description>
          <Title>O Hobbit</Title>
          <Author>J.R.R. Tolkien</Author>

          {!hasOverflowText ? (
            <Text>{String(text).slice(0, MAX_LENGTH).concat('...')}</Text>
          ) : (
            <>
              {!isShowMore ? (
                <Text>
                  {String(text).slice(0, MAX_LENGTH).concat('...')}

                  <button onClick={() => setIsShowMore(!isShowMore)}>
                    ver mais
                  </button>
                </Text>
              ) : (
                <Text>{text}</Text>
              )}
            </>
          )}
        </Description>
      </Book>
    </Container>
  )
}
