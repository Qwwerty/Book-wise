import { styled } from '../../../styles'

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100% - 35px)',

  display: 'grid',
  gridTemplateColumns: '1fr 308px',
  gap: '4rem',
  overflow: 'hidden',
})
