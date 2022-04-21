import Router from 'next/router';
import { useEffect } from 'react';

export default function AccessDenied() {
  useEffect(() => {
    Router.replace("/login")
  }, [])

  return (
    <>
      <section className="bannertitle-sec">
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="bannerwithcount">
          <h1>Access Denied</h1>
          </div>
          <div className="bannerwithcount">
          <h4>You must be signed in to view this page</h4>
          </div>
        </div>
      </section>
      <section className="referfriendpage_wrapper loginpage_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-7 login_wrapper">
              <div className="submitbutton_wrap" style={{ textAlign: "center" }}>
                <button className="save_btn"
                  onClick={(e) => {
                    e.preventDefault()
                    Router.replace("/login")
                  }}>Sign In</button>
              </div>
            </div>
          </div>
        </div></section>
    </>
  )
}