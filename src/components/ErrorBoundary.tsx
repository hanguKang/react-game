import React from 'react'
interface ErrorBoundaryProps {
    children: React.ReactNode; // 자식 요소의 타입
}

interface ErrorBoundaryState {
    hasError: boolean; // 에러 상태
}
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(_error:Error) {
      console.error('Error caught by getDerivedStateFromError:', _error);
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error('Error:', error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <div>Something went wrong.</div>;
      }
      return this.props.children;
    }
  }
  