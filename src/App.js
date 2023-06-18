import './App.css';
import Cards from './Components/Cards'



function App(){
  const Cards = [
    {
  planName:"Free",
  price: 0,
  features: [
    {name:"single-user",enabled:true },
    {name:"5GB Storage",enabled:true },
    {name:"Unlimited Public Projects",enabled:true },
    {name:"Community Access",enabled:true },
    {name:"Unlimited Private Projects",enabled:false },
    {name:"Dedicated Phone Support",enabled:false },
    {name:"Free Subdomain",enabled:false },
    {name:"Monthly Status Reports",enabled:false },
  ],
},
{ 
planName:"Plus",
price: 9,
features: [
  {name:"single-user",enabled:true },
  {name:"5GB Storage",enabled:true },
  {name:"Unlimited Public Projects",enabled:true },
  {name:"Community Access",enabled:true },
  {name:"Unlimited Private Projects",enabled:true },
  {name:"Dedicated Phone Support",enabled:true },
  {name:"Free Subdomain",enabled:true },
  {name:"Monthly Status Reports",enabled:false },
],
},
{
  planName:"Pro",
  price: 49,
  features: [
    {name:"single-user",enabled:true },
    {name:"5GB Storage",enabled:true },
    {name:"Unlimited Public Projects",enabled:true },
    {name:"Community Access",enabled:true },
    {name:"Unlimited Private Projects",enabled:true },
    {name:"Dedicated Phone Support",enabled:true },
    {name:"Free Subdomain",enabled:true },
    {name:"Monthly Status Reports",enabled:true },
  ],
},
  ];  
return( 
  <section className="pricing py-5">
 <div className="container">
   <div className="row">
     {
       Cards.map((card) =>{
          
          return <Cards key={App} planName={card.planName} name={card.name} price={card.price} features= {card.features}/>
       })
     }
   </div>
 </div></section>
);
}
export default App;