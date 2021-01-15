import styled from 'styled-components'
import border from '../../../assets/styled/border'

const NavUl = border(
    styled.ul`

`
)

const CategoryWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: .44rem;
        background-color: #ee742f;
        ul {
            position: relative;
            display: flex;    
            width: 1.4rem;
            height: .3rem;
            li {
                flex: 1;
                line-height: .3rem;
                text-align: center;
                color: #fff;
                transition: all 200ms ease-in;
                &.active {
                    color: #ee742f;
                    z-index: 3;
                }
                &.slide {
                    position: absolute;
                    left:0;
                    width: .7rem;
                    height: .3rem;
                    background-color: #fff;
                    z-index: 2;
                    border-radius: .15rem;
                }
                &.slide.right {
                    left: .7rem;
                }
            }
        }
    }
`
// ul加flex后默认是横着排了
//一定要加分号！;;;

const MenuWrap = styled.div `
    border-top: solid 1px #ccc;
    overflow: hidden;
    flex: 1;
    display: flex;
    aside {
        overflow-y: scroll;
        width: .9rem;
        ul {
            li {
                height: .5rem;
                text-align: center;
                line-height: .5rem;
                &.active {
                    background-color: #fff;
                    color: #ee742f;
                    span {
                        display: inline-block;
                        width: auto;
                        height: 100%;
                        border-bottom: solid 1px #ee742f
                    }
                }
            }
        }
    }
    section {
        overflow-y: scroll;
        flex: 1;
        padding: .25rem;
        background-color: #fff;
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 33.333333%;
                height: .45rem;
                text-align: center;
            }
        }
    }

`

export {
    CategoryWrap,
    MenuWrap,
    NavUl
}