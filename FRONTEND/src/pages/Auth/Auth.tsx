import { useState } from 'react'
import './Auth.css'

function Auth() {
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const passwordType = showPassword ? 'text' : 'password'
  const eyeIcon = showPassword ? 'uil-eye' : 'uil-eye-slash'

  return (
    <main className="auth-page">
      <section className={`auth-container ${isSignup ? 'active' : ''}`}>
        <div className="forms">
          <div className="form login">
            <span className="title">Login</span>

            <form>
              <label className="input-field">
                <input type="email" placeholder="Enter your email" required />
                <i className="uil uil-envelope icon" aria-hidden="true"></i>
              </label>

              <label className="input-field">
                <input
                  type={passwordType}
                  className="password"
                  placeholder="Enter your password"
                  required
                />
                <i className="uil uil-lock icon" aria-hidden="true"></i>
                <button
                  className="showHidePw"
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  <i className={`uil ${eyeIcon}`} aria-hidden="true"></i>
                </button>
              </label>

              <div className="checkbox-text">
                <label className="checkbox-content text">
                  <input type="checkbox" />
                  Remember me
                </label>

                <a href="#" className="text">
                  Forgot password?
                </a>
              </div>

              <div className="input-field button">
                <input type="button" value="Login" />
              </div>
            </form>

            <div className="login-signup">
              <span className="text">
                Not a member?{' '}
                <a
                  href="#signup"
                  className="text signup-link"
                  onClick={(event) => {
                    event.preventDefault()
                    setIsSignup(true)
                  }}
                >
                  Signup Now
                </a>
              </span>
            </div>
          </div>

          <div className="form signup">
            <span className="title">Registration</span>

            <form>
              <label className="input-field">
                <input type="text" placeholder="Enter your name" required />
                <i className="uil uil-user icon" aria-hidden="true"></i>
              </label>

              <label className="input-field">
                <input type="email" placeholder="Enter your email" required />
                <i className="uil uil-envelope icon" aria-hidden="true"></i>
              </label>

              <label className="input-field">
                <input
                  type={passwordType}
                  className="password"
                  placeholder="Create a password"
                  required
                />
                <i className="uil uil-lock icon" aria-hidden="true"></i>
              </label>

              <label className="input-field">
                <input
                  type={passwordType}
                  className="password"
                  placeholder="Confirm a password"
                  required
                />
                <i className="uil uil-lock icon" aria-hidden="true"></i>
                <button
                  className="showHidePw"
                  type="button"
                  aria-label={showPassword ? 'Hide passwords' : 'Show passwords'}
                  onClick={() => setShowPassword((current) => !current)}
                >
                  <i className={`uil ${eyeIcon}`} aria-hidden="true"></i>
                </button>
              </label>

              <div className="checkbox-text">
                <label className="checkbox-content text">
                  <input type="checkbox" />
                  I accepted all terms and conditions
                </label>
              </div>

              <div className="input-field button">
                <input type="button" value="Signup" />
              </div>
            </form>

            <div className="login-signup">
              <span className="text">
                Already a member?{' '}
                <a
                  href="#login"
                  className="text login-link"
                  onClick={(event) => {
                    event.preventDefault()
                    setIsSignup(false)
                  }}
                >
                  Login Now
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Auth
