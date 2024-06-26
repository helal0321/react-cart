import Filter from "./filter"
import HomeBody from "./homeBody"
import './css/home.css'

function Home(){
    return(
        <div className="pageContainer">
            <Filter />
            <HomeBody />
        </div>
    )
}
export default Home