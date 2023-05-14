import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import { MdLabel } from 'react-icons/md';
import "./about.css"

function About() {
  return (
    <div className='about'>
      <div className='about1'>
        <div >  <MdLabel color='#f2bb07' size="40px" /></div>
       <div style={{padding:"5px"}}><h2>ABOUT US</h2></div>
        </div>
        <div className='aboutgrid'>
          <div>
          <h1>More than  <span style={{ color: "#f2bb07", fontWeight: "bold" }}>30M+ People</span></h1>
      <h1>Are Happy With Us.</h1>
      <p  style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis doloremque explicabo hic reiciendis quod, ratione aperiam quibusdam qui ullam earum! Tenetur molestiae distinctio doloribus ullam non? Consequatur, aperiam ullam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores commodi reprehenderit sapiente, dicta sit accusamus reiciendis repellat animi nostrum? Quibusdam corporis fuga at mollitia reiciendis id quas quia nostrum totam.
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, provident voluptatem adipisci tenetur dolor maxime nisi sapiente ex et numquam deserunt quas cumque pariatur deleniti perferendis distinctio error rem dicta?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti incidunt aliquid, necessitatibus aperiam amet quas reiciendis ratione quibusdam laborum ipsa laboriosam nulla vel, sunt sit? Debitis qui earum iste neque?
        </p>
      </p>
     
      <p style={{textAlign:"justify",fontWeight:"bold"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe repudiandae excepturi beatae ex molestiae sapiente consequatur, necessitatibus, minus quod voluptate soluta harum! Molestiae, non. Laboriosam culpa nihil quas sequi obcaecati.</p>
      
          </div>
          <div>
          <img 
              alt={'feature image'}
              src={
                'https://img.freepik.com/free-photo/senior-marriage-using-laptop-living-room_329181-14680.jpg'
              }
               //style={{height:"auto"}}
              
            />
          </div>
        </div>
  

      {/* <div className="container" style={{border:"1px solid red"}}>
    <div className="row">
      <div className="col-md-6">
        <h2 style={{textAlign:"justify"}}>More than <span style={{ color: "#f2bb07" ,fontWeight:"bold"}}>30M+ People</span></h2>
        <h2 style={{textAlign:"justify"}}> Are Happy With Us.</h2>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus vel tortor hendrerit tincidunt. Nullam dignissim auctor mauris, eu consectetur justo. Ut in urna aliquet, bibendum elit id, semper elit. Sed ut urna eget sem molestie egestas.</p>
      <p  style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, debitis doloremque explicabo hic reiciendis quod, ratione aperiam quibusdam qui ullam earum! Tenetur molestiae distinctio doloribus ullam non? Consequatur, aperiam ullam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores commodi reprehenderit sapiente, dicta sit accusamus reiciendis repellat animi nostrum? Quibusdam corporis fuga at mollitia reiciendis id quas quia nostrum totam.
      </p>
      <p style={{textAlign:"justify",fontWeight:"bold"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe repudiandae excepturi beatae ex molestiae sapiente consequatur, necessitatibus, minus quod voluptate soluta harum! Molestiae, non. Laboriosam culpa nihil quas sequi obcaecati.</p>
      </div>
      <div className="col-md-6">
        <img className="img-fluid"
              alt={'feature image'}
              src={
                'https://img.freepik.com/free-photo/senior-marriage-using-laptop-living-room_329181-14680.jpg'
              }
               //style={{height:"auto"}}
              
            />
      
      </div>
    </div>
  </div> */}
    </div>
  );
}

export default About