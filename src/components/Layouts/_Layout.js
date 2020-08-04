import React from 'react'
import Aux from '../../hoc/aux1';
import './Layout.css'

const Layout = (props) =>(
    <Aux>
      <div>Toolbar,Sidebar</div>
      <main className="Content" >{props.children}</main>
    </Aux>
);

export default Layout