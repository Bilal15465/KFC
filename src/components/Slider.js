import React from 'react'

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.kfcpakistan.com/images/24768cf0-ccda-11ee-a3d2-55a29658d5c6-995x356_desktop_image-2024-02-16144618.jpg" height={500} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/494fb5b0-c127-11ee-8518-c1658f26e97a-995x356_desktop_image-2024-02-01172817.jpg" height={500} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/98f788d0-c114-11ee-a3ee-43791878213d-995x356_desktop_image-2024-02-01151430.jpg" height={500} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/cd4ca4d0-c10a-11ee-a944-dff5ba81df00-995x356_desktop_image-2024-02-01140423.jpg" height={500} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://www.kfcpakistan.com/images/c7b1dc20-c10a-11ee-80fc-61e222f04cae-995x356_desktop_image-2024-02-01140413.jpg" height={500} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
