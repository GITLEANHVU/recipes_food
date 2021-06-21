function AccountInfo(props) {
    const {name, email, address} = props.account
    //console.log(props.account)
    return (
        <div className="modal fade" id="accounntInfo" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="header_info" >
                        <h5 className="title_info">Thông tin tài khoản</h5>
                        <button type="button" data-bs-dismiss="modal" aria-label="Close" id="close_info"><i className="fas fa-times-circle" id="close"></i></button>
                    </div>
                    <div className="modal-body" id="bodyInfo">
                        <div className="bodyInfo"><i className="fas fa-user"></i><p className="modal-body-content">{name}</p></div>
                        <div className="bodyInfo"><i className="far fa-envelope"></i><p className="modal-body-content">{email}</p></div>
                        <div className="bodyInfo"><i className="fas fa-map-marker-alt"></i><p className="modal-body-content">{address}</p></div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;