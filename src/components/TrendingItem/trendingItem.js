import React from 'react';
import './trendingItem.scss';
import { BsThreeDotsVertical, BsDot } from 'react-icons/bs';

export default function trending(props) {
    return (
        <div className="trending-item">
            <iframe className="trending-item__video" src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="infor">
                <div className="name">
                    <span className="name__title">{props.name}</span>
                    <BsThreeDotsVertical className="btn btn-dots" />
                </div>
                <div className="data">
                    <span className="data__channel">{props.channel}</span>
                    <div className="detail">
                        <span className="detail__view">{props.view} lượt xem</span>
                        <BsDot className="btn-dot" />
                        <span className="detail__old">{props.day} trước</span>
                    </div>
                </div>
                <p className="infor__disc">{props.disc}</p>
            </div>
        </div>
    )
}
