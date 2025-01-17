import { Link } from "react-router-dom"

export function Header(){
    return (
        <header className="w-full flex h-20 shadow-md fixed bg-white z-10">
            <div className="sm:m-auto sm:w-[1080px] flex flex-row items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="w-32 sm:w-48 p-4 ">
                        <Link to='/'><img src="https://conexaostihl.com.br/src/utl/utl66/utl-logo.png" alt="Logo UTL" /></Link>
                    </div>
                    <nav>
                        <ul className="flex flex-row gap-4 text-xs font-stihl-bold">
                            <li><Link to='/' className=" hover:text-laranjaStihl transition-all">HOME</Link></li>
                            <li><Link to='/edicoesanteriores' className=" hover:text-laranjaStihl transition-all">EDIÇÕES ANTERIORES</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className=" w-32 p-4 hidden sm:flex">
                    <img src="/logoStihl.png" alt="Logo Stihl" />
                </div>
            </div>
            
        </header>
    )
}