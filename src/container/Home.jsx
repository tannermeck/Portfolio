import React, { Component } from 'react';
import style from '../style/container.css';

class Home extends Component {
    state = {
        loading: false,
    }
    componentDidMount() {
        this.setState({loading: true})
    }

    render(){
        const { loading } = this.state;
        if (loading) return <h1 data-text="Tanner Meck..." className={style.loader}>Tanner Meck...</h1>
        return (
            <>
                <h1>Tanner</h1>
            </>
        )
    }
}
export default Home;
