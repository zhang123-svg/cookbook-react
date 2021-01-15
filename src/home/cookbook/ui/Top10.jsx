import React from 'react'
import PropTypes from 'prop-types'
import { Top10Wrap,SubTitle } from './StyledCookBook'
const Top10 = (props) => {
        return (
            <Top10Wrap>
                <h1>精品好菜</h1>
                <ul>
                    {
                        props.list.length > 0 && props.list.map(value => {
                            return (
                                <li 
                                    key={value.id}
                                    onClick={props.onGotoDetail(value.name)}
                                >
                                    <div>
                                        <img src={value.img} alt=""/>
                                    </div>
                                    <div>
                                        <p>{value.name}</p>
                                        <SubTitle
                                            lc={1}
                                        ><span>{value.all_click}</span>浏览<span>{value.favorites}</span>收藏</SubTitle>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Top10Wrap>
        )
}

Top10.propTypes = {
    list: PropTypes.array
}


export default Top10




