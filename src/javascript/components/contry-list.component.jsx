import React, { PureComponent } from "react";

class ContryListComponent extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <h2>Contries</h2>
        <ul>
          {
            _.map(this.props.contries, contry => {
              return <li key={contry.alpha3_code}>{contry.name}</li>
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default ContryListComponent;