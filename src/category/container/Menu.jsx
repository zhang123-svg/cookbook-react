import React, { Component } from 'react'
import MenuList from '../../../components/menu/MenuList.jsx'
import { get } from '../../../utils/http'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator as ac} from '../../../home/category/index'

@withRouter
@connect(
    (state) => ({
        cateAside: state.category.routeInfo.cateAside,
        cateType: state.category.routeInfo.cateType
    }),
    (dispatch) => ({
        changeCateAside(cateAside) {
            dispatch(ac.changeCateAside(cateAside))
        }
    })
)
class Menu extends Component {
    static propTypes = {
        type: PropTypes.string
    }

    state = {
        //cate是当前数据
        cate: null
    }

    //用redux管理状态，不需要用getDerivedStateFromProps
    // static getDerivedStateFromProps(nextProps, preState) {
    //     if(nextProps.type === preState.type){
    //         return null
    //     }else{
    //         return {
    //             curCate: nextProps.type === 'category' ? '热门' : '肉类',
    //             type: nextProps.type
    //         }
    //     } 
    // }


    async componentDidMount(){
        let result = await get({
            url: '/api/category'
        })

        this.setState({
            cate: result.data.data
        })
        if(this.props.cateAside === '') {
            this.props.changeCateAside(this.props.cateType === 'category' ? '热门' : '肉类')
        }
        
    }

    handleAsideClick = (curCate) => {
        return () => {
            this.props.changeCateAside(curCate)
        }
    }

    handleGotoList = (title) => {
        return () => {
            this.props.history.push('/list',{ title })
        }
    }

    render() {
        return (
            <MenuList
                onAsideClick={this.handleAsideClick}
                curCate={this.props.cateAside}
                cate={this.state.cate && this.state.cate[this.props.cateType]}
                onGotoList={this.handleGotoList}
            ></MenuList>
        )
    }
}
export default Menu
