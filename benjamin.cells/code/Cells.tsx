import * as React from "react";
import { Size, PropertyControls, ControlType, Animatable } from "framer";

interface Props extends Size {
  parentSize: any;
  radius: number;
  row: number;
  col: number;
  padding: number;
  color: string;
  content: [];
}

export class Cells extends React.Component<Props> {
  state = {
    cells: []
  };

  static defaultProps = {
    radius: 5,
    row: 2,
    col: 2,
    padding: 15,
    width: 300,
    height: 300,
    color: "rgba(136, 85, 255, 0.2)",
    index: true
  };

  static propertyControls: PropertyControls<Props> = {
    row: {
      type: ControlType.Number,
      min: 1,
      max: 25,
      title: "Rows",
      displayStepper: true
    },
    col: {
      type: ControlType.Number,
      min: 1,
      max: 25,
      title: "Columns",
      displayStepper: true
    },
    padding: { type: ControlType.Number, min: 0, max: 100, title: "Padding" },
    radius: { type: ControlType.Number, min: 0, max: 500, title: "Radius" },
    color: { type: ControlType.Color, title: "Fill" },
    content: {
      type: ControlType.Array,
      title: "Content",
      propertyControl: { type: ControlType.ComponentInstance }
    }
  };

  render() {
    const { radius, padding, row, col, color } = this.props;

    const array = [];
    const size = {
      width: this.props.width,
      height: this.props.height
    };

    // Dynamic width and height
    var width = size.width / col;
    var width = width - (padding * (col - 1)) / col;
    var height = size.height / row;
    var height = height - (padding * (row - 1)) / row;

    // Cell method
    let Cell = (props: {
      x: number;
      y: number;
      radius?: number;
      amount?: number;
    }) => {
      return (
        <div
          style={{
            position: "absolute",
            backgroundColor: color,
            borderRadius: radius,
            width: width,
            height: height,
            left: props.x,
            top: props.y
          }}
        />
      );
    };

    for (var rowAmount = 0; rowAmount < row; rowAmount++) {
      for (var colAmount = 0; colAmount < col; colAmount++) {
        var x = colAmount * (width + padding);
        var y = rowAmount * (height + padding);
        array.push(<Cell x={x} y={y} key={`${colAmount}:${rowAmount}`} />);
      }
    }

    if (React.Children.count(this.props.content) > 0) {
      const contentLength = React.Children.count(this.props.content) - 1;
      const totalCells = row * col;

      if (totalCells >= contentLength + 1) {
        // Update cells with all new content layers
        for (var amount = 0; amount < contentLength + 1; amount++) {
          var curAmount = amount;

          Cell = (props: {
            x: number;
            y: number;
            radius?: number;
            amount: number;
          }) => {
            return React.cloneElement(this.props.content[props.amount], {
              top: props.y,
              left: props.x,
              width: width,
              height: height,
              radius: radius
            });
          };

          var curX = array[amount].props.x;
          var curY = array[amount].props.y;

          array[amount] = (
            <Cell x={curX} y={curY} key={`${amount}`} amount={curAmount} />
          );
        }
      }
    }
    return <div>{array}</div>;
  }
}
