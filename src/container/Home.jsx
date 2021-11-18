import React, { Component } from 'react';
import style from '../style/container.css';

class Home extends Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        setTimeout(() => {
        this.setState({loading: false})
         }, 4000);
        //  this.setState({loading: false})
    }

    render(){
        const { loading } = this.state;
        if (loading) return <h1 data-text="Tanner Meck..." className={style.loader}>Tanner Meck...</h1>
        return (
            <>
            {!this.state.loading &&
                <h1 className={style.heading}>Welcome to my Portfolio</h1>
            }
            </>
        )
    }
}
export default Home;

// {`{ Tanner Meck }`}