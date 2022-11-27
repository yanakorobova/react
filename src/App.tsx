import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion'
import {Rating, RatingType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    const [ratingValue,setRatingValue] = useState <RatingType>(0)
    const [accordionCollapsed,accordionSetCollapsed] = useState <boolean>(true)
    const [on,setOn] = useState <boolean>(false)
    return (
        <div>
            <PageTitle title = {'This\'s APP component'}/>
            <Rating value = {ratingValue} onClick = {setRatingValue}/>
            <Accordion title= 'Accordion 1' onClick={()=>{accordionSetCollapsed(!accordionCollapsed)}} collapsed = {accordionCollapsed}/>
            <OnOff onClick = {setOn} on = {on}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title = {'Accordion 2'} />
            <UncontrolledRating/>
        </div>
    );
}

function PageTitle(props: any) {
    return <div>{props.title}</div>
}

export default App;
