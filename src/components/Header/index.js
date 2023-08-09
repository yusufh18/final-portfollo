import Navigation from "../Navigation";
const Header = (props) => {
  return (
    <header>
      <div className="header-block">
        <div className="dev-name">Lernantino</div>
      </div>
      <Navigation 
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </header>
  )
}

export default Header;
