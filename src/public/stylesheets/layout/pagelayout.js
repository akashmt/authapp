import { createGlobalStyle  }  from 'styled-components'

const PAGECONTAINER_MARGIN = '0px auto 0px auto'
const PAGECONTAINER_PADDING = '15px 15px 15px 15px'
const PAGECONTAINER_DESKTOP_WIDTH = '1200px'

const PAGEHTML_BACKGROUND_COLOR = 'transparent'
const PAGEBODY_BACKGROUND_COLOR = 'grey'
const PAGEWRAPPER_BACKGROUND_COLOR = 'transparent'

const PAGEHEADER_BACKGROUND_COLOR= '#232323'
const PAGEMAINNAV_BACKGROUND_COLOR= '#232323'
const PAGEMAIN_BACKGROUND_COLOR= '#232323'
const PAGEASIDE_BACKGROUND_COLOR= '#232323'
const PAGEFOOTERNAV_BACKGROUND_COLOR= '#232323'
const PAGEFOOTER_BACKGROUND_COLOR= '#232323'

const PAGEBODY_FONT_COLOR = 'white'

const SECTION_BORDER_COLOR = 'grey'

export const PageGrid = createGlobalStyle`
	html { background-color: ${PAGEHTML_BACKGROUND_COLOR}; }
	body { 
		background-color: ${PAGEBODY_BACKGROUND_COLOR};
		color: ${PAGEBODY_FONT_COLOR}
	}
	.Page-screen {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto auto auto;
		/* grid-template-rows: repeat(2, auto) 1fr; */
		grid-template-areas:
			"pageheader"
			"pagemainnav"
			"pagemain"
			"pageaside"
			"pagefooternav"
			"pagefooter";
		
		header.Page-header 	{ grid-area: pageheader; }
		nav.Page-mainnav 		{ grid-area: pagemainnav; }
		main.Page-main 			{ grid-area: pagemain; }
		aside.Page-aside 		{ grid-area: pageaside; }
		nav.Page-footernav 	{ grid-area: pagefooternav; }
		footer.Page-footer 	{ grid-area: pagefooter; }

		.Page-wrapper {
			background-color: ${PAGEWRAPPER_BACKGROUND_COLOR};
			.Page-container {
				margin: ${PAGECONTAINER_MARGIN};
				padding: ${PAGECONTAINER_PADDING};
				width: ${PAGECONTAINER_DESKTOP_WIDTH};
				border-bottom: 1px solid ${SECTION_BORDER_COLOR};
			}
		}
	}
`

export const PageHeaderGrid = createGlobalStyle`
	section.Page-header 	{
		header.Page-container {
			background-color: ${PAGEHEADER_BACKGROUND_COLOR};
		}
	}
`

export const PageMainNavGrid = createGlobalStyle`
	section.Page-mainnav 	{ 
		nav.Page-container {
			background-color: ${PAGEMAINNAV_BACKGROUND_COLOR};
		}
	}
`

export const PageMainGrid = createGlobalStyle`
	section.Page-main 	{
		main.Page-container {
			background-color: ${PAGEMAIN_BACKGROUND_COLOR}; 
		}
	}
`

export const PageAsideGrid = createGlobalStyle`
	section.Page-aside 	{
		aside.Page-container {
			background-color: ${PAGEASIDE_BACKGROUND_COLOR};
		}
	}
`

export const PageFooterNavGrid = createGlobalStyle`
	section.Page-footernav {
		nav.Page-container 	{ 
			background-color: ${PAGEFOOTERNAV_BACKGROUND_COLOR};
		}
	}
`

export const PageFooterGrid = createGlobalStyle`
	section.Page-footer {
		footer.Page-container {
			background-color: ${PAGEFOOTER_BACKGROUND_COLOR};
		}
	}
`