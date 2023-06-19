function Pricecard({datas}){
    return <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-uppercase text-center">{datas.title}</h5>
        <h6 className="card-price text-center">${datas.price}<span className="period">/month</span></h6>
        <hr/>
        <ul className="fa-ul">
          {
           datas.features.map((lists)=>{
             return <li className={lists.visible ? '' : 'text-muted'}>
               <span className="fa-li">
                 <i className="fas fa-check">
                 </i>
                 </span>{lists.name}
                 </li>
           })
          }
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
}

export default Pricecard;