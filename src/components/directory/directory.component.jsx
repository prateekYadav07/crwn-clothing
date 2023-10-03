import React from "react";
import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";
import {  useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = () => {
    const sections = useSelector(selectDirectorySections)
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...sectionProps }) => {
                    return <MenuItem key={id} {...sectionProps} />
                })
            }
        </div>
    )
}

export default Directory
