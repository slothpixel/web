export default function Header() {
    return (
        <header className="fixed top-0 h-14 w-full backdrop-blur-md bg-cyan-900/75 p-3 z-50">
            <div className="flex flex-row">
                <p className="text-m px-2">Players</p>
                <p className="text-m px-2">Guilds</p>
                <p className="text-m px-2">Leaderboards</p>
            </div>
        </header>
    )
}
