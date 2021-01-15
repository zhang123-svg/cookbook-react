import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'

import cookbook from '../assets/images/cookbook.png'
import cookbookActive from '../assets/images/cookbook-active.png'

import menu from '../assets/images/menu.png'
import menuActive from '../assets/images/menu-active.png'

import location from '../assets/images/location.png'
import locationActive from '../assets/images/location-active.png'

import more from '../assets/images/more.png'
import moreActive from '../assets/images/more-active.png'

import { CookBook } from '../home/cookbook/index'
import { Category } from '../home/category/index'
import { Map } from '../home/map/Map'
import { More } from '../home/more/index'
import { actionCreator as ac} from '../home/category/index'

import animate from '../HOC/animate'


// @connect(
//   (state) => ({
//       checked: state.home.checked,
//       selectedTab: state.category.routeInfo.selectedTab
//     }),
//     (dispatch) => ({
//       changeSelectedTab(selectedTab) {
//         dispatch(ac.changeSelectedTab(selectedTab))
//       }
//     })
// )
// @animate

// class Home extends Component {
//     state = {
//         selectedTab: this.props.selectedTab,
//         hidden: false,
//         fullScreen: true,
//     }

//     componentDidMount() {
//       //console.log(this.props.checked)
//       //console.log('000')
//     }

//     render() {

//         const tabItems = [

//           <TabBar.Item
//             title="美食大全"
//             key="cookbook"
//             icon={<div style={{
//               width: '26px',
//               height: '26px',
//               background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
//             />
//             }
//             selectedIcon={<div style={{
//               width: '22px',
//               height: '22px',
//               background: `url(${cookbookActive}) center center /  21px 21px no-repeat` }}
//             />
//             }
//             selected={this.state.selectedTab === 'cookbook'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'cookbook',
//               });
//             }}
//             data-seed="logId"
//           >
//             <CookBook />
//           </TabBar.Item>,
//           <TabBar.Item
//             icon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: `url(${menu}) center center /  21px 21px no-repeat` }}
//               />
//             }
//             selectedIcon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
//               />
//             }
//             title="分类"
//             key="category"
//             selected={this.state.selectedTab === 'category'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'category',
//               })
//               this.props.changeSelectedTab('category')
//             }}
//           >
//             <Category />
//           </TabBar.Item>,
//           <TabBar.Item
//             icon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: `url(${location}) center center /  21px 21px no-repeat` }}
//               />
//             }
//             selectedIcon={
//               <div style={{
//                 width: '22px',
//                 height: '22px',
//                 background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
//               />
//             }
//             title="美食地图"
//             key="map"
//             selected={this.state.selectedTab === 'map'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'map',
//               })
//             }}
//           >
//             <Map />
//           </TabBar.Item>,
//           <TabBar.Item
//             icon={{ uri: more }}
//             selectedIcon={{ uri: moreActive }}
//             title="更多"
//             key="more"
//             selected={this.state.selectedTab === 'more'}
//             onPress={() => {
//               this.setState({
//                 selectedTab: 'more',
//               });
//             }}
//           >
//             <More />
//           </TabBar.Item>
        
//         ]

//         return (
//             <div style={this.state.fullScreen ? { position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 } : { height: 400 }}>
//         <TabBar
//           unselectedTintColor="#949494"
//           tintColor="#000"
//           barTintColor="white"
//           hidden={this.state.hidden}
//         >
//           {
//             this.props.checked
//             ? tabItems.map(v => v)
//             : tabItems.filter((v,i) => i !== 2)
//           }
//         </TabBar>
//       </div>
//         )
//     }
// }

// export default Home

const Home = (props) => {
  let [tabs, setTabs] = useState({
        selectedTab: props.selectedTab,
        hidden: false,
        fullScreen: true,
  })

  const tabItems = [

    <TabBar.Item
      title="美食大全"
      key="cookbook"
      icon={<div style={{
        width: '26px',
        height: '26px',
        background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbookActive}) center center /  21px 21px no-repeat` }}
      />
      }
      selected={this.state.selectedTab === 'cookbook'}
      onPress={() => {
        // this.setState({
        //   selectedTab: 'cookbook',
        // });
        setTabs({
          selectedTab: 'cookbook',
        })
      }}
      data-seed="logId"
    >
      <CookBook />
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      selected={tabs.selectedTab === 'category'}
      onPress={() => {
        // this.setState({
        //   selectedTab: 'category',
        // })
        setTabs({
          selectedTab: 'category',
        })
        //this.props.changeSelectedTab('category')
      }}
    >
      <Category />
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${location}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="美食地图"
      key="map"
      selected={tabs.selectedTab === 'map'}
      onPress={() => {
        // this.setState({
        //   selectedTab: 'map',
        // })
        setTabs({
          selectedTab: 'map',
        })
      }}
    >
      <Map />
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="more"
      selected={tabs.selectedTab === 'more'}
      onPress={() => {
        // this.setState({
        //   selectedTab: 'more',
        // });
        setTabs({
          selectedTab: 'more',
        })
      }}
    >
      <More />
    </TabBar.Item>
  
  ]

  return (
    <div style={tabs.fullScreen ? { position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 } : { height: 400 }}>
<TabBar
  unselectedTintColor="#949494"
  tintColor="#000"
  barTintColor="white"
  hidden={tabs.hidden}
>
  {/* {
    this.props.checked
    ? tabItems.map(v => v)
    : tabItems.filter((v,i) => i !== 2)
  } */}
</TabBar>
</div>
)


}

export default Home

