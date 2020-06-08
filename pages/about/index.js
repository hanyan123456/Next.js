/*
 * @Author: 寒嫣
 * @Date: 2020-06-02 16:16:32
 * @Description: file content
 */ 
import React from 'react'
import Nav from '../nav'
// 使用类组件
export default class About extends React.Component{
  state = {
    title: 'hello about',
    isShow: true
  }

  hdShow = () => {
    this.setState({
      isShow: false

    })

  }
  render(){
    const { isShow } = this.state
    return (
      <div>
        <Nav></Nav>
        <div> {this.state.title}</div>
        {isShow &&  <div >hello NEXT.js</div>}
        <div className={isShow ? "title" : 'title1'}>关于我们</div>
       
        <button onClick={this.hdShow}>点击</button>

        <style jsx>
        {` 
        .title{
          color:red
        }
        .title1{
          color:green
        }
        
        `}
        </style>
        
      </div>
    )
  }
}