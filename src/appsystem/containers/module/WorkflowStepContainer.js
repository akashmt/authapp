import styled from 'styled-components'
import {  } from './_consts'

export const WorkflowStepContainer = styled.div`
  margin: -10px 0px 10px 0px;
  padding: 20px 15px 0px 15px;
  border: 1px solid transparent;
  ul.timeline {
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .li {
      transition: all 200ms ease-in;
    }
  }
  .status {
    padding: 15px 40px 0px 40px;
    display: flex;
    justify-content: center;
    border-top: 2px solid #8D1414;
    position: relative;
    transition: all 200ms ease-in;
  }

  .status:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: #FFFFFF;
    border: 1px solid #8D1414;
    border-radius: 25px;
    position: absolute;
    top: -15px;
    left: 42%;
    transition: all 200ms ease-in;
  }

  .li.complete .status { border-top: 2px solid #28e070; }
  .li.complete .status:before {
    background-color: #146B36;
    border: none;
    transition: all 200ms ease-in;
  }
  h6 {
    margin-bottom: 5px;
    font-size: .6rem;
    color: #0081cc;
  }
`