import React from "react";
import { getImageUrl } from "./Images";
import "./Notifications.css";

function Notifications({ notifications, onNotificationClick }) {
  return (
    <div className="notifications">
      <ul className="notification-list">
        {notifications.map((notification) => {
          return (
            <li
              key={notification.id}
              className={`notification-item ${
                notification.read ? "read" : "unread"
              }`}
            >
              <img src={getImageUrl(notification)} alt={notification.title} className="icone"/>
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <img 
                src="/images/right-arrow.png" 
                alt="Arrow" 
                className="arrow-icon" 
                onClick={() => onNotificationClick(notification)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Notifications;