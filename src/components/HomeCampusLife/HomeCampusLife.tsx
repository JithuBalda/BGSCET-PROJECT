// import './HomeCampusLife.css';
// import { campusLife } from '../../data/campusLifeData';

// function HomeCampusLife() {
//   return (
//     <section className="home-campus-life section-space">
//       <div className="container">

//         <div className="section-heading">
//           <h2>Campus Life</h2>
//           <span className="heading-line"></span>
//         </div>

//         <div className="campus-life-grid">

//           {campusLife.map((item, index) => (
//             <article
//               key={item.id}
//               className={`campus-life-card campus-life-card-${index + 1}`}
//             >
//               <img
//                 src={item.image}
//                 alt={item.alt}
//                 loading="lazy"
//               />
//             </article>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default HomeCampusLife;


import './HomeCampusLife.css';

import SectionHeading from '../common/SectionHeading';

import { campusLife } from '../../data/campusLifeData';

function HomeCampusLife() {
  return (
    <section className="home-campus-life section-space">
      <div className="container">

        <SectionHeading
          title="Campus Life"
          center
        />

        <div className="campus-life-grid">

          {campusLife.map((item, index) => (
            <article
              key={item.id}
              className={`campus-life-card campus-life-card-${index + 1}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
              />
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HomeCampusLife;