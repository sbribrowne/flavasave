import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// wrapper high order function takes a component and its props
export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    // protect without authentication
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.context.router.history.push("/");
      }
    }
    // protect after logout
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.history.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
  };

  Authenticate.contextTypes = {
    router: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
