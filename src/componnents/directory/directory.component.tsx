import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { ISections} from '@interfaces'

import './directory.styles.scss'
import {SectionsMockData} from "../../mock-data/sections.mock";



class Directory extends React.Component<{}, ISections>{
    constructor(props:any) {
        super(props);
        this.state = {...SectionsMockData}
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
