const Cards=(props)=>{
   return(
    <>
      
        {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.planName}Free</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
            {props.data.features.map((ele, index) => {
              return (
                <li
                  key={`A${index}`}
                  className={ele.isEnabled ? "" : "text-muted"}
                >
                  <span className="fa-li">
                    <i
                      className={`fas ${
                        ele.isEnabled ? "fa-check" : "fa-times"
                      }`}
                    ></i>
                  </span>
                  {props.data.planName === "PRO" && ele.isunlimited ? (
                    <strong>Unlimited </strong>
                  ) : (
                    ""
                  )}
                  {ele.isBold ? (
                    <strong>{ele.name}</strong>
                  ) : (
                    <span>{ele.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>
 
 )
}  


export default Cards;