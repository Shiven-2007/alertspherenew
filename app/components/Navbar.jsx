

export default function Navbar(){

    return (
        <nav className="flex justify-between px-5 bg-stone-800 text-white py-8">
            <div className="">ALERT-SPHERE</div>

            <div className="flex gap-5">
                <a href="/">REAL-TIME DISASTERS</a>
                <a href="/">UPCOMING DISASTERS</a>
                <a href="/">EMERGENCY CONTACTS</a>
                <a href="/">SAFETY MEASURES</a>
            </div>
        </nav>
    )

}