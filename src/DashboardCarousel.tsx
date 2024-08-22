import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/DashboardCarousel.css'

function DashboardCarousel() {
    return <>
    <div id="carouselExampleAutoplaying" className="carousel slide h-75" data-bs-ride="carousel">
        <div className="carousel-inner h-75">
            <div className="carousel-item h-75 active">
                <div className="dashboard-banner1 position-absolute">
                    <h1 className="display-1">Display 1</h1>
                </div>
                <img src="https://images.pexels.com/photos/26493650/pexels-photo-26493650/free-photo-of-ducks-by-the-stream-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item h-75">
                <img src="https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-fit-cover w-100" alt="..."/ >
            </div>
            <div className="carousel-item h-75">
                <img src="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-fit-cover w-100" alt="..."/ >
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