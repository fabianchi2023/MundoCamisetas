const Loading = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span className="visually-hidden" role="status">Cargando Productos...</span>
                    </button>
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Loading