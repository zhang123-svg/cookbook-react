import styled from 'styled-components'
import border from '../../../assets/styled/border'
import ellipsis from '../../../assets/styled/ellipsis'

const Container = styled.div `
    header {
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        font-size: .16rem;
        color: #fff;
        background-color:#FF6B04;
    }
`

const SwiperWrap = styled.div `
    height: 0;
    font-size: 0;        
    padding-bottom: 66.6667% 
    }
`
//font-size设为0表示不占位

//这里有问题，把absolute变成static后，点不显示了，不改的话，又存在点在上面的bug
// const SwiperWrap = styled.div `
//     height: 0;
//     font-size: 0;
//     padding-bottom: 66.6667%
//     position: relative;

//     .slider.am-carousel {
//         position: static !important;  
//     }
// `

const H1Container = border(
    styled.h1`
        height: .5rem;
        padding-left: .1rem;
        color: #666;
        line-height: .5rem;
        font-weight: normal;
        background-color: #fff;
        border-bottom: solid 1px #ccc
`
)



const HotCateWrap = styled.div `
    
    .grid-item {
        img {
            width: .6rem;
            height: .6rem;
            margin-bottom: .04rem;
            border-radius: .06rem;
            &[src='blank'] {
                display: none;
            }
        }
    }

    .am-grid-item-content {
        padding: 0 !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    


`
//h1是加粗的，要把font-weight改成 normal

const SubTitle = ellipsis(
    styled.p `


`
)


const Top10Wrap = styled.div `
    h1 {
        height: .5rem;
        padding-left: .1rem;
        color: #666;
        line-height: .5rem;
        font-weight: normal;
    }
    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding-left: .1rem;
        li {
            width: 50%;
            padding-right: .1rem;
            img {
                width: 100%;
            }
            > div:last-child {
                display: flex;
                flex-direction: column;
                height; .6rem;
                background-color: #fff;
                margin-bottom: .1rem;
                justify-content: center;
                align-items: center;
                > p:first-child {
                    font-size: .18rem;
                }
                > p:last-child {
                    color: #666;
                }
            }
        }
    }

`





export {
    Container,
    SwiperWrap,
    HotCateWrap,
    Top10Wrap,
    H1Container,
    SubTitle
}