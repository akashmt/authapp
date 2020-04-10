import { createGlobalStyle  }  from 'styled-components'

export const MainNavList = createGlobalStyle`

	.Page-mainnav {
		nav {
			ul {
				display: flex;
				li {
					a {
						&:hover { }
					}
				}
			}
		}
	}

`