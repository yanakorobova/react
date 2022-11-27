import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed,setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed}/>
            { !collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

type AccordionTitleProps = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props:  AccordionTitleProps) {
    return <h3 onClick={()=>(props.setCollapsed(!props.collapsed))}>{props.title}</h3>;
}

export default UncontrolledAccordion