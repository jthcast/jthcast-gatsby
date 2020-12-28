import React, { ErrorInfo, ReactNode } from 'react';
// import ErrorPage from '../../temp/ErrorPage';

// https://ko.reactjs.org/docs/error-boundaries.html
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/

interface Props {
  children: ReactNode;
}

interface ErrorBoundaryInterface {
  hasError: boolean;
  error?: Error | null;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, ErrorBoundaryInterface> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryInterface {
    return { hasError: true, error };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  //   logErrorToMyService(error, errorInfo);
  //   console.error('Uncaught error:', error, errorInfo);
  // }

  render(): React.ReactElement | ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorPage />;
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
