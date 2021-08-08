import React from 'react';
import './olympicItem.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDotsVertical, BsDot } from 'react-icons/bs';

function OlympicItem(props) {
    return (
        <div className="card">
            <iframe className="card__video" src={props.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div className="card-name">
                <span className="card-name__title">{props.name}</span>
                <BsThreeDotsVertical className="btn btn-dots" />
            </div>
            <div className="card-infor">
                <div className="channel">
                    <span className="channel__name">HTV Sports</span>
                    <span className="channel__check-icon"> <FaCheckCircle /></span>
                </div>
                <div className="detail">
                    <span className="detail__view">{props.view} lượt xem</span>
                    <BsDot className="btn-dot" />
                    <span className="detail__day">{props.day} trước</span>
                </div>
            </div>
        </div>
    )
}
export default OlympicItem;