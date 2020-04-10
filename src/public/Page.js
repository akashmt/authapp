import React from 'react'
import PublicPageStyles from './stylesheets/PublicPageStyles'

import PageHeader from './containers/header/PageHeader'
import PageMainNav from './containers/mainnav/PageMainNav'
import PageMain from './containers/main/PageMain'
import PageAside from './containers/aside/PageAside'
import PageFooterNav from './containers/footernav/PageFooterNav'
import PageFooter from './containers/footer/PageFooter'

const Page = ({ usercontext }) => {
	console.log('Page: ', usercontext);
	return (
		<div className="Page-screen">
			<PublicPageStyles/>
			<PageHeader/>
			<PageMainNav/>
			<PageMain usercontext={usercontext}/>
			<PageAside/>
			<PageFooterNav/>
			<PageFooter/>
		</div>
	)
}

export default Page
