import React from 'react'
import styled from 'styled-components'


interface CardData {  
  variant?: 'default' | 'glass'
}

const Card: React.FC<CardData> = ({ children, variant="default" }) => (
  <StyledCard className={variant}>
    {children}
  </StyledCard>
)

const StyledCard = styled.div`  
  border-radius: 12px;  
  display: flex;
  flex: 1;
  flex-direction: column;
  backdrop-filter: blur(5px); 

  &.default {
    background-color: ${props => props.theme.color.white};  
  }
  
  &.glass {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    
  }
`

export default Card