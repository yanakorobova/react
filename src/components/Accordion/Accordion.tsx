import React from "react";

type AccordionPropsType = {
    title: string,
    onClick: ()=>void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
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
    onClick: ()=>void
}


function AccordionTitle(props: AccordionTitleProps) {
    return <h3 onClick={props.onClick}>{props.title}</h3>;
}

export default Accordion