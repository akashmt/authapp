import React, { Component } from 'react'
import styled from 'styled-components'
import FormContainer from './FormContainer'

export default class LoginScreen extends Component {
	render(){
		return (
			<StyledSection>
				<FormContainer/>
			</StyledSection>
		)
	}
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`