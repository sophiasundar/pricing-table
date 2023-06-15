import './App.css';
import Cards from './Components/Cards';


function App() {
  var cardDetails=[
    {
      planName:"FREE",
      price: 0,
      features :[
        {
          name: "Single User",isEnabled:true
        },
        {
          name: "5GB Storage",isEnabled:true
        },
        {
          name: "Unlimited Public Projects",isEnabled:true
        },
        {
          name: "Community Access",isEnabled:true
        },
        {
          name: "Unlimited Private Projects",isEnabled:false
        },
        {
          name: "Dedicated Phone Support",isEnabled:false
        },
        {
          name: "Free Subdomain",isEnabled:false
        },
        {
          name: "Monthly Status Reports",isEnabled:false
        },

      ],
    },
    {
      planName:"PLUS",
      price: 9,
      features :[
        {
          name: "5 User",isEnabled:true,isBold: true
        },
        {
          name: "50GB Storage",isEnabled:true
        },
        {
          name: "Unlimited Public Projects",isEnabled:true
        },
        {
          name: "Community Access",isEnabled:true
        },
        {
          name: "Unlimited Private Projects",isEnabled:true
        },
        {
          name: "Dedicated Phone Support",isEnabled:true
        },
        {
          name: "Free Subdomain",isEnabled:true
        },
        {
          name: "Monthly Status Reports",isEnabled:false
        },

      ],
    },
    {
      planName:"PRO",
      price: 49,
      features :[
        {
          name: "Unlimited User",isEnabled:true,isBold: true
        },
        {
          name: "150GB Storage",isEnabled:true
        },
        {
          name: "Unlimited Public Projects",isEnabled:true
        },
        {
          name: "Community Access",isEnabled:true
        },
        {
          name: "Unlimited Private Projects",isEnabled:true
        },
        {
          name: "Dedicated Phone Support",isEnabled:true
        },
        {
          name: "Unlimited Free Subdomain",isEnabled:true,isunlimited: true
        },
        {
          name: "Monthly Status Reports",isEnabled:true
        },

      ],
    },
  ];
  return (

    <div className="App">
       <Cards></Cards>
      <section class="pricing py-5">
      <div class="container">
      <div class="row">
       
        {
          cardDetails.map((data,index)=>{
            return <Cards key={`C${index}`} data={data}></Cards>
          })
        }


      </div>
      </div>
      </section>
    </div>
  );
}

export default App;
