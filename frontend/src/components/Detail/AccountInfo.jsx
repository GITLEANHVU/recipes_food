function AccountInfo(props) {
    const {name, email, address} = props.account
    //console.log(props.account)
    return (
        <div className="modal fade" id="accounntInfo" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="header_info" >
                        <h5 className="title_info">Account Information</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" id="close_info"><i className="fas fa-times-circle" id="close"></i></button>
                    </div>
                    <div className="modal-body">
                        <p className="namInfo">Name: {name}</p>
                        <p className="emailInfo">Email: {email}</p>
                        <p className="address">Address: {address}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;