import React from 'react'

const PageMain = ({ usercontext }) => {
	console.log('Page: ', usercontext);
	return (
		<section className="Page-wrapper Page-main">
		<main className="Page-container">
			{usercontext.map((user, index) => {
				return ( 
					<div key={index}>test: {user.test}
						{user.applications.map((application, index) => {
							return ( <div key={index}>appsname: {application.name}</div> )
						})}
					</div>
				)
			})}
		</main>
		</section>
	)
}
	
export default PageMain
