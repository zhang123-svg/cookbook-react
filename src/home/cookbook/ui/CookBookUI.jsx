import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './StyledCookBook'
import Swiper from './Swiper.jsx'
import Search from '../../../components/search/Search.jsx'
import Hotcate from './Hotcate.jsx'
import Top10 from './Top10.jsx'

import memoize from 'memoize-one'



const CookBookUI = (props) =>{
    const swiper = memoize(list => list.slice(0,5))
    const hotCate = memoize(list => list.slice(0,10))

    // const filterSwiper = swiper(props.list)
    // console.log(filterSwiper)
    return (
        <Container>
            <header>美食大全</header>
            <Swiper list={swiper(props.list)} onGotoDetail={props.onGotoDetail}></Swiper>
            <Search
                outerbg="#f5f5f9"
                innerbg="#fff"
                hasborder={true}
                radius={0.06}
                color="#ee742f"
            ></Search>
            <Hotcate></Hotcate>
            <Top10 list={hotCate(props.list)} onGotoDetail={props.onGotoDetail}></Top10>
        </Container>
    )
}
//如果式类组建
//static propTypes = {}
//函数式组建绑定类型检查
CookBookUI.propTypes = {
    list: PropTypes.array
}

export default CookBookUI
