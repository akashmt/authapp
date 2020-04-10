import styled from 'styled-components'
import { SEARCHTEXT_COLOR, SEARCHBG_COLOR, SEARCHBORDER_COLOR,
				 SEARCHAGENCYICON_COLOR, SEARCHAGENCYICON_COLOR_CLOSE, SEARCHAGENCYLOGO_COLOR,
				 SEARCHTITLE_COLOR,
				 SEARCHAGENCYICON_HOVER, SEARCHAGENCYICON_CLOSE_HOVER, SEARCHAGENCYLOGO_HOVER,
				 SEARCHTITLE_COLOR_HOVER } from './_consts'
import { flexRowCenter, flexRowStart } from '../../utilities'

export const SearchPanelContainer = styled.section`
	margin: 0px 0px 0px 15px;
	color: ${SEARCHTEXT_COLOR};
	background-color: ${SEARCHBG_COLOR};
	border: ${SEARCHBORDER_COLOR};
	border-radius: 3px;

	a.panel-icon {
		${flexRowStart}
		padding: 10px 5px 10px 5px;
		position: relative;
		transition: all .3s ease;
		svg {
			&#icon-search, &#icon-bars {
				margin-right: 10px;
				width: 20px;
				height: 20px;
				&:hover { }
			}
			&#icon-bars { margin-right: 15px; }
			&#icon-search { fill: ${SEARCHAGENCYICON_COLOR}; }
			&#icon-times { 
				fill: ${SEARCHAGENCYICON_COLOR_CLOSE};
				width: 42px;
				height: 42px;
				&:hover { }
			}
			&#icon-policeman-shield { fill: ${SEARCHAGENCYLOGO_COLOR}; }
		}
		section.Agency-brand {
			/* ${flexRowCenter} */
			h3 {
        margin-bottom: 0px;
				span {
					/* ${flexRowCenter} */
					color: ${SEARCHTITLE_COLOR};
					font-size: 1rem;
					font-weight: 100;
          text-transform: uppercase;
          display:flex;
          align-items: center;
					svg { 
						margin-right: 5px;
						width: 18px;
					}
				}
			}
		}
		&:hover {
			svg {
				&#icon-search { fill: ${SEARCHAGENCYICON_HOVER};  }
				&#icon-times { fill: ${SEARCHAGENCYICON_CLOSE_HOVER}; }
				&#icon-policeman-shield { fill: ${SEARCHAGENCYLOGO_HOVER}; }
			}
			section.Agency-brand {
				h3 { span { color: ${SEARCHTITLE_COLOR_HOVER}; } }
			}
		}
	}

	&.checked {
		a.panel-icon {
			position: fixed;
			top: 30px;
			right: 60px;
			/* transition-delay: .75s; */
			z-index: 99;
		}
		.searchpanel-overlay {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0);
			/* transition-delay: 0s; */
		}
	}

	&.agency_fire {
		border: RED;
		background-color: RED;
	}
	
	.searchpanel-overlay {
		z-index: 11;
		position: fixed;
		padding: 1rem 1rem 1rem 1rem;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100%;
		overflow-y: scroll;
		text-align: center;
		opacity: 0;
		-webkit-transform: translateY(-100%);
		transform: translateY(-100%);
		/* transition: opacity 0.45s 0.45s ease, -webkit-transform 0s 1.2s; */ */
		/* transition: opacity 0.45s 0.45s ease, transform 0s 1.2s; */
		/* transition: opacity 0.45s 0.45s ease, transform 0s 1.2s, -webkit-transform 0s 1.2s; */
	}
`