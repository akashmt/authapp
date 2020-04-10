import styled from 'styled-components'
import { TOGGLEDARKMODE_INPUTBG, TOGGLEDARKMODE_LABELBG, TOGGLEDARKMODE_LABEL } from './_consts'

export const ToggleDarkmodeContainer = styled.span`
	input { 
		&:checked + label { background-color: ${TOGGLEDARKMODE_INPUTBG}; }
		&[type=checkbox]{
			height: 0;
			width: 0;
			visibility: hidden;
			&:checked + label { }
			&:checked + label:after {
				left: calc(100% - 5px);
				transform: translateX(-100%);
			}
		}
	}
	label {
		cursor: pointer;
		text-indent: -9999px;
		width: 52px;
		height: 27px;
		float: right;
		border-radius: 100px;
		position: relative;
		background-color: ${TOGGLEDARKMODE_LABELBG};
		&:after {
			background-color: ${TOGGLEDARKMODE_LABEL};
			content: '';
			position: absolute;
			top: 3px;
			left: 3px;
			width: 20px;
			height: 20px;
			border-radius: 90px;
			transition: 0.3s;
		}
		&:active:after { width: 45px; }
	}
`