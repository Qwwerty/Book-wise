import { Star } from 'phosphor-react'
import { Container } from './styles'
import { useState } from 'react'

interface RatingsAvailableProps {
  numberOfStars: number
  setSelectedStars: (starIndex: number) => void
}

export function RatingsAvailable({
  numberOfStars,
  setSelectedStars,
}: RatingsAvailableProps) {
  const [hoveredStar, setHoveredStar] = useState<null | number>(null)

  const handleStarHover = (starIndex: null | number) => {
    setHoveredStar(starIndex)
  }

  const handleStarClick = (starIndex: number) => {
    setSelectedStars(starIndex + 1)
  }

  const resetHover = () => {
    setHoveredStar(null)
  }

  return (
    <Container>
      {new Array(5).fill(null).map((_, index) => {
        const start =
          index <= (hoveredStar !== null ? hoveredStar : numberOfStars - 1) ? (
            <Star
              weight="fill"
              width={14}
              key={index}
              onMouseEnter={() => handleStarHover(index)}
              onMouseLeave={resetHover}
              onClick={() => handleStarClick(index)}
            />
          ) : (
            <Star
              width={14}
              key={index}
              onMouseEnter={() => handleStarHover(index)}
              onMouseLeave={resetHover}
              onClick={() => handleStarClick(index)}
            />
          )

        return start
      })}
    </Container>
  )
}
