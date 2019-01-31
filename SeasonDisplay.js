import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        textMessage : 'It\'s Summer, Lets hit the beach',
        iconName : 'sun'
    },
    winter : {
        textMessage : 'burr! , Its so cold here!',
        iconName : 'snowflake'
    }
}

const getSeason = (lat, month)=>{
    if(month>2 && month<9){
        return lat>0 ? 'summer' : 'winter';
    }else{
        return lat>0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
    let season = getSeason(props.lattitude, new Date().getMonth());
    var iconName = seasonConfig[season].iconName;
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{seasonConfig[season].textMessage}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;