import React from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabComponent extends React.Component {
    handleOnSelect = (index) => this.props.onSelect(index);

    TabHeaders = () => {
        return this.props.panels.map(({name}, index) => (
            <Tab
                // tabsRole="TabList"
                className="Tabs--Header--Item"
                key={`Tab--Header--List-${index}`}>
                <span>{name}</span>
            </Tab>
        ))
    }

    Panels = () => {
        return this.props.panels.map(({Component}, index) => (
            <TabPanel
                // tabsRole="TabPanel"
                key={`Tab--Panel--${index}`}
                className={`Tab--Panel`}>
                <Component />
            </TabPanel>
        ))
    }

    render() {
        return (
            <Tabs className="Tabs">
                <TabList
                    className="Tabs--Header"
                    style={{
                        gridTemplateColumns: `repeat(${this.props.panels.length}, 1fr)`
                    }}>
                    {this.TabHeaders()}
                </TabList>
                {this.Panels()}
            </Tabs>
        );
    }
}

export default TabComponent;