const ItemListContainer = ({mensaje}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2 className="text-primary">{mensaje}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer