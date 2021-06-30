import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import "../assets/css/ErrorBoundary.styles.scss"
import { Button, CardActions } from '@material-ui/core';
export default class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };
  

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log({ error, errorInfo });
    this.setState({ errorInfo });
  }

  render() {
    const { hasError, errorInfo } = this.state;
    if (hasError) {
      return (
        <Card>
          <CardHeader
            title={
              <p>
                A ocurrido un error en el Componente.{' '}
                <span
                  style={{ cursor: 'pointer', color: '#0077FF' }}
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Recargar Pagina
                </span>{' '}
              </p>
            }
          />
          <CardContent>
            <details className="error-details">
              <summary>Detalles del Error</summary>
              {errorInfo && errorInfo.componentStack.toString()}
            </details>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                window.location.reload();
              }}
            >
              Recargar pagina
        </Button>
          </CardActions>

        </Card>
      );
    }
    return this.props.children;
  }
}
//el objeto que puede ser de diferentes tipos, objeto o array, ademas es requerido
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};