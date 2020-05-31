import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasErorr: false };
  }

  componentDidCatch(error, info) {
    if (error) {
      this.setState({ hasErorr: true });
    }
  }

  render() {
    if (this.state.hasErorr) {
      return (
        <>
          <h1>Contact Wildcards support team @ ... to resolve the issue</h1>
        </>
      );
    }
    return this.props.children;
  }
}
