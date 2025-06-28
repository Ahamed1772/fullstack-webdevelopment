
const UserStatus = ({loggedIn,isAdmin}) => {
    return (loggedIn && isAdmin) ? "Welcome Admin" : "Welcome User"
}

export default UserStatus;
