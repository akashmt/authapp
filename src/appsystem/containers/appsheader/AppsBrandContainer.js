import styled from 'styled-components'
import { BRANDLOGO_COLOR } from './_consts'
import { flexRowStart } from '../../utilities'

export const AppsBrandContainer = styled.div`
	${flexRowStart}
	height: 100%;
	svg {
		width: 60px;
		fill: ${BRANDLOGO_COLOR};
		&#logo-extraduty-stacked {  }
		&#logo-onduty {  }
	}
`