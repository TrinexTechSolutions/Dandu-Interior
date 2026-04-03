import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center bg-[#F8F5F2] font-sans">
          <h2 className="text-4xl font-serif italic text-[#37302F] mb-4">Something happened gracefully.</h2>
          <p className="text-sm tracking-widest uppercase text-black/40 mb-8 max-w-md">
            Our high-end experience encountered a minor script interruption. 
            This is often caused by aggressive browser blockers.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-[#1A1A1A] text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-black transition-all"
          >
            Refresh Experience
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
