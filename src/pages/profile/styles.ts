import { styled } from '@styles/index'

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100% - 35px)',

  display: 'grid',
  gridTemplateColumns: '1fr 308px',
  alignItems: 'flex-start',
  gap: '4rem',
  overflow: 'hidden',
})
