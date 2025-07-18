import React from 'react'

const SideNavbar = () => {
  return (
    <div>
<div>
  {/*Main Navigation*/}
  <header>
    {/* Sidebar */}
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <a href="#" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3" /><span>Main dashboard</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
            <i className="fas fa-chart-area fa-fw me-3" /><span>Webiste traffic</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3" /><span>Password</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-line fa-fw me-3" /><span>Analytics</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-chart-pie fa-fw me-3" /><span>SEO</span>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-chart-bar fa-fw me-3" /><span>Orders</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-globe fa-fw me-3" /><span>International</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-building fa-fw me-3" /><span>Partners</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-calendar fa-fw me-3" /><span>Calendar</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-users fa-fw me-3" /><span>Users</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-money-bill fa-fw me-3" /><span>Sales</span></a>
        </div>
      </div>
    </nav>
    {/* Sidebar */}
    {/* Navbar */}
    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      {/* Container wrapper */}
      <div className="container-fluid">
        {/* Toggle button */}
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        {/* Brand */}
        <a className="navbar-brand" href="#">
          <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height={25} alt="MDB Logo" loading="lazy" />
        </a>
        {/* Search form */}
        <form className="d-none d-md-flex input-group w-auto my-auto">
          <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search (ctrl + &quot;/&quot; to focus)" style={{minWidth: 225}} />
          <span className="input-group-text border-0"><i className="fas fa-search" /></span>
        </form>
        {/* Right links */}
        <ul className="navbar-nav ms-auto d-flex flex-row">
          {/* Notification dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-bell" />
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">Some news</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another news</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          {/* Icon */}
          <li className="nav-item">
            <a className="nav-link me-3 me-lg-0" href="#">
              <i className="fas fa-fill-drip" />
            </a>
          </li>
          {/* Icon */}
          <li className="nav-item me-3 me-lg-0">
            <a className="nav-link" href="#">
              <i className="fab fa-github" />
            </a>
          </li>
          {/* Icon dropdown */}
          <li className="nav-item dropdown">
            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="united kingdom flag m-0" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#"><i className="united kingdom flag" />English
                  <i className="fa fa-check text-success ms-2" /></a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-poland flag" />Polski</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-china flag" />中文</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-japan flag" />日本語</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-germany flag" />Deutsch</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-france flag" />Français</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-spain flag" />Español</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-russia flag" />Русский</a>
              </li>
              <li>
                <a className="dropdown-item" href="#"><i className="flag-portugal flag" />Português</a>
              </li>
            </ul>
          </li>
          {/* Avatar */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle" height={22} alt="Avatar" loading="lazy" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* Container wrapper */}
    </nav>
    {/* Navbar */}
  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <main style={{marginTop: 58}}>
    <div className="container pt-4" />
  </main>
  {/*Main layout*/}
</div>

    </div>
  )
}

export default SideNavbar
