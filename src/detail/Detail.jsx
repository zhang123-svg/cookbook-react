import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { DetailWrap } from './styledDetail'
import animate from '../HOC/animate'

@withRouter
@animate
class Detail extends Component {

    handleClickLeft = () => {
        let { history } = this.props
        let { from,listTitle } = this.props.location.state
        history.push(from,{from:'/detail', title: listTitle})
    }


    render() {

        let state = this.props.location.state

        return (
            <DetailWrap>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleClickLeft}
                    style={{'backgroundColor': '#ee742f'}}
                >
                    {state && state.title}
                </NavBar>
                <div>
                    <div>
                    <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201509/0722/55ed97982b6fc.JPG/OTAweDYwMA" alt=""/>
                    </div>
                </div>
                <div className="details">
                    <h1>{state && state.title}</h1>
                    <h3>1111浏览 1234收藏</h3>
                    <button>收藏</button>
                </div>
            </DetailWrap>
        )
    }
}
export default Detail