export function getImageUrl(notification) {
    const images = {
        sun: "/images/sun.png",
        weather: "/images/weather.png",
        leaf: "/images/leaf.png",
        lightning: "/images/lightning.png",
        cleaning: "/images/cleaning.png",
        cloudy: "/images/cloudy.png",
        arrow: "/images/right-arrow.png",
        logo: "/images/logo.png",
      };
    
      return images[notification.imageId] || "/images/default.png";
  }