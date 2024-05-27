import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-primary text-white text-center py-3">
        <h1>Welcome to My Blog</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mt-5">
        <h2>Latest Articles</h2>
        <div className="card mb-3">
          <img 
            src="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg"
            className="card-img-top"
            alt="Buildings near body of water at night"
          />
          <div className="card-body">
            <h5 className="card-title">Beautiful Nightscape</h5>
            <p className="card-text">
              This stunning photograph captures buildings near a body of water at night. The reflections on the water and the lights create a mesmerizing view. The peaceful ambiance and the captivating scenery make this a perfect subject for night photography enthusiasts.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 My Blog</p>
      </footer>
    </div>
  );
}

export default HomePage;
