import React, { Component } from 'react';

class Home extends Component {
    state = {
        loading: false,
    }
    componentDidMount() {
        this.setState({loading: true})
    }

    render(){
        const { loading } = this.state;
        if (loading) return <h1>Tanner Loading...</h1>
        return (
            <>
                <h1>Tanner</h1>
            </>
        )
    }
}
export default Home;
