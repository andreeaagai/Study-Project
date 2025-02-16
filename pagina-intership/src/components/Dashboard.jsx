import React, { useState } from "react";
import Notifications from "./Notifications";
import Modal from "./Modal";
import "./Dashboard.css";


const notificationsData = [
  {
    id: 1,
    imageId: 'sun',
    title: "Solar Eco-Power",
    message:
      "Sagittis vivamus lorem faucibus diam sed ultrices vel magna enim libero quis pellentesque faucibus odio penatibus donec sodales litu.",
    read: false,
  },
  {
    id: 2,
    imageId: 'weather',
    title: "Wind Eco-Power",
    message:
      "Sagittis vivamus lorem faucibus diam sed ultrices vel magna enim libero quis pellentesque faucibus odio penatibus donec sodales litu.",
    read: false,
  },
  {
    id: 3,
    imageId: 'leaf',
    title: "Live Eco-Friendly",
    message:
      "Sagittis vivamus lorem faucibus diam sed ultrices vel magna enim libero quis pellentesque faucibus odio penatibus donec sodales litu.",
    read: false,
  },
  {
    id: 4,
    imageId: 'lightning',
    title: "Isolated installations",
    message:
      "Sagittis vivamus lorem faucibus diam sed ultrices vel magna enim libero quis pellentesque faucibus odio penatibus donec sodales litu.",
    read: false,
  },
  {
    id: 5,
    imageId: 'cleaning',
    title: "Panel cleaning",
    message:
      "Sagittis vivamus lorem faucibus diam sed ultrices vel magna enim libero quis pellentesque faucibus odio penatibus donec sodales litu.",
    read: false,
  },
  {
    id: 6,
    imageId: 'cloudy',
    title: "Solar pumping",
    message:
      "Sagittis vivamus lorem faucibus diam sed ultrices vel magna enim libero quis pellentesque faucibus odio penatibus donec sodales litu.",
    read: false,
  },
];

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(null);
  const [notifications, setNotifications] = useState(notificationsData);

  const openModal = (notification) => {
    setCurrentNotification(notification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (currentNotification) {
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === currentNotification.id
            ? { ...notification, read: true }
            : notification
        )
      );
      setCurrentNotification(null);
    }
  };

  return (
    <div>
      <div className="notifications-section">
        <div className="notifications-title">
          <h2 className="title">Our Services</h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectur at lacus eratligula porta nulla
            voluptat posuere insed ultrices.
          </p>
        </div>
        <div>
          <Notifications
            notifications={notifications}
            onNotificationClick={openModal}
          />
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        notification={currentNotification}
      />
    </div>
  );
}

export default Dashboard;
