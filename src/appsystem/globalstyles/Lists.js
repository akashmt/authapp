import { createGlobalStyle  }  from 'styled-components';

export const List = createGlobalStyle `
	ul, ol {
		margin: 0rem 0rem 0rem 1rem;
		padding: 0rem 0rem 0rem 0rem;
		li {

		}
	}
`

export const Details = createGlobalStyle `
	details {
		margin: 0rem 0rem 1rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		summary { 
			cursor: pointer;
			div { }
		}
	}
`

export const DataList = createGlobalStyle `
	datalist {
		option { }
	}
`