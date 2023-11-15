import "./custome.css"
import { PopupMenu } from "react-simple-widgets";

export default function UserDropdown({ firstLetter, name, email, mobile }) {
    return (
        <div>
            <div className="text-end">
                <PopupMenu>
                    <button className="btn btn-primary">
                        <small>{firstLetter}</small>
                    </button>

                    <div className="card text-start">
                        <div className="card-body px-4 py-4">
                            <div id="circle-avatar" className="text-center mx-auto mb-4">
                                <span>{firstLetter}</span>
                            </div>

                            <h5 className="text-center mb-0">{name}</h5>
                            <p className="text-center mb-2">{email}</p>
                            <p className="text-center mb-2">{mobile}</p>


                            <hr className="mb-0" style={{ margin: "0 -24px 0" }} />



                            <hr style={{ margin: "0 -24px 24px" }} />

                            <div className="d-grid">
                                <button className="btn btn-secondary">
                                    <small>Logout</small>
                                </button>
                            </div>
                        </div>
                    </div>
                </PopupMenu>
            </div>
        </div>
    );
}
