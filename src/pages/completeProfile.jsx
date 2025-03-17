import { useEffect } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
const CompleteProfile = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const cookies = Cookies.get()
        const token = cookies.access_token
        try {
            if (!token) throw new Error("Unauthorized user")
        } catch (error) {
            console.log(error)
            navigate("/donorInfo")
        }
    })
    

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-6">
            {/* Donor Gallery */}
            <h2 className="text-4xl font-bold text-center text-green-700 mb-10">Complete your profile!</h2>

            {/* Food Donation Form */}
            <div className="max-w-lg mx-auto mt-16 p-8 bg-white rounded-xl shadow-xl transform transition duration-500 hover:scale-105">
                <h2 className="text-3xl font-bold text-center text-gray-800">A few more steps</h2>

                <form className="mt-6 space-y-4">
                    <input type="text" placeholder="Your name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    <input type="text" placeholder="Contact Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    {/* <input type="text" placeholder="State" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required />
                    <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" required /> */}
                    {/* <button onClick={getLocation} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">Provide Location</button> */}

                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                        onClick={() => navigate("/RequestPage")}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CompleteProfile
