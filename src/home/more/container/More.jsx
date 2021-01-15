import React, { Component } from 'react'
import { Switch,NavBar } from 'antd-mobile'
import { MoreWrap,TitleBar } from './StyledMore'

import { actionCreator }from '../../../home/index.js'
import { connect } from 'react-redux'

@connect(
    (state) => ({
        checked: state.home.checked
    }),
    (dispatch) => ({
        handleChange(checked) {
            dispatch(actionCreator.changeSwitch(checked))
            //本地存储，将checked存起来
            localStorage.setItem('checked',checked)
        }
    })
)
class More extends Component {
    
    render() {
        return (
            <TitleBar>
                <NavBar
                    mode="dark"
                >更多</NavBar>
            <MoreWrap>
                <span>显示地图：</span>
                <Switch
                    checked={this.props.checked}
                    onChange={this.props.handleChange}
                ></Switch>
            </MoreWrap>
            </TitleBar>
        )
    }
}
export default More
