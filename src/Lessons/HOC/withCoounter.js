import React from "react";

const withCoounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
            count: 0
          }
      }

      increment = () => {
        this.setState({
            count: this.state + 1
        })
      }
    render() {
      return (
      <div>
          <OriginalComponent count={this.state.count} increment={this.increment} />
      </div>
      );
    }
  }
  return NewComponent
};

export default withCoounter