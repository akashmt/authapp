import styled from 'styled-components'
import { BRANDICON_FILL, BRANDTEXT_FILL, BRANDTEXTBOTTOM_FILL } from './_consts'
import { flexRowStart } from '../../utilities'

export const HeaderBrandContainer = styled.section`
	${flexRowStart}
	figure {
		margin: 0px 0px 0px 15px;
		padding: 0px 0px 0px 0px;
		svg { 
			fill: ${BRANDICON_FILL};
			&#logo-eds-hat-liquid { margin-right: 15px; width: 50px; }
		}
	}
	h1 {
		font-size: 1.5rem;
		span { display: none; }
		small { display: none; font-size: .6rem; }
		svg {
			&#logo-eds-text-liquid, &#logo-eds-textbottom-liquid { display: block; }
			&#logo-eds-text-liquid {
				margin: 0px 0px 5px 0px;
				width: 100px;
				fill: ${BRANDTEXT_FILL};
			}
			&#logo-eds-textbottom-liquid { 
				width: 80px;
				fill: ${BRANDTEXTBOTTOM_FILL};
			}
		}
	}
`