import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { TSections} from '@types'

import './directory.styles.scss'
import {SECTION_DATA} from "../../mock-data/sections.mock";



class Directory extends React.Component<{}, TSections>{
    constructor(props:any) {
        super(props);
        this.state = {...SECTION_DATA}
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({...props})=>(
                        <MenuItem key={props.id}  {...props}/>
                    ))
                }
            </div>
        );
    }

}

export default Directory;
