import React, { Component } from 'react'
import AppStyles from '../../appsystem/globalstyles'

class Documentation extends Component {
	render() {
		return (
			<React.Fragment>
			<AppStyles/>
			<section className="Documentation-screen" style={{'padding':'100px'}}>
				<h1>Documentation - TEMP Form Styles</h1>
				<hr/>
				<h2>Input</h2>
				<form className="Form-fourcolumn">
					<div className="Form-group">
						<label>Input</label>
						<input type="text" placeholder="Enter text" />
						<small className="form-default">Some random text notification.</small>
					</div>
					<div className="Form-group">
						<label>Input:Focus</label>
						<input type="text" placeholder="Enter text" autofocus />
						<small className="form-focus">An onFocus input notification.</small>
					</div>
					<div className="Form-group">
						<label>Input:Required</label>
						<input type="text" placeholder="Required input" required />
						<small className="form-required">A required input notification.</small>
					</div>
					<div className="Form-group">
						<label>Input:Disabled</label>
						<input type="text" placeholder="Disabled" disabled />
						<small className="form-disabled">This input is disabled.</small>
					</div>
				</form>

				<form className="Form-twocolumn">
					<div className="Form-group">
						<label>Input:Readonly</label>
						<input type="text" placeholder="Read Only" readonly value="This is ReadOnly" />
						<small className="form-readonly">This input is readonly.</small>
					</div>
				</form>

				<h2>Radio Button</h2>
				<form className="Form-fourcolumn">
					<div className="Form-group">
						<label>Radio</label>
						<div className="radio-horizontal">
							<input type="radio" /><span>Some text option</span>
						</div>
						<small className="form-default">This is a radio input.</small>
					</div>
					<div className="Form-group">
						<label>Radio:Checked</label>
						<div className="radio-horizontal">
							<input type="radio" checked /><span>Some checked text option</span>
						</div>
						<small className="form-required">This radio input is Checked.</small>
					</div>
					<div className="Form-group">
						<label>Radio:Required</label>
						<div className="radio-horizontal">
							<input type="radio" required /><span>Some required text option</span>
						</div>
						<small className="form-required">This radio input is Required.</small>
					</div>
					<div className="Form-group">
						<label>Radio:Disabled</label>
						<div className="radio-horizontal">
							<input type="radio" disabled /><span>Some disabled text option</span>
						</div>
						<small className="form-disabled">This radio input is disabled.</small>
					</div>
				</form>

				<h2>Checkbox</h2>
				<form className="Form-fourcolumn">
					<div className="Form-group">
						<label>Checkbox</label>
						<div className="checkbox-horizontal">
							<input type="checkbox" /><span>Some text checkbox option</span>
						</div>
						<small className="form-default">This is a checkbox input.</small>
					</div>
					<div className="Form-group">
						<label>Checkbox:Checked</label>
						<div className="checkbox-horizontal">
							<input type="checkbox" checked /><span>Some checked text option</span>
						</div>
						<small className="form-required">This checkbox input is checked.</small>
					</div>
					<div className="Form-group">
						<label>Checkbox:Required</label>
						<div className="checkbox-horizontal">
							<input type="checkbox" required /><span>Some required checkbox text</span>
						</div>
						<small className="form-required">This is a required checkbox input.</small>
					</div>
					<div className="Form-group">
						<label>Checkbox:Disabled</label>
						<div className="checkbox-horizontal">
							<input type="checkbox" disabled /><span>Some disabled checked text</span>
						</div>
						<small className="form-disabled">This checkbox input is disabled.</small>
					</div>
				</form>

				<h2>Textarea</h2>
				<form className="Form-fourcolumn">
					<div className="Form-group">
						<label>Textarea</label>
						<textarea/>
						<small className="form-disabled">Some random text notification.</small>
					</div>
					<div className="Form-group">
						<label>Textarea:disabled</label>
						<textarea placeholder="Disabled" disabled />
						<small className="form-disabled">Some random text notification.</small>
					</div>
				</form>

				<h2>Select</h2>
				<form className="Form-fourcolumn">
					<div className="Form-group">
						<label>Select</label>
						<select>
							<option>Select Option</option>
							<option>Option 1</option>
							<option>Option 2</option>
						</select>
						<small className="form-disabled">Some random text notification.</small>
					</div>
					<div className="Form-group">
						<label>Select:disabled</label>
						<select disabled>
							<option>Select Disabled</option>
							<option>Option 1</option>
							<option>Option 2</option>
						</select>
						<small className="form-disabled">Some random text notification.</small>
					</div>
				</form>

				<h2>Typography</h2>
				<form className="Form-twocolumn">
					<div className="Form-group">
						<h1>h1</h1>
						<h2>h2</h2>
						<h3>h3</h3>
						<h4>h4</h4>
						<h5>h5</h5>
						<h6>h6</h6>
					</div>
					<div className="Form-group">
						<p><strong>p: </strong></p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi architecto eveniet commodi dolores repudiandae laborum, ratione nihil exercitationem quaerat minus est nemo tenetur tempora dolor tempore blanditiis vel eaque nulla ipsa.</p>
						<p><strong>p.lead: </strong></p>
						<p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi architecto eveniet commodi dolores repudiandae laborum, ratione nihil.</p>
						<p><strong>horizontal rule: </strong></p>
						<hr/>
					</div>
				</form>

			</section>
			</React.Fragment>
		)
	}
}

export default Documentation