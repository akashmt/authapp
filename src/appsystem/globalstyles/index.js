import React from 'react'
import { Normalize } from './Normalize'
import { HtmlBody } from './HtmlBody'
import { Typography } from './Typography'
import { Anchors } from './Anchors'
import { Buttons } from './Buttons'
import { Cards } from './Cards'
import { Breadcrumbs } from './Breadcrumbs'
import { List, Details, DataList } from './Lists'
import { Alert, Dialog } from './Alerts'
import { Table } from './Tables'
import { Blockquote } from './Blockquotes'
import { Code } from './Code'

function GlobalStyles(){
  return (
		<React.Fragment>
			<Normalize/>
			<HtmlBody/>
		
			<Typography/>

			<Anchors/>
      <Buttons/>

      <Cards/>

      <Breadcrumbs/>

			<List/>
			<Details/>
			<DataList/>

			<Alert/>
			<Dialog/>

			<Table/>
			<Blockquote/>
			<Code/>
		</React.Fragment>
	)
}

export default GlobalStyles