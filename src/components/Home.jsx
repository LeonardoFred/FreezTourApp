import Navbar from "./Navbar";
import FlightForm from "./FlightForm";
import YouTubeVideoSlider from "./YouTubeVideoSlider";  
import Card from "./Card";






export default function Home() {
  return (
    
    <>
    <div className="container">
      <h1 className="section_content2">Get the coldest with the coolest, Best Tour Operator for "freezing trips"</h1>
    </div>
    <div className="section_content2">
   <FlightForm></FlightForm>
   </div>
  

   <h1 className="section_content3">Arctic Tours</h1> 
    <div className="container-card">
    <Card id={1} />
    <Card id={2} />
    <Card id={3} />
    <Card id={4} />
 
      </div>
      <h1 className="section_content3">Greenland Tours</h1> 
    <div className="container-card">
    <Card id={1} />
    <Card id={2} />
    <Card id={3} />
    <Card id={4} />
    </div>


      <div className="section_content3b"><h1 className="section_content3b">Freezing video slide, enjoy stunning nature</h1>
      <YouTubeVideoSlider videos={['https://www.youtube.com/watch?v=hMMnnYX_y28', 'https://www.youtube.com/watch?v=NSHUiZp2aaY', 'https://www.youtube.com/watch?v=l4VEQpBcOgA']} />
   </div>
    
    

  
    <div className="section_content3"><h1 className="section_content3">Top 10 tips for Arctic Travel </h1>
    <p className="section_content3">
    Unless you’re going on an impulsive, soul-seeking adventure, chances are that your travels require a lot of preparation, especially when you’re venturing to an unfamiliar climate. How do people deal with insane heat?
    How do they manage to survive in the freezing cold? The Arctic, known for its cool-to-cold climate (with the occasional balmy summer day), its polar bears, the North Pole, and the Northern Lights, is an absolutely beautiful place to visit. While the Arctic
    is home to about four million people, it is also home to unpredictable conditions and wildlife — so when it comes to Arctic travel, it’s important to take precautions. From packing to emotional prep, there’s a lot that you need to keep in mind before you explore the tundra
    , and even after your adventure begins. These 10 things will help to make your experience the trip of a lifetime.
</p></div>  
<Navbar></Navbar>
    </>

  );
}
