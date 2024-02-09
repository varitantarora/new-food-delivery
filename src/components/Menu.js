import Useonlinestatus from "../utlis/Useonlinestatus";
import Shimmering_ui from "./Shimmering_ui";
import Categoryrest from "./Categoryrest"
const Menu = () => {

  
   //online status
   const x = Useonlinestatus()
   if (x === false) 
   return (
   <div>
     <h4 className="internetStatus"> you are offline !! </h4>
     <Shimmering_ui />
   </div>
   );
 
  return (
    <div className="menu-page">
      <h3>Menu - Restaurant</h3>
      {/* adding accordion */}
      {/* it will contain heading and body */}
      < Categoryrest />
      
    </div>
  );
};

export default Menu;
