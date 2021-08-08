import React from 'react';
import './tagItem.scss';

export default function tagItem(props) {
    return (
        <div className="tag-item">
            <img className="tag-item__icon" src={props.icon} alt="" />
            <span className="tag-item__title">{props.title}</span>
        </div>
    )
}
