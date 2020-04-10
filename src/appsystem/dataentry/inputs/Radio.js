import styled  from 'styled-components'


import { 	FORM_COLOR, FORMELEMENT_MARGIN, FORMELEMENT_PADDING, FORMELEMENT_HEIGHT,
	FORMELEMENT_FONT_COLOR, FORMELEMENT_FONT_TEXTTRANSFORM,
	FORMELEMENT_BORDER_WIDTH, FORMELEMENT_BORDER_RADIUS, FORMELEMENT_BORDER_COLOR,
	FORMELEMENT_BORDER_COLOR_TRANSITION, FORMELEMENT_BORDER_STYLE, FORMELEMENT_BORDER_IMAGE,
	FORMELEMENT_BACKGROUND_COLOR, FORMELEMENT_BACKGROUND_POSITION,
	FORMELEMENT_BACKGROUND_REPEAT
} from '../_consts'



export const FormRadioHorizontal =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap; 
  align-items: center;
  align-content: center;
  cursor: pointer;

  margin-bottom: 5px;
  input { }
  span  { }
  label {
    margin-bottom: 0px;
    cursor: pointer;
  }
`

export const Radio =  styled.input.attrs({ type: 'radio' })`
  margin: ${FORMELEMENT_MARGIN};
  padding: ${FORMELEMENT_PADDING};
  height: ${FORMELEMENT_HEIGHT};
  -webkit-appearance: none;
  box-sizing: border-box;
  outline: none;
  color: ${FORMELEMENT_FONT_COLOR};
  text-transform: ${FORMELEMENT_FONT_TEXTTRANSFORM};
  border-width: ${FORMELEMENT_BORDER_WIDTH};
  border-radius: ${FORMELEMENT_BORDER_RADIUS};
  border-color: ${FORMELEMENT_BORDER_COLOR};
  transition: ${FORMELEMENT_BORDER_COLOR_TRANSITION};
  border-style: ${FORMELEMENT_BORDER_STYLE};
  border-image: ${FORMELEMENT_BORDER_IMAGE};
  background-color: ${FORMELEMENT_BACKGROUND_COLOR};
  background-position: ${FORMELEMENT_BACKGROUND_POSITION};
  background-repeat: ${FORMELEMENT_BACKGROUND_REPEAT};
  &:focus {
    background-color: ${FORM_COLOR};
    border-color: ${FORM_COLOR};
    color: WHITE;
  }

  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
  &:hover {
    background-color: #909090;
    border-color: #909090;
    width: 16px;
    height: 16px;
    border-radius: 8px;
  }
  &:checked {
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background-color: ${FORM_COLOR}
  }

  &:required {
		border: 1px solid red;
		background-color: salmon;
		&::-webkit-input-placeholder { color: white; }
		&:-moz-placeholder { color: white; }
		&::-moz-placeholder { color: white; }
		&:-ms-input-placeholder { color: white; }
		outline: none;
		&:hover { opacity: .6; }
		&:checked {
			background-color: #606060;
			border: 1px solid #606060;
			&~ span { color: #606060; }
		}
		&~ span { color: red; }
	}

  &:disabled {
		background-color: rgba(236, 236, 236, 0.2);
		border-color: rgba(236, 236, 236, 0.4);
		&:hover {
			cursor: default;
			background-color: rgba(236, 236, 236, 0.2);
			border-color: rgba(236, 236, 236, 0.4);
			width: 16px;
			height: 16px;
			border-radius: 6px;
		}
		&~ span { color: rgba(236, 236, 236, 01); }
	}
`