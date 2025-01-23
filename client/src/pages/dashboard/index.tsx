import {useUser} from "@clerk/clerk-react"

function Dashboard() {

    const {user} = useUser()
    return (
        <div className="dashboard-container">
            <h1>Welcome {user ? user.firstName : ""}! Here Are Your Finances</h1>
        </div>
    )
}

export default Dashboard