import styles from "./Header.css"
import Search from "./kanban/Search"

const Header = () => {
  return (
    <div className='nav'>
        <div className="container">
             <h1>Nimb</h1><Search/>
        </div>
       
        </div>
  )
}

export default Header