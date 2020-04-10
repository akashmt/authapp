import styled from 'styled-components'
import { SEARCHAGENCY_FORMBORDER_COLOR, SEARCHAGENCY_FORMBG_COLOR,
				 SEARCHAGENCY_FORMINPUTTEXT_COLOR, SEARCHAGENCY_FORMINPUTBGFOCUS_COLOR,
				 SEARCHRESULTITEM_COLOR, SEARCHRESULTITEMBG_COLOR,
				 SEARCHRESULTITEMBG_COLOR_HOVER, SEARCHRESULTITEM_BOXSHADOW } from './_consts'
import { flexRowCenter } from '../../utilities'

export const SearchBoxContainer = styled.div`

	/* Search Results */
	.search-results {
		min-width: 100%;
		max-width: 100%;
		margin-top: 30px;
		ul {
			${flexRowCenter}
			flex-wrap: wrap;

			margin: 0px 0px 0px 0px;
			padding: 0px 0px 0px 0px;
			list-style-type: none;
			li {
				display: grid;
				margin: 15px;
				color: ${SEARCHRESULTITEM_COLOR};
				background-color: ${SEARCHRESULTITEMBG_COLOR};
				&.fire { background-color: RED; }
				span {
					display: block;
					margin: 0px 0px 0px 0px;
					padding: 20px 20px 20px 20px;
					width: 200px;
					height: 120px;
					/* line-height: 50px; */
					text-transform: uppercase;
					&:hover {
						cursor: pointer;
						background-color: ${SEARCHRESULTITEMBG_COLOR_HOVER};
						box-shadow: ${SEARCHRESULTITEM_BOXSHADOW};
					}
					svg {
						width: 22px;
						margin: 0px auto;
						display: block;
						margin-bottom: 5px;
						fill: ${SEARCHRESULTITEM_COLOR};
					}
				}
			}
		}
	}


	/* Input Form */
	form.search-form { 
		border: ${SEARCHAGENCY_FORMBORDER_COLOR};
		.form-group-radio {
			${flexRowCenter}
			margin-bottom: 20px;
			.radio-horizontal {
				margin: 0px 50px 10px 50px;
				label { text-transform: capitalize; }
			}
		}
		input[type="text"] {
			margin: 0px 0px 0px 0px;
			padding: 0px;
			min-width: 100%;
			max-width: 100%;
			border: 1px;
			text-transform: uppercase;
			background-color: ${SEARCHAGENCY_FORMBG_COLOR};
			color: ${SEARCHAGENCY_FORMINPUTTEXT_COLOR};
			&:focus {
				background-color: ${SEARCHAGENCY_FORMINPUTBGFOCUS_COLOR};
				color: ${SEARCHAGENCY_FORMINPUTTEXT_COLOR};
			}
		}
		input[type="text"] {
			&::-webkit-input-placeholder,
			&::-moz-placeholder,
			&:-ms-input-placeholder,
			&:-moz-placeholder { color: ${SEARCHAGENCY_FORMINPUTTEXT_COLOR}
		}
	}

	/* Flashing Cursor */
	.caret {
		height: 60px;
		display: block;
		.caret-content {
			height: 100%;
			display: block;
			padding: 10px 20px;
			border-bottom: 1px solid #ccc;
			position: relative;
			text-align: center;
			&:after {
				content: "";
				display: table;
				clear: both;
			}
			.caret-place-holder {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				color: #fff;
				font-size: 30px;
				padding: 10px 20px;
				display: inline-block;
				transition: all .4s;
				&.hide { transform: scale(0); opacity: 0; }
			}
			.input-content {
				font-size: 30px;
				vertical-align: top;
				padding-top: 4px;
				display: inline-block;
				height: 100%;
			}
			.input-caret {
				padding: 4px 5px;
				width: 0;
				height: 100%;
				background: #fff;
				display: none;
				&.bling {
					display: inline-block;
					animation: caret-bling 1s infinite, caret-scale .4s;
				}
			}
			.hidden-input { width: 0; height: 0; opacity: 0; }
		}
	}
	@keyframes caret-bling {
		0% { opacity: 1; }
		100% { opacity: 0; }
	}
	@keyframes caret-scale {
		0% { opacity: 0; transform: scaleX(15) scaleY(5); }
		100% { opacity: 1; transform: scaleX(1) scaleY(1); }
	}

`