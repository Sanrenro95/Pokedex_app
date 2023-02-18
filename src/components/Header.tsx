import style from './header.module.css'

type HeaderPorps = {
    query: string;
    setQuery: (query: string) => void;
}

const Header = ({query, setQuery}: HeaderPorps) => {

    return (
        <header className={style.header}>
            <input className={style.input} placeholder="Search a Pokemon" type="text" value={query} onChange={(e) => setQuery(e.target.value) } />
        </header>
    )
}

export default Header;