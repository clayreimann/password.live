import React from "react"
import AppBar from "material-ui/AppBar"
import FontIcon from "material-ui/FontIcon"
import { Tab, Tabs } from "material-ui/Tabs"
import { appBarStyle, appBarTitleStyle, iconStyle, inkBarStyle, tabItemContainerStyle, tabItemStyle } from "./navigation.styles"

const tabItemContainerStyles = tabItemContainerStyle(2)

export class NavigationComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: window.location.pathname }
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(value) {
        this.props.history.push(value)
        this.setState({ value: value })
    }

    render() {
        const { value } = this.state

        return (
            <AppBar title="Password Generator" titleStyle={ appBarTitleStyle } style={ appBarStyle } iconElementLeft={ <FontIcon style={ iconStyle } className="fa fa-user-secret" aria-hidden="true"/> }>
                <Tabs value={ value } onChange={ this.handleNavigation } tabItemContainerStyle={ tabItemContainerStyles } inkBarStyle={ inkBarStyle }>
                    <Tab key={ "/" } label={ "Home" } value={ "/" } style={ tabItemStyle }/>
                    <Tab key={ "/learn" } label={ "Learn" } value={ "/learn" } style={ tabItemStyle }/>
                </Tabs>
            </AppBar>
        )
    }
}
