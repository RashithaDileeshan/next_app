import React from "react"
import Header from "../Header/Header"

type mainProps = {
    children: any
}
const Layout = ({ children }: mainProps) => {
    return (
        <div style={{margin: '30px 30px 0px'}}>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Layout
