function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 py-14 px-32 bg-gray-100 border-t">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p className="hover:underline cursor-pointer">How Airbnb works</p>
                <p className="hover:underline cursor-pointer">Newsroom</p>
                <p className="hover:underline cursor-pointer">Investors</p>
                <p className="hover:underline cursor-pointer">Airbnb plus</p>
                <p className="hover:underline cursor-pointer">Airbnb luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p className="hover:underline cursor-pointer">Diversity & Belonging</p>
                <p className="hover:underline cursor-pointer">Against Discrimination</p>
                <p className="hover:underline cursor-pointer">Accessibility</p>
                <p className="hover:underline cursor-pointer">Guest Referrals</p>
                <p className="hover:underline cursor-pointer">Airbnb.org</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p className="hover:underline cursor-pointer">Host your home</p>
                <p className="hover:underline cursor-pointer">Host an Online Experience</p>
                <p className="hover:underline cursor-pointer">Host an Experience</p>
                <p className="hover:underline cursor-pointer">Responsible hosting</p>
                <p className="hover:underline cursor-pointer">Community Center</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p className="hover:underline cursor-pointer">Our COVID-19 Response</p>
                <p className="hover:underline cursor-pointer">Help Center</p>
                <p className="hover:underline cursor-pointer">Cancellation options</p>
                <p className="hover:underline cursor-pointer">Neighborhood Support</p>
                <p className="hover:underline cursor-pointer">Trust & Safety</p>
            </div>
        </div>
    )
}

export default Footer
