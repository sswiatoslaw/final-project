import React, { PureComponent } from 'react';
import Error from '../Error/Error';

class ErrorBoundary extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch (error, errorInfo) {
    console.log('Inside componentDidCatch', error, errorInfo);
    this.setState({ hasError: true });
  }

  render () {
    const { hasError } = this.state;
    return hasError ? <Error/> : this.props.children;
  }
}

export default ErrorBoundary;
