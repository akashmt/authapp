import React from 'react'
import { useSelector } from 'react-redux'
import AgencyBrandCurrent from './AgencyBrandCurrent'
import AgencyBrandPlaceholder from './AgencyBrandPlaceholder'

const AgencyBrand = props => {
  const appstate = useSelector(state => state.appstateReducer)
  return (
    <section className="Agency-brand">
      <h3>
      {appstate.valAgency 
        ? <AgencyBrandCurrent {...props}/>
        : <AgencyBrandPlaceholder/>
      }
      </h3>
    </section>
  )
	
}

export default AgencyBrand