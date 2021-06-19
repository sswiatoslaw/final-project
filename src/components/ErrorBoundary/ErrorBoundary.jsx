import React, {PureComponent} from 'react'
import Error from '../Error/Error'

class ErrorBoundary extends PureComponent {
    state = {
        hasError: false
    }
    componentDidCatch(error, errorInfo){
        console.log('Inside componentDidCatch', error, errorInfo);
        this.setState({hasError: true});
}
    render(){
        return this.state.hasError ? <Error/> : this.props.children;
    }
}

export default ErrorBoundary;
