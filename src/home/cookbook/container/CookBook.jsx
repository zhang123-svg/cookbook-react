import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../actionCreator'
import CookBookUI from '../ui/CookBookUI.jsx'
import { withRouter } from 'react-router-dom'

//装饰器？
@connect(
    (state) => {
        return {
            list: state.cookbook.list
        }
    },
    (dispatch) => ({
        loadData(){
            dispatch(actionCreator.loadDataAsync())
        }
    })
)
//容器组建写成类组建class？
@withRouter
class CookBook extends Component {

    handleGotoDetail = (title) => {
        return () => {
            let { history } = this.props
            history.push('/detail', { title, from: '/home' })
        }
    }

    render() {
        return (
            <CookBookUI
            list={this.props.list}
            onGotoDetail={this.handleGotoDetail}
            >  
            </CookBookUI>
        )
    }

    componentDidMount(){
        this.props.loadData()
    }

    componentDidUpdate() {
        //console.log(this.props.list)
        
    }
}
export default CookBook

