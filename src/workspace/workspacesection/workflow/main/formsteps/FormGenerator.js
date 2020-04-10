import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormContainer, Input, Textarea, Select,  Radio, FormRadioHorizontal, Checkbox, FormCheckboxHorizontal } from '../../../../../appsystem/dataentry'

const FormGenerator = (props) => {

  const formstate = useSelector(state => state.stepReducer.formstate)
  const dispatch = useDispatch()

  // Set field value
  const onChange = (e, key) => {
    dispatch({ type: 'SET_FORM_STEP_VALUE', _key:key , _value:e.target.value });
  }

  const { currentstep } = props

  const renderForm = (f) => {
        
    let key = f.name;
    let component = f.component;
    let type = f.type || "text";
    let props = f.props || {};
    let name= f.name;
    let value = f.initialValue;

    let target = key;  

    if(formstate[target] !== undefined) {
      value = formstate[target];
    }
            
    let input =  <Input {...props}
      className="form-input"
      type={type}
      key={key}
      name={name}
      value={value}
      onChange={(e)=>{onChange(e, target)}}
    />

    // Texrarea 
    if (component === "textarea") {
      input =  <Textarea
        className="form-textarea"
        key={key}
        name={name}
        defaultValue={value}
        onChange={(e)=>{onChange(e, target)}}
      />
    }

    // Radio
    if (component === "radio") {
      input = f.options.map((o) => {
        let checked = o.value === value;
        return (
          <FormRadioHorizontal key={o.value} className="radio-horizontal">
            <Radio {...props}
              id={"radio_"+o.value}
              className="form-input"
              type={component}
              name={o.name}
              checked={checked}
              defaultValue={o.value}
              onChange={(e)=>{onChange(e, target)}}
            />
            <label htmlFor={"radio_"+o.value}>{o.title}</label>
          </FormRadioHorizontal>
        )
      })
      input = <div className ="form-group-radio">{input}</div>
    }

    // Checkbox
    if (component === "checkbox") {
      input = f.options.map((o) => {
        let checked = false;
        if (value && value.length > 0) {
            checked = value.indexOf(o.value) > -1 ? true: false;
        }
        return (
          <React.Fragment key={"cfr" + o.key}>
            <FormCheckboxHorizontal className="checkbox-horizontal">
              <Checkbox {...props}
                className="form-input"
                type={component}
                name={o.name}
                checked={checked}
                value={o.value}
                onChange={(e)=>{onChange(e, target)}}
              />
              <span>{o.label}</span>
            </FormCheckboxHorizontal>
          </React.Fragment>
        )
      })
    }

    // Select options
    if (component === "select") {
      input = f.options.map((o) => {
        return (
          <option {...props}
            className="form-input"
            key={o.value}
            value={o.value}
          >{o.title}</option>
        )
      })
      input = <Select value={value} onChange={(e)=>{onChange(e, target)}}>{input}</Select>
    }

    
            
    return (
      <div className="Form-group">
        <label
          key={"fl" + f.name}
          htmlFor={f.name}>
          {f.caption}
        </label>
        {input}
      </div>
    )
  }

  return (
    <FormContainer name={currentstep.name} className="Form-threecolumn">
      {currentstep.fields.map(f => (
        <React.Fragment key={"rf" + f.name}>
          {renderForm(f)}
        </React.Fragment>
      ))}
    </FormContainer>
  )
}

export default FormGenerator
