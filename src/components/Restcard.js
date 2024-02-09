

import { CDN_URL } from "../utlis/constant.js";

// const Restcard = (
//   { name,
//     cloudinaryImageId,
//     cuisines,
//     avgRating,
//     costForTwo,
//     deliveryTime,
//   }) => {

//   return (
//     <div className="res-card">
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src={
//           cloudinaryImageId
//         }
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(" , ")}</h4>
//       <h4> {avgRating} star</h4>
//       <h4>{costForTwo} FOR TWO </h4>
//       <h4> {deliveryTime} minutes </h4>
//     </div>
//   );
// };


const Restcard = ( props ) => {

  //console.log(props);

  const {resData} = props;

  //console.log(resData)
  const{
    name,
   cloudinaryImageId,
   cuisines,
   avgRating,
   costForTwo,
   sla,
  } = resData.info;

  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={ CDN_URL +
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <p>{cuisines.join(" , ")}</p>
        <h4> {avgRating} ⭐️ </h4>
        <h4>{costForTwo}  </h4>
        <h4> ⏰ {sla.slaString} </h4>
      </div>
    );
  };

  //higher order component
  // takes rest card as a input and returns another component

  export const withPromotedlabel = (Restcard) => {
    return (props) => {
         //this is the new component with the promoted label on top of it
      return (
        <div>
        <p className="PromotedLabel"> Promoted </p>
        <Restcard {...props} />
        </div>
      )
    }
  }
export default Restcard;