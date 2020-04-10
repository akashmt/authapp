import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SearchBoxContainer } from '../../../../../appsystem/containers/appsheader'
import { Spring } from 'react-spring/renderprops'
import { IconPolicemanShield, IconFiremanShield } from '../../../../../appsystem/assets/icons/brand'
import { Radio } from '../../../../../appsystem/dataentry/inputs'

const SearchBox = props => {
	const appstate = useSelector(state => state.appstateReducer)
	const dispatch = useDispatch()
	const inputEl = useRef(true)
	const holderEl = useRef(null)
	const caretEl = useRef(null)
	const [agencyType, setAgencyType] = useState('all')

	const focusInput = (e) => {
		inputEl.current.focus()
		caretEl.current.classList.add("bling")
		holderEl.current.classList.add("hide")
	}

	const blurInput = (e) => {
		caretEl.current.classList.remove("bling")
		if (appstate.searchString === "") {
			holderEl.current.classList.remove("hide")
		}
	}

	// Search value change
	const handleSearchChange = (e) => {
		dispatch({ type: 'GET_SEARCH_VAL', _value:e.target.value })
	}

	// Set Agency Value On Change
	const getAgencyValue = (event) => {
		dispatch({ type: 'GET_AGENCY_VAL', _value:event.target.getAttribute('data-agency') })
		document.getElementById("overlay-search-panel").classList.remove("checked")
		document.getElementById("open-panel").style.display = "flex"
		document.getElementById("close-panel").style.display = "none"
	}

	// Set Agency Type Filter
	const getAgencyType = (e) => {
		var val = e.target.value
		setAgencyType(val)
	}

	const items = []
	var libraries = props.items,
	searchString = appstate.searchString.trim().toLowerCase()

	var agencytypeArray = libraries.map(function(item) { return item.type })
	agencytypeArray = Array.from(new Set(agencytypeArray))

	if(libraries) {
		libraries = libraries.filter(function(i) {
			if(agencyType === 'all') {
				return i.friendlyname.toLowerCase().match( searchString )
			} else {
				if(i.type === agencyType) {
					return i.friendlyname.toLowerCase().match( searchString )
				}
			}
			return null
		})

		libraries.forEach(i => items.push(
			<Spring key={i.name}
				from={{ opacity: 0, transform: 'translate3d(-10px, 0, 0) scale(0)' }}
				to={{ opacity: 1, transform: 'translate3d(0px, 0, 0) scale(1)' }}>
				{ props => (
						<li className={i.type} key={i.id} style={ props }>
							<span data-agency={i.name} onClick={getAgencyValue}>
								{(() => {
									switch(i.type) {
										case 'police':
											return <IconPolicemanShield/>
										case 'fire':
											return <IconFiremanShield/>
										default:
											return null;
									}
								})()}
								{i.friendlyname}
							</span>
						</li>
					)
				}
			</Spring>
		))
	} else {
		return "Select Module First.."
	}

	return (
		<SearchBoxContainer className="Search-agency">
			<form className="search-form">
				<div className="form-group-radio">
					<div className="radio-horizontal">
						<Radio id="all" className="form-input" type="radio" value="all" checked={agencyType === 'all'} onChange={getAgencyType} />
						<label htmlFor="all">All</label>
					</div>
					{agencytypeArray.map(function(option, index) {
						return (
							<div key={index} className="radio-horizontal">
								<Radio id={"type_" + option} className="form-input" type="radio" value={option} checked={agencyType === `${option}`} onChange={getAgencyType} />
								<label htmlFor={"type_" + option}>{option}</label>
							</div>
						)
					})}
				</div>
				<Spring 
					from={{ opacity: 0, transform: 'translate3d(0px, 0, 0) scale(0)' }}
					to={{ opacity: 1, transform: 'translate3d(0px, 0, 0) scale(1)' }}>
					{ props => (
						<div className="caret" tabIndex="1" onClick={focusInput} onFocus={focusInput}>
							<div className="caret-content" >
								<div ref={holderEl} className="caret-place-holder">Agency Search...</div>
								<span className="input-content">{appstate.searchString}</span>
								<span ref={caretEl} className="input-caret"></span>
								<input ref={inputEl} onBlur={blurInput} className="hidden-input" type="text" onChange={handleSearchChange} tabIndex="-1"  />
							</div>
						</div>
						// <input style={ props } id="agency_search" type="text" 
						//   autoFocus={true}
						//   value={appstate.searchString}
						//   placeholder="Agency Search..." 
						//   onChange={handleSearchChange} />
						)
					}
				</Spring>
			</form>
			<div className="search-results">
				<ul>
					{items}
				</ul>
			</div>
		</SearchBoxContainer>
	)
}

export default SearchBox