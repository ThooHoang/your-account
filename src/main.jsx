import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // Import HashRouter if using routes
import './styles.css'
import App from './App.jsx'

// Add error boundary for better debugging on GitHub Pages
class ErrorBoundary extends StrictMode {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <ErrorBoundary>
      {/* Use HashRouter for GitHub Pages compatibility if you have routes */}
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  );
} else {
  document.body.innerHTML = '<div style="color:red;padding:20px;">Error: Root element not found</div>';
}
