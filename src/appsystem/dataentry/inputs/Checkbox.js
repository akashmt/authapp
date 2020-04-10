import styled  from 'styled-components'

import { } from '../_consts'


export const FormCheckboxHorizontal =  styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap; 
  align-items: center;
  align-content: center;

  margin-bottom: 5px;
  input { }
  span 	{ }
`

export const Checkbox =  styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    background-color: #909090;
    border-color: #909090;
    width: 16px;
    height: 16px;
    border-radius: 3px;
  }
  &:checked {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: #606060;
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
			border-radius: 2px;
		}
		&~ span { color: rgba(236, 236, 236, 01); }
	}
`