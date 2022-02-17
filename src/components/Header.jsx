//Components
import {Navbar} from './Navbar'

//Styles
import '../styles/header.css'

export const Header = () => {
  return (
    <header className='container-fluid pt-3 header__container mb-4'>
      <div className='row text-center'>
      <h1 className="text-light fs-1">
        TodoList
      </h1>
      <Navbar/>
      </div>
    </header>
  )
}
