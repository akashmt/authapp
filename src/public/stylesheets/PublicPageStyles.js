import React from 'react'

import { PageGrid, PageHeaderGrid, PageMainNavGrid,
				 PageMainGrid, PageAsideGrid, PageFooterNavGrid,
				 PageFooterGrid } from './layout/pagelayout'

import { MainNavList } from './mainnav/mainnav'

function PublicPageStyles(){
  return (
		<React.Fragment>
			<PageGrid/>
				<PageHeaderGrid/>
				<PageMainNavGrid/>
				<PageMainGrid/>
				<PageAsideGrid/>
				<PageFooterNavGrid/>
				<PageFooterGrid/>
			<MainNavList/>
		</React.Fragment>
	)
}

export default PublicPageStyles