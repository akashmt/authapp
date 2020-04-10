import styled from 'styled-components'
import {  } from './_consts'

export const DashboardCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  grid-template-areas: "card1 card2 card3 card4";
  .Card1 	{ grid-area: card1; }
  .Card2  { grid-area: card2; }
  .Card3  { grid-area: card3; }
  .Card4  { grid-area: card4; }

  .Dashboard-Card {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start; 
    padding: 1rem;
    background-color: #0081cc;
    color: #FFFFFF;
    font-size: .9rem;
    .Card-stats {
      margin-right: 1rem;
      svg {
        margin-bottom: 1.5rem;
        max-width: 90px;
        fill: #FFFFFF;
      }
      span {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
    p {
      margin: 0px 0px 5px 0px;
      padding: 0px;
      &:last-of-type { margin: 0px; }
    }
  }

  .Card1 	{  }
  .Card2  {  }
  .Card3  {  }
  .Card4  {  }
`