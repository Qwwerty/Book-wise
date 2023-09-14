import { Container } from './styles'

export function CardBook() {
  return (
    <Container>
      <Image
        src={rating.book.cover_url}
        width={108}
        height={152}
        alt={rating.book.name}
      />

      <Description>
        <Title>{rating.book.name}</Title>
        <Author>{rating.book.author}</Author>

        {!hasOverflowText ? (
          <Text>{rating.book.summary}</Text>
        ) : (
          <>
            {!isShowMore ? (
              <Text>
                {String(rating.book.summary).slice(0, MAX_LENGTH).concat('...')}

                <button onClick={() => setIsShowMore(!isShowMore)}>
                  ver mais
                </button>
              </Text>
            ) : (
              <Text>{rating.book.summary}</Text>
            )}
          </>
        )}
      </Description>
    </Container>
  )
}
