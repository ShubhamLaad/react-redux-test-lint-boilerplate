import React, { Component } from "react";
import { connect } from 'react-redux';
import ContryListComponent from "../components/contry-list.component";
import ContryActions from "../actions/contry.action";

class DashboardContainer extends Component {

  componentDidMount() {
    this.props.getContries();
  }

  render() {
    return(
      <main>
        <ContryListComponent contries={this.props.contries}/>
      </main>
    )
  }
}


const mapStateToProps = state => ({
  contries: state.contryReducer.contries,
});

const mapDispatchToProps = dispatch => ({
  getContries: () => { dispatch(ContryActions.getContries()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

