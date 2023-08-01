export default function Hero () {

    return (
        <section className=" p-4 bg-cyan-400">
            <div className=" md:flex-shrink-0 md:space-x-20 p-6 md:px-60 pt-20  bg-red-400 md:columns-2 ">
                <div className="relative bg-cyan-700 ">
                <img  className="absolute rounded-md  object-cover w-full h-90" alt="hero" src="/images/vero.jpg"/>
                </div>
            <div className=" text-center md:text-left ml-0 pt-4 bg-orange-200">
                <h1>VERONICA DE FELICE</h1>
                <h2>Software Engineer</h2>
                <h3>South Florida</h3>
        
                <p className="description py-4 bg-amber-700">Hi There!I am a full stack Software Engineer, specialized in UX/UI Development. My ultimate goal is to create unparalleled designs for the most seamless user experience ever. Assisting clients in achieving their goals fills me with passion, and I approach every project with immense pride and dedication. Beyond work, I enjoy spending time outdoors and pursuing creative interests. Looking ahead, I am excited about the future of software engineering and confident in my ability to make a significant contribution to this ever-evolving field.</p>
            </div>
            </div>
                
                <h4 className="pt-4">MY TECH STACK:</h4>
                <div className="p-6 flex-col grid grid-cols-3 grid-rows-5 gap-6 justify-evenly justify-items-center">

                    <img src="/images/js.png" height="70" width="70" />
     
                     <img src="/images/react.png" height="70" width="70" />
      
                     <img  src="/images/type.png" height="70" width="70" />
       
                     <img src="/images/html.png" height="70" width="70"/>
       
                     <img src="/images/css.png" height="70" width="70"/>
   
                     <img src="/images/tailwind.png" height="70" width="70"/>
        
                     <img src="/images/figma.png" height="70" width="70"/>
    
                     <img src="/images/bootstrap.png" height="70" width="70"/>
        
                     <img src="/images/sass.png" height="70" width="70"/>
      
                     <img src="/images/mongodb.png" height="70" width="70"/>
    
                     <img src="/images/fire.png" height="70" width="70"/>
       
                     <img src="/images/aws.png" height="70" width="70"/>

                    
                     <img className="" src="/images/cloud.png" height="70" width="70"/>
                     
            
            </div>

        </section>
    )
}