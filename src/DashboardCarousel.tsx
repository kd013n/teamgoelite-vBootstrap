import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/DashboardCarousel.css'
import dbbanner1 from './assets/images/db-banner1.png'
import dbbanner2 from './assets/images/db-banner2.png'

function DashboardCarousel() {
    return <>
    <div id="carouselExampleAutoplaying" className="carousel slide h-75" data-bs-ride="carousel">
        <div className="carousel-inner h-75">
            <div className="carousel-item h-75 active">
                <div className="dashboard-banner1 position-absolute">
                    <h1 className="display-1">TEAM GO</h1> <br />
                    <h1 className="display-1">ELITE</h1>
                </div>
                <img src={dbbanner1} className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item h-75">
                <img src={dbbanner2} className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item h-75">
                <img src={dbbanner1} className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item h-75">
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