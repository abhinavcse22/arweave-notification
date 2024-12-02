import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(
    Array.from({ length: 6 }, (_, i) => ({
      id: i,
      title: `Project #${i + 1}`,
      description:
        i % 2 === 0
          ? "A new decentralized app is now live!"
          : "A unique NFT marketplace has been launched.",
      timestamp: "5 mins ago",
      isEnabled: true,
    }))
  );

  // Open/Close Wallet Modal
  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
  };

  // Handle Individual Notification Toggle
  const toggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isEnabled: !notification.isEnabled }
          : notification
      )
    );
  };

  const handleSellClick = (id) => {
    alert(`Sell action for project #${id + 1}`);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="project-title">Arweave System</h1>
        <button className="connect-wallet" onClick={toggleWalletModal}>
          Connect Wallet
        </button>
      </header>

      {/* Wallet Modal */}
      {isWalletModalOpen && (
        <div className="wallet-modal">
          <div className="wallet-modal-content">
            <h2>Connect Wallet</h2>
            <button onClick={() => alert("Connecting to MetaMask!")}>
              MetaMask
            </button>
            <button onClick={() => alert("Connecting to Coinbase!")}>
              Coinbase
            </button>
            <button onClick={() => alert("Connecting to WalletConnect!")}>
              WalletConnect
            </button>
            <button className="close-modal" onClick={toggleWalletModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Notifications Section */}
      <main className="main">
        <h2 className="section-title">New Projects in Arweave System</h2>
        <div className="notification-grid">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-card ${
                notification.isEnabled ? "" : "disabled-card"
              }`}
            >
              <h3>{notification.title}</h3>
              <p>{notification.description}</p>
              <div className="card-actions">
                <span className="timestamp">{notification.timestamp}</span>
                <button
                  className="sell-button"
                  onClick={() => handleSellClick(notification.id)}
                >
                  Sell
                </button>
                <label className="toggle-container">
                  <input
                    type="checkbox"
                    checked={notification.isEnabled}
                    onChange={() => toggleNotification(notification.id)}
                  />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>Follow us on:</span>
        <div className="social-icons">
          <a href="#">
            <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord" />
          </a>
          <a href="#">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="Twitter" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
