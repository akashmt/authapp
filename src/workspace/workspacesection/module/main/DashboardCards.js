import React from 'react'
import { IconPlusSquare, IconEdit, 
				 IconExchange, IconEditPenSquare } from '../../../../appsystem/assets/icons/actions'

import { DashboardCardsContainer } from '../../../../appsystem/containers/module'

export default function DashboardCards() {
	return (
		<DashboardCardsContainer className="Module-content">
			<div className="Dashboard-Card Card1">
				<div className="Card-stats">
					<IconPlusSquare/>
					<span>53</span>
				</div>
				<div className="Card-content">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad sequi autem quibusdam quisquam cumque voluptas sapiente.</p>
				</div>
			</div>
			<div className="Dashboard-Card Card2">
				<div className="Card-stats">
					<IconEdit/>
					<span>104</span>
				</div>
				<div className="Card-content">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad sequi autem quibusdam quisquam cumque voluptas sapiente.</p>
				</div>
			</div>
			<div className="Dashboard-Card Card3">
				<div className="Card-stats">
					<IconExchange/>
					<span>201</span>
				</div>
				<div className="Card-content">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad sequi autem quibusdam quisquam cumque voluptas sapiente.</p>
				</div>
			</div>
			<div className="Dashboard-Card Card4">
				<div className="Card-stats">
					<IconEditPenSquare/>
					<span>201</span>
				</div>
				<div className="Card-content">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ad sequi autem quibusdam quisquam cumque voluptas sapiente.</p>
				</div>
			</div>
		</DashboardCardsContainer>
	)
}