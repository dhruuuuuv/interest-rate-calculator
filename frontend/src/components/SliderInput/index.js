import React from 'react'
import PropTypes from 'prop-types'
import './SliderInput.css'

export const SliderInput = ({
	field,
	value,
	min,
	max,
	step,
	handleChange
}) => (
		<div className="fmz-slider">
			<p>{value}%</p>
			<input type="range"
				value={value}
				min={min}
				max={max}
				step={step}
				onChange={handleChange(field)} />
		</div>
	)

SliderInput.propTypes = {
	// value: PropTypes.number,
	handleChange: PropTypes.func,
	field: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number
}


SliderInput.defaultProps = {
	// value: PropTypes.number,
	min: 0,
	max: 10,
	step: 0.25
}
