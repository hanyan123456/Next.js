/*
 * @Author: 寒嫣
 * @Date: 2020-06-02 16:19:45
 * @Description: file content
 */ 
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default class Nav extends React.Component{
  render(){
    return(
      <div>
         <Link href='/'><a>首页</a></Link>
         <Link href='/about'><a>关于</a></Link>
      </div>
    )
  }
}