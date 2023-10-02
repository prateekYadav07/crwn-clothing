import { signOutStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

export const SignOutMessage = () => {
    return (
        <>
            <h1>You are logged out</h1>
            <div>
                login in again to shop with us
            </div>
        </>
    )
}

const SignOut = ({ signOutStart, history }) => {
    // const history = useHistory()
    const handleLogout = () => {
        signOutStart()
        history.push('/visitagain')
    }

    const handleCancel = () => {
        history.push('/shop')
    }

    return (
        <div className="container logout">
            <div className="card" >
                <div className="card-body">
                    <h2 className="card-title">Logout</h2>
                    <p className="card-text">Are you sure want to logout?</p>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" onClick={() => handleLogout()} className="card-link btn btn-danger" >Logout</button>
                        <button type="button" onClick={() => handleCancel()} className="card-link btn btn-success" >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(null, mapDispatchToProps)(SignOut))