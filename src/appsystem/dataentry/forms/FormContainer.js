import styled from 'styled-components'

import { 
	FORM_MARGIN, FORM_MARGIN_LASTOFTYPE, FORM_PADDING,
  FORM_BORDER_SIZE, FORM_BORDER_TYPE, FORM_BORDER_COLOR,
  FORMTYPOGRAPHY_BORDER_SIZE, FORMTYPOGRAPHY_BORDER_TYPE, FORMTYPOGRAPHY_BORDER_COLOR
	// FORMELEMENT_MARGIN, FORMELEMENT_PADDING, FORMELEMENT_HEIGHT,
	// FORMELEMENT_FONT_COLOR, FORMELEMENT_FONT_TEXTTRANSFORM,
	// FORMELEMENT_BORDER_WIDTH, FORMELEMENT_BORDER_RADIUS, FORMELEMENT_BORDER_COLOR,
	// FORMELEMENT_BORDER_COLOR_TRANSITION, FORMELEMENT_BORDER_STYLE, FORMELEMENT_BORDER_IMAGE,
	// FORMELEMENT_BACKGROUND_COLOR, FORMELEMENT_BACKGROUND_POSITION,
	// FORMELEMENT_BACKGROUND_REPEAT
} from '../_consts'

export const FormContainer = styled.form`
  margin: ${FORM_MARGIN};
  &:last-of-type { margin: ${FORM_MARGIN_LASTOFTYPE}; }
  padding: ${FORM_PADDING};
  border: ${FORM_BORDER_SIZE} ${FORM_BORDER_TYPE} ${FORM_BORDER_COLOR};

  &.Form-twocolumn {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
	&.Form-threecolumn {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 15px;
	}
	&.Form-fourcolumn {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 15px;
  }
  
  .Form-group {
		margin: 0px 0px 15px 0px;
		label { display: block; margin-bottom: 5px; }
		input:not([type=checkbox]):not([type=radio]) { display: block; margin-bottom: 2px; }
		select { display: block; }
		small { display: block; }
  }
  
  h1, h2, h3, h4, h5, h6 { 
    margin: 0px 0px 15px 0px;
    padding: 0px 0px 0px 0px;
    text-transform: uppercase;
  }
  h1 {
    margin: 0px 0px 15px 0px;
    padding: 0px 0px 15px 0px;
    border-bottom: 
      ${FORMTYPOGRAPHY_BORDER_SIZE} 
      ${FORMTYPOGRAPHY_BORDER_TYPE} 
      ${FORMTYPOGRAPHY_BORDER_COLOR};
  }
  h2 { }
  h3 { }
  h4 { }
  h5 { }
  h6 { }

  p { 
    &.lead { font-style: italic; }
    strong { font-style: normal; }
  }

  hr { }

  button {
    background-color: #606060;
    border-color: #606060;
    color: white;
  }
`