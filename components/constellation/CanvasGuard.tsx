"use client";

import { Component, useState, type ReactNode } from "react";

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

export function CanvasGuard({ fallback, children }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;
  return (
    <ErrorBoundary onError={() => setFailed(true)} fallback={fallback}>
      {children}
    </ErrorBoundary>
  );
}

class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode; onError: () => void },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return this.props.children;
  }
}
