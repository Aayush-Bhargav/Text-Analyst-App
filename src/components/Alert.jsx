import React from 'react'
//alert component that displays an alert 
export default function Alert(props) {
    return (
        <div style={{ height: "50px" }} className={`${props.mode === 'light' ? 'body-light' : 'body-dark'}`}>
            {props.alert && <div className="alert alert-success alert-dismissible fade show mb-0" role="alert">
                <strong>Success!</strong> {props.alert}
            </div>}
        </div>
    )
}
