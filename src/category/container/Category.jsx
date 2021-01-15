import React, { Component } from 'react'
import CategoryUI from '../ui/CategoryUI.jsx'
import { connect } from 'react-redux'
import { actionCreator as ac} from '../../../home/category/index'

@connect(
    (state) => ({
        cateType: state.category.routeInfo.cateType
    }),
    (dispatch) => ({
        changeCateType(type) {
            dispatch(ac.changeCateType(type))
        },
        changeCateAside(cateAside) {
            dispatch(ac.changeCateAside(cateAside))
        }
    })
)
class Category extends Component {

    //传参的时候需要返回函数，不传参的时候不需要返回参数
    handleClick = (type) => {
        return () => {
            this.props.changeCateType(type)
            this.props.changeCateAside(type === 'category' ? '热门' : '肉类')
        }
    }


    render() {
        //console.log(type)
        return(
        <CategoryUI
            type={this.props.cateType}
            onCategoryUiClick={this.handleClick}
        ></CategoryUI>
        )
    }
}
export default Category
