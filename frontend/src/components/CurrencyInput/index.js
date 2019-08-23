import React from 'react'
import PropTypes from 'prop-types'
import './CurrencyInput.css'

export const CurrencyInput = ({
  field,
  value,
  handleChange
}) => (
    <div className={`currency-input default-value`}>
      <span>£</span>
      <input type="text"
        value={value}
        onChange={handleChange(field)}
      />
    </div>
  )


CurrencyInput.propTypes = {
  // value: PropTypes.string,
  handleChange: PropTypes.func,
  field: PropTypes.string
}
