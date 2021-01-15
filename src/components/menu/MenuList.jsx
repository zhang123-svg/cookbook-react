import React from 'react'
import PropTypes from 'prop-types'
import { MenuWrap } from './StyledMenuList'

const MenuList = (props) => {
    const {cate,curCate} = props

        return (
            <MenuWrap
                width="1px 0 0 0"
            >
                <aside>
                    <ul>
                        {
                          cate && Object.keys(cate)
                          .map(value => {
                              return (
                                  <li 
                                  key={value}
                                  className={curCate === value ? 'active' : ''}
                                  onClick={props.onAsideClick(value)}
                                  ><span>{value}</span></li>
                              )
                          })
                        }
                    </ul>
                </aside>
                <section>
                    <ul>
                        {
                            cate && curCate && cate[curCate].map(value => (
                            <li
                                key={value}
                                onClick={props.onGotoList(value)}
                            >{value}</li>
                            ))
                        }
                    </ul>
                </section>
            </MenuWrap>
        )
    }

MenuList.propTypes = {
    cate: PropTypes.object,
    curCate: PropTypes.string
}


export default MenuList