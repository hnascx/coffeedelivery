import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`
export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
