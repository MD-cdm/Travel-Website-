import React,{useEffect} from 'react'
import './main.css'
import {  HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from 'aos';
import "aos/dist/aos.css"
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import img10 from '../../Assets/img (10).jpg'
import img11 from '../../Assets/img (11).jpg'
import img12 from '../../Assets/img (12).jpg'
import img13 from '../../Assets/img (13).jpg'
import img14 from '../../Assets/img (14).jpg'
import img15 from '../../Assets/img (15).jpg'
import img16 from '../../Assets/img (16).jpg'
import img17 from '../../Assets/img (17).jpg'
import img18 from '../../Assets/img (18).jpg'
import img19 from '../../Assets/img (19).jpg'
import img20 from '../../Assets/img (20).jpg'
import img21 from '../../Assets/img (21).jpg'
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$490',
    description: 'The Taj Mahal, located in Agra, India, is an iconic white marble mausoleum built by the Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal.'
  },


  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Sri Nagar',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$420',
    description: 'Famously known as Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum.'
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Hill Mount',
    location: 'Italy',
    grade: 'TOURIST PLACE',
    fees: '$890',
    description: 'some alternatives to air conditioning that can help keep people cool without leading to a rise in emissions? Here are five examples from around the world.'
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Rani Ganj',
    location: 'Kolkata',
    grade: 'CULTURAL RELAX',
    fees: '$190',
    description: 'Air conditioning is a major contributor to climate change, and cities are looking for ways to keep cool without it. To good weather of all compare to the city.And we want to plz come for travel and enjoy your life.'
  },



  {
    id: 5,
    imgSrc: img5,
    destTitle: 'City Skyscrapers',
    location: 'Honkong',
    grade: 'Smart City',
    fees: '$999',
    description: 'The personnel reductions impact of pandemic on employees will affect about 7% of total personnel at the university, which is one of eight campuses in the Concordia University System, associated with The Lutheran Church Missouri Synod.'
  },




  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Chattanooga',
    location: 'Tennessee',
    grade: 'FOREST LAND SCAPE ',
    fees: '$849',
    description: 'The image captures the tranquility and natural beauty of the area, with the river and forest stretching into the distance, giving a sense of vastness and untouched nature. '
  },




  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Kasmir',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$414',
    description: 'Table Mountain National Park and offers some of the most iconic views of Cape Town and its surroundings, including the famous Table Mountain, Signal Hill, and the Atlantic coastline. Kashmir has a rich and diverse cultural heritage influenced by a mix of Hindu, Buddhist, and Islamic traditions.'
  },




  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Croatia',
    location: 'southern coast of the island ',
    grade: 'BEACH',
    fees: '$2100',
    description: 'one of the most famous beaches in Croatia, located on the southern coast of the island of Brač in the Adriatic Sea. Known as the "Golden Horn" or "Golden Cape," Zlatni Rat is a unique beach that juts out into the sea, forming a distinctive, narrow spit of land that changes shape and position depending on the wind and sea currents. '
  },




  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Ladhak',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$300',
    description: 'Ladakh is a region located in the northernmost part of India, nestled between the Kunlun mountain range in the north and the main Great Himalayas to the south. It is part of the Union Territory of Ladakh, which was formed in 2019 after the bifurcation of the state of Jammu and Kashmir.'
  },


  {
    id: 10,
    imgSrc: img10,
    destTitle: ' Western Ghats',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'green landscape with a waterfall cascading down a cliffside. Based on the appearance of the location, it seems to be a region with heavy vegetation and significant elevation changes, possibly in a tropical or subtropical area. The body of water visible in the distance and the steep terrain suggest it might be a popular natural attraction. '
  },


  {
    id: 11,
    imgSrc: img11,
    destTitle: ' Kelingking Beach',
    location: 'Indonesia',
    grade: 'BEACH',
    fees: '$700',
    description: 'This is a Kelingking Beach, located on the island of Nusa Penida in Indonesia.  heritage influenced by a mix of Hindu, Buddhist, and Islamic traditions. Kelingking Beach is one of the most famous and picturesque spots in Bali s nearby islands, known for its striking coastal cliffs that resemble the shape of a T-Rexs head, which is why it’s often referred.'
  },

  {
    id: 12,
    imgSrc: img12,
    destTitle: 'Nandi Hills',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$400',
    description: 'Nandi Hills, or Nandidurg, is a hill fortress in the south Indian state of Karnataka.  heritage influenced by a mix of Hindu, Buddhist, and Islamic traditions. Tipu Sultan Fort, a summer retreat of the namesake 18th-century ruler, features stone carvings and wall paintings. '
  },

  {
    id: 13,
    imgSrc: img13,
    destTitle: 'Toronto',
    location: 'Canada',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The most prominent feature in this image is the CN Tower, which is illuminated in red. The CN Tower stands 553.3 meters tall and was the worlds tallest free-standing structure and tower for 32 years until 2007.  heritage influenced by a mix of Hindu, Buddhist, and Islamic traditions. '
  },


  {
    id: 14,
    imgSrc: img14,
    destTitle: 'Scape City',
    location: 'USA',
    grade: 'TOURIST CITY',
    fees: '$3300',
    description: 'visitors were astonished at the beauty of the cliffs and  heritage influenced by a mix of Hindu, Buddhist, and Islamic traditions. recommended visiting at sunrise and sunset for spectacular photo ops. '
  },

  {
    id: 15,
    imgSrc: img15,
    destTitle: 'white chalk cliffs',
    location: 'Paris',
    grade: 'CULTURAL RELAX',
    fees: '$4400',
    description: 'These stunning white chalk cliffs have drawn people, especially artists, such as Claude Monet and Guy de Maupassant, to the area for eons. '
  },

  {
    id: 16,
    imgSrc: img16,
    destTitle: 'karnatak',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$230',
    description: 'These stunning white chalk cliffs have drawn people, especially artists, such as Claude Monet and Guy de Maupassant, to the area for eons. '
  },

  {
    id: 17,
    imgSrc: img17,
    destTitle: 'Goa',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$620',
    description: 'The article gives a brief introduction to the various beaches of Goa. This article ecompasses everything about Baga beach, Vagator beach, Candolim beach, Palolem beach, etc.'
  },

  {
    id: 18,
    imgSrc: img18,
    destTitle: 'Meghalaya',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$390',
    description: 'Meghalaya, nestled in the hills of the eastern sub-Himalayas, is a breathtaking state in Northeast India. Translated as the “abode of clouds” in Sanskrit, Meghalaya lives up to its name.'
  },
  {
    id: 19,
    imgSrc: img19,
    destTitle: 'Assam',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$390',
    description: 'Fica na praia de Iracema, damos uma parada rápida para fotografar, por ser lugar perigoso para expor os modelos Canon. '
  },
  {
    id: 20,
    imgSrc: img20,
    destTitle: 'Amritsar, Punjab ',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$266',
    description: 'The Golden Temple is a gurdwara located in the city of Amritsar, Punjab, India. It is the pre-eminent spiritual site of Sikhism.'
  },
  {
    id: 21,
    imgSrc: img21,
    destTitle: 'New Delhi',
    location: 'Indai',
    grade: 'CULTURAL RELAX',
    fees: '$289',
    description: 'The Lotus Temple is a Baháʼí House of Worship located in New Delhi, India. It was completed in December 1986. Notable for its lotus-like shape.'
  },

]

const Main = () => {

   //lets create a react hook to add a scroll
  //animation....
  useEffect(()=>{
    Aos.init ({duration:2000})
   },[])
 
  return (
    <section  className='main container section'>

      <div  className="secTitle">
        <h3 data-aos="fade-up"
         className="title">
          Most visited destinations
        </h3>
      </div>
      <div  className="secContent grid">
        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
            <div key={id} 
              className="singleDestination">
                <div  className="imageDiv">
                  <img  src={imgSrc} alt={destTitle} />
                </div>

                <div  data-aos="fade-up" className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>


                  <div  className="desc">
                    <p>{description}</p>
                  </div>


                  <button  className='btn flex'>
                         DETAILS<HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main


