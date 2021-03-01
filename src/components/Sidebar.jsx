import React from "react";
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Selection from "./Selection.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake,faMap } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import {setPoints, setWholeGroup } from "../actions";
import Form from 'react-bootstrap/Form'

const recycling = ["Rivers", "Buildings", "Political Boundaries"]

const shops = ["Flood Hazard", "Meteorological Stations", "Land Cover 2010-2012"]

const Sidebar = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    return (
        <SideNav className="sidenav"
        style={{marginTop:'64px'}}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav>
        <NavItem eventKey="recycling" key="recylcing">
            <NavIcon>
                <FontAwesomeIcon icon={faMap} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                IGAC Base Cartography
            </NavText>
            {recycling.map(p => Selection(p, "recycling"))}
        </NavItem>
        <NavItem eventKey="shop" key="shop">
            <NavIcon>
                <FontAwesomeIcon icon={faSnowflake} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                IDEAM Meteorological Data
            </NavText>
            {shops.map(p => Selection(p, "shop"))}
        </NavItem>
    </SideNav.Nav>
</SideNav>
    )
};

export default Sidebar;