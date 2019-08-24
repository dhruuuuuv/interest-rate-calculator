import React, { Component } from "../../../node_modules/react"
import { calculate } from '../../api'
import { CurrencyInput } from "../../components/CurrencyInput"
import { SliderInput } from "../../components/SliderInput"
import DisplayGraph from "../../components/DisplayGraph"
import "./InterestAccumulatorPage.css"
import { INTEREST_FREQUENCY_OPTIONS } from '../../consts'



export default class InterestAccumulatorPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monthlyAmount: 0,
      savingsAmount: 0,
      interestRate: 4,
      interestFrequency: 'monthly',
      data: []
    }
  }

  componentDidMount = () => {
    this.updateGraphData()
  }

  // validate the inputs to ensure no NaNs
  validate = () => {
    const { monthlyAmount, savingsAmount, interestRate, interestFrequency } = this.state

    return !isNaN(parseFloat(monthlyAmount)) &&
      !isNaN(parseFloat(savingsAmount)) &&
      !isNaN(parseFloat(interestRate))
  }

  updateGraphData = () => {
    // only update if valid input
    if (!this.validate()) return

    const { monthlyAmount, savingsAmount, interestRate, interestFrequency } = this.state

    calculate({
      monthlyAmount: parseFloat(monthlyAmount),
      savingsAmount: parseFloat(savingsAmount),
      interestRate: parseFloat(interestRate),
      interestFrequency
    })
      .then(result => this.setState({
        loading: false,
        data: result.data.data
      }))
      .catch(e => console.error(e))
  }

  handleInputChange = field => async event => {
    await this.setState({
      [field]: event.target.value
    })

    this.updateGraphData()
  }


  render () {
    const { monthlyAmount, savingsAmount, interestRate, interestFrequency, data } = this.state

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput
            value={savingsAmount}
            handleChange={this.handleInputChange}
            field={'savingsAmount'}
          />

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput
            value={monthlyAmount}
            handleChange={this.handleInputChange}
            field={'monthlyAmount'}
          />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput
            value={interestRate}
            handleChange={this.handleInputChange}
            field={'interestRate'}
          />

          <p className="input-label">
            How regularly would you like the interest to be paid?
          </p>

          <select
            value={interestFrequency}
            onChange={this.handleInputChange('interestFrequency')}
          >
            {INTEREST_FREQUENCY_OPTIONS.map(opt => (
              <option
                value={opt.value}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={
              data.map((amount, index) => ({
                month: index + 1,
                amount
              }))
            }
          />
        </div>
      </div>
    )
  }
}
