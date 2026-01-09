import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
            <div className="card shadow-lg card-background position-relative mx-auto">
  <div className="card-body text-center p-5 position-relative" style={{ zIndex: 1 }}>
                <h1 className="fw-bold mb-1">Casey Peters</h1>
                <p className="text-muted mb-4">
                  Full Stack Developer
                </p>

                <div className="d-grid gap-3">

                  <a
                    href="/CV.pdf"
                    className="btn btn-outline-primary"
                  >
                    <img src='/cv.png' alt='Casey Peters CV' width='50px'/>
                  </a>

                  <a
                    href="https://github.com/Just-Casey-Codes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <img src='/github.png' alt='Casey Peters GitHub' width='50px'/>
                  </a>

                  <a
                    href="mailto:caseypeters.work@gmail.com"
                    className="btn btn-outline-secondary"
                  >
                    <img src='/email.png' alt='email' width='55px'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App
