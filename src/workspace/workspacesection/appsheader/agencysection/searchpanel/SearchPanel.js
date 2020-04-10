import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SearchPanelContainer, SearchNavContainer } from '../../../../../appsystem/containers/appsheader'

import SearchBox from './SearchBox'
import AgencyBrand from '../brand/AgencyBrand'
import { IconSearch } from '../../../../../appsystem/assets/icons/actions'
import { IconTimes } from '../../../../../appsystem/assets/icons/toggle'

const SearchPanel = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const userdata = useSelector(state => state.usercontextReducer.usercontext.filter(userdata => (userdata.ifAuthToken !== '')))

	const [displaySearchBox, setDisplaySearchBox] = useState(false)
	const [selectedAgency, setSelectedAgency] = useState('')

	const panelIn = () => {
		setDisplaySearchBox(true)
		document.getElementById("overlay-search-panel").classList.add("checked")
		document.getElementById("open-panel").style.display = "none"
		document.getElementById("close-panel").style.display = "flex"
	}

	const panelOut = () => {
		setDisplaySearchBox(false)
		document.getElementById("overlay-search-panel").classList.remove("checked")
		document.getElementById("open-panel").style.display = "flex"
		document.getElementById("close-panel").style.display = "none"
	}

	const selectedAgencyType = (type) => {
		setSelectedAgency(type)
	}

	var libraries

	userdata[0].applications.map((application) => (
		application.modules.map((module) =>{
			if(module.name === appstate.valModule) {
				libraries = module.agencies
			} 
			return (null)
		})
	))

	let Searchbox = null
	if ( displaySearchBox ) {
		Searchbox = (
			<SearchNavContainer className="searchpanel-overlay">
				<SearchBox items={libraries} panelOut={panelOut} />
			</SearchNavContainer>
		)
	}

	return (
		<SearchPanelContainer 
			id="overlay-search-panel" 
			className={"Agency-searchpanel agency_"+ selectedAgency}>

			<Link to="" id="open-panel" className="panel-icon" onClick={panelIn}>
				<IconSearch/>
				<AgencyBrand selectedAgencyType={selectedAgencyType}/>
			</Link>

			<Link to="" id="close-panel" className="panel-icon" onClick={panelOut} style={{ display: 'none' }}>
				<IconTimes/>
			</Link>

			{Searchbox}

		</SearchPanelContainer>
	)
}

export default SearchPanel