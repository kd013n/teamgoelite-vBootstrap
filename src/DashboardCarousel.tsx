import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/DashboardCarousel.css'
import dbbanner1 from './assets/images/db-banner1.png'
import dbbanner2 from './assets/images/db-banner2.png'

function DashboardCarousel() {
    return <>
    <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="dashboard-banner1 position-absolute">
                    <p className="display-1">TEAM <span className="spc1 thicc">GO</span></p> 
                    <p className="display-1">ELITE</p>
                </div>
                <img src={dbbanner1} className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item">
                <div className="dashboard-banner1 position-absolute">
                    <p className="display-1">WHAT'S </p>
                    <p className="display-1"><span className="spc1 thicc">NEW?</span></p>
                </div>
                <img src={dbbanner2} className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item">
                <div className="dashboard-banner1 position-absolute">
                    <p className="display-1">THE TGE</p>
                    <p className="display-1"><span className="spc1 thicc">MISSION</span></p>
                </div>
                <img src={dbbanner1} className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item">
                <div className="dashboard-banner1 position-absolute">
                    <p className="display-1">THE TGE</p>
                    <p className="display-1"><span className="spc1 thicc">VISION</span></p>
                </div>
                <img src={dbbanner2} className="object-fit-cover w-100" alt="..."/ >
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
        

    </>
}

export default DashboardCarousel