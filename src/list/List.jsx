
import React, { Component } from 'react'
import { NavBar,Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import { ListWrap,SubTitle,ListContainer } from './StyledList'
import { connect } from 'react-redux'
import { actionCreator } from '../home/cookbook/index'
import animate from '../HOC/animate'

@withRouter
@connect(
    (state) => ({
        list: state.cookbook.list
    }),
    (dispathch) => ({
        loadData() {
            dispathch(actionCreator.loadDataAsync())
        }
    })
)
@animate
class List extends Component {

    handleClickLeft = () => {
        let { history } = this.props
        //let from = this.props.location.state.from
        history.push('/home', {from: '/list'})
    }

    componentDidMount(){
        //解决刷新页面redux丢失问题
        if(this.props.list.length === 0) {
            this.props.loadData()
        }
    }

    handleGotoDetail = (title) => {
        return () => {
            this.props.history.push('/detail', { listTitle: this.props.location.state.title, title, from: '/list' })
        }
    }

    render() {

        let state = this.props.location.state
        console.log(this.props)
        return (
            <ListContainer>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleClickLeft}
                    style={{'backgroundColor': '#ee742f'}}
                >
                    {state && state.title }
                </NavBar>
                <div>
                    {
                        this.props.list.map((li,i) => (
                            <ListWrap
                        onClick={this.handleGotoDetail(li.name)}
                        width="0 0 1px 0"
                        key={li.id + i}
                    >
                        <div>
                            <img src={li.img} width="115" height="75" alt=""/>
                        </div>
                        <div>
                            <h1>{li.name}</h1>
                            <SubTitle>{li.burdens}</SubTitle>
                            <h3>{li.all_click}浏览 {li.favorites}收藏</h3>
                        </div>
                    </ListWrap>
                        ))
                    }
                </div>
            </ListContainer>
        )
    }
}

export default List
