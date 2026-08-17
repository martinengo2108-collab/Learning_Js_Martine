import logo from "./assets/shared/logo.svg"

export default function Header(){
    return(
        <>  
        <header>
            <div>
                <Link to="/"><img src={logo} alt="Space Tourism" title="Space Tourism"></Link>
            </div>
        </header>
        </>
    )
}