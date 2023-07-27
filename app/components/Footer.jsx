export default function Footer () {

    return (
        <footer className="text-center bg-slate-400">

            <div className="social-icons  bg-violet-300">
            <a href="https://github.com/VeronicaDFL" className="pl-4 scale-90 hover:scale-100 animate-pulse ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/github.svg"height="25" width="25" alt="link to project" /></a>

            <a href="https://www.linkedin.com/in/veronicadefelice/" className="scale-90 hover:scale-100  animate-pulse ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/link.png"height="25" width="25" alt="link to project" /></a>

            <a href="https://main.d3qkj62q5kdmfa.amplifyapp.com/" className="scale-90 hover:scale-100  animate-pulse  ml-3 text-titanium-500 inline-flex" target="_blank" rel="noreferrer"><img src="/images/connect.png"height="25" width="25" alt="link to project" /></a>
            
            <a href="mailto:verodefelic@gmail.com" className="scale-90 hover:scale-100  animate-pulse ml-3 text-titanium-500 inline-flex " target="_blank" rel="noreferrer"><img src="/images/email.png"height="25" width="25" alt="link to project" /></a>
            </div>
            
            <p className="bottom pb-1">© 2023 Veronica De Felice</p>

        </footer>

    )
}