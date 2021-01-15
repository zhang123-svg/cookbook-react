import React, { Component } from 'react'
import { Container,InnerContainer } from './StyledSearch'
export default class Search extends Component {
    render() {
        return (
            <Container {...this.props}>
                <InnerContainer {...this.props}>
                <svg t="1608817319223" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1228" width="200" height="200"><path d="M303.2 303.2c28.2-28.2 61-50 97.5-64.8 35.3-14.3 72.7-21.6 111-21.6 38.4 0 75.7 7.3 111 21.6 36.5 14.8 69.4 36.6 97.5 64.8 51.8 51.8 82.4 120.7 86 193.8 3.6 72.7-19.4 143.6-64.9 199.9-7.2 9-12.3 19.1-15.1 29.6-10.5 2.8-20.6 7.8-29.6 15.1-55.9 45.4-126.9 68.5-199.6 64.9-73.1-3.6-142-34.2-193.8-86-28.2-28.2-50-61-64.8-97.5-14.3-35.3-21.6-72.7-21.6-111s7.3-75.7 21.6-111c14.8-36.8 36.6-69.6 64.8-97.8m-56.5-56.5c-146.4 146.4-146.4 383.9 0 530.3C383.6 913.9 600 922.8 747.3 803.8l61.6 61.6c15.6 15.6 40.9 15.6 56.6 0s15.6-40.9 0-56.6l-61.6-61.6c119-147.3 110.1-363.7-26.8-500.6-146.6-146.4-384-146.4-530.4 0.1z" fill="#4a5fe2" p-id="1229"></path><path d="M303.6 303.6c28.2-28.2 61-50 97.5-64.8 35.3-14.3 72.7-21.6 111-21.6 38.4 0 75.7 7.3 111 21.6 36.5 14.8 69.4 36.6 97.5 64.8 28.2 28.2 50 61 64.8 97.5 14.3 35.3 21.6 72.7 21.6 111 0 38.4-7.3 75.7-21.6 111-14.8 36.5-36.6 69.4-64.8 97.5s-61 50-97.5 64.8c-35.3 14.3-72.7 21.6-111 21.6s-75.7-7.3-111-21.6c-36.5-14.8-69.4-36.6-97.5-64.8-28.2-28.2-50-61-64.8-97.5-14.3-35.3-21.6-72.7-21.6-111 0-38.4 7.3-75.7 21.6-111 14.8-36.5 36.6-69.3 64.8-97.5M247 247c-146.4 146.4-146.4 383.9 0 530.3s383.9 146.4 530.3 0 146.4-383.9 0-530.3-383.8-146.4-530.3 0z" fill="#4a5fe2" p-id="1230"></path></svg>
                <span>想吃什么搜这里，如川菜</span>    
                </InnerContainer>
            </Container>
        )
    }
}
//{...this.props} 传递所有熟悉attributes