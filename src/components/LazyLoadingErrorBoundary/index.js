import React from 'react';

export default class LazyLoadingErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <button onClick={() => window.location.reload()}>Click to Reload</button>
          <p>Lazy-loading failed!</p>
        </div>
      );
    }

    return this.props.children; 
  }
}