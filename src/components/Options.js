import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
          <div className="widget-header">
            <h3 className="widget-header_title">Your Option</h3>
            <button 
              onClick={props.handleDeleteOptions}
              className="button button-link"
            >
              Remove All
            </button>
          </div>
          {props.options.length === 0 && <p className="widget_message">Please add an option to get started</p>}
      {
        props.options.map( (option, index) => {
          return <Option 
                    key={option}
                    optionText={option }
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                  />
        })
      }
      </div>
    )
}

export default Options;