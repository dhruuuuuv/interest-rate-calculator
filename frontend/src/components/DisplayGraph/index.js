import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VictoryLine, VictoryChart, VictoryTooltip } from 'victory'

export default class DisplayGraph extends Component {

  render () {
    const { data } = this.props;

    const baseProps = {
      width: 450,
      height: 300,
      padding: 100,
      colorScale: ["#48C8FF", "#00b2ff", "#038AD0", "#006C9B"]
    };

    const baseLabelStyles = {
      fontFamily: "'Avenir Next', 'Avenir', 'Lato', 'Helvetica', 'Arial', 'Sans-Serif'",
      fontSize: 12,
      letterSpacing: 'normal',
      padding: 10,
      fill: "#00b2ff",
      stroke: "transparent"
    };

    const theme = {
      area: {
        style: {
          labels: baseLabelStyles
        }
      },
      axis: Object.assign({
        style: {
          axisLabel: baseLabelStyles,
          grid: {
            fill: "transparent",
            stroke: "lightgray"
          },
          ticks: {
            fill: "lightgray",
            // size: 0,
            stroke: "transparent"
          }
        }
      }, baseProps),
      line: Object.assign({
        style: {
          data: {
            fill: "transparent",
            stroke: "#00b2ff",
            strokeWidth: 2
          },
          labels: baseLabelStyles
        }
      }, baseProps)
    };

    return (
      <div>
        <VictoryChart animate={{ duration: 100 }} theme={theme}>
          <VictoryLine {...{ data }} y="amount" x="month" />
        </VictoryChart>
      </div>
    );
  }
}

DisplayGraph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

DisplayGraph.defaultProps = {
  data: []
};
