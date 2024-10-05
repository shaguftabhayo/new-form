import React, { useEffect, useState } from 'react'
import "./style.css";

function Login() {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        confirmPassword: "",
    });

    // error
    const [userErr, setUserErr] = useState({
        emailErr: false,
        passwordErr: false,
        confirmPasswordErr: false,
        firstNameErr: false,
        lastNameErr: false,
    });

    const signInHandler = (e) => {
        e.preventDefault();

        if (userDetails.firstName === "" && userDetails.lastName === "" && userDetails.email === "" && userDetails.password === "" && userDetails.confirmPassword === "") {
            setUserErr({ firstNameErr: true, lastNameErr: true, emailErr: true, passwordErr: true, confirmPasswordErr: true });
        }


        console.log(userDetails);

    };

    useEffect(() => {
        if (userDetails.firstName !== "") {
            setUserErr({ ...userErr, firstNameErr: false });
        }

        if (userDetails.lastName !== "") {
            setUserErr({ ...userErr, lastNameErr: false });
        }

        if (userDetails.email !== "") {
            setUserErr({ ...userErr, emailErr: false });
        }

        if (userDetails.password !== "") {
            setUserErr({ ...userErr, passwordErr: false });
        }

        if (userDetails.confirmPassword !== "") {
            setUserErr({ ...userErr, confirmPasswordErr: false });
        }

    }, [userDetails]);

    return (
        <div className="d-flex justify-content-center align-items-center my-3">
            <div className="modal-body p-3 rounded border-success shadow-lg" style={{ maxWidth: "500px",  border: "2px solid black" }}>
                <form className="  align-items-center" onSubmit={signInHandler}> 
                    <h1 className="text-center text-success">Sign-in</h1>
                    <div className="form-floating mb-3">
                        <h5>First Name</h5>
                        <input
                            type="text"
                            className="form-control rounded-3 "
                            placeholder="First Name"
                            value={userDetails.firstName}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, firstName: e.target.value })
                            }
                            style={{ border: userErr.firstNameErr ? "2px solid red" : "" }}
                        />
                        {userErr.firstNameErr && (
                            <span className="text-danger">Enter your first name.</span>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <h5>Last Name</h5>
                        <input
                            type="text"
                            className="form-control rounded-3 "
                            value={userDetails.lastName}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, lastName: e.target.value })
                            }
                            style={{ border: userErr.lastNameErr ? "2px solid red" : "" }}
                        />

                        {userErr.lastNameErr && (
                            <span className="text-danger">Enter your last name.</span>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <h5>Email address</h5>
                        <input
                            type="email"
                            className="form-control rounded-3 "
                            placeholder="name@example.com"
                            value={userDetails.email}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, email: e.target.value })
                            }
                            style={{ border: userErr.emailErr ? "2px solid red" : "" }}

                        />
                        {userErr.emailErr && (
                            <span className="text-danger">Enter your email.</span>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <h5>Password</h5>
                        <input
                            type="password"
                            className="form-control rounded-3"
                            value={userDetails.password}
                            placeholder="Password"
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, password: e.target.value })
                            }
                            style={{ border: userErr.passwordErr ? "2px solid red" : "" }}
                        />
                        {userErr.passwordErr && (
                            <span className="text-danger">Enter your password.</span>
                        )}
                    </div>
                    <div className="form-floating mb-3">
                        <h5>Confirm Password</h5>
                        <input
                            type="password"
                            className="form-control rounded-3"
                            value={userDetails.confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) =>
                                setUserDetails({
                                    ...userDetails,
                                    confirmPassword: e.target.value,
                                })
                            }
                            style={{
                                border: userErr.confirmPasswordErr ? "2px solid red" : "",
                            }}
                        />
                        {userErr.confirmPasswordErr && (
                            <span className="text-danger">Confirm your password.</span>
                        )}
                    </div>


                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-success" type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Login;