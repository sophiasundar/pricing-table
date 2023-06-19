import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pricecard from './Components/Pricecard';




function App() {
  let productvalue = [
    {
      title : "Free",
      price : 0,
      features : [
        {
          name : "Single User",
          visible : true
        },
        {
          name : "5GB Storage",
          visible : true
        },
        {
          name : "Unlimited Public Projects",
          visible : true
        },
        {
          name : "Community Access",
          visible : true
        },
        {
          name : "Unlimited Private Projects",
          visible : false
        },
        {
          name : "Dedicated Phone Support",
          visible : false
        },
        {
          name : "Free Subdomain",
          visible : false
        },
        {
          name : "Monthly Status Reports",
          visible : false
        }
      ]
    },
    {
      title : "Plus",
      price : 9,
      features : [
        {
          name : "5 Users",
          visible : true
        },
        {
          name : "50GB Storage",
          visible : true
        },
        {
          name : "Unlimited Public Projects",
          visible : true
        },
        {
          name : "Community Access",
          visible : true
        },
        {
          name : "Unlimited Private Projects",
          visible : true
        },
        {
          name : "Dedicated Phone Support",
          visible : true
        },
        {
          name : "Free Subdomain",
          visible : true
        },
        {
          name : "Monthly Status Reports",
          visible : false
        } 
      ]
    },
    {
      title : "Pro",
      price : 49,
      features : [
        {
          name : "Unlimited Users",
          visible : true
        },
        {
          name : "150GB Storage",
          visible : true
        },
        {
          name : "Unlimited Public Projects",
          visible : true
        },
        {
          name : "Community Access",
          visible : true
        },
        {
          name : "Unlimited Private Projects",
          visible : true
        },
        {
          name : "Dedicated Phone Support",
          visible : true
        },
        {
          name : "Unlimited Free Subdomains",
          visible : true
        },
        {
          name : "Monthly Status Reports",
          visible : true
        }
      ]
    }
  ]
      return(
        <section  class="pricing py-5">
         <div class="container">
          <div class="row">
             {
              productvalue.map((cards)=>{
                <Pricecard></Pricecard>
                return <Pricecard datas={cards}></Pricecard>
              })
             }

             </div>
             </div>
        </section>
      )
}

export default App;