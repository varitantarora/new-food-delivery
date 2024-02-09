import Restcard, { withPromotedlabel } from "./Restcard.js";
import Shimmering_ui from "./Shimmering_ui.js";
import rc from "../utlis/mockData.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import Useonlinestatus from "../utlis/Useonlinestatus.js"
import UserContext from "../utlis/UserContext.js";


const Body = () => {



  // //set user name
  // const { setuserName, loggedInUser } = useContext(UserContext);
  // // console.log(setuserName);


  // set variable defined inside the function
  const [listOfRest] = useState(rc.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  const [listOfFilteredrest, setlistOfFilteredrest] = useState(rc.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  const [topRatedRest, settopRatedRest] = useState("Top Rated Restaurants");
  const [searchText, setsearchText] = useState("");

  // //useEffect() for rendering and fetching api
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // //fetching data for useEffect hook
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6090035&lng=77.4466959&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   // console.log(
  //   //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  //   // );
  //   setlistOfRest(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setlistOfFilteredrest(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  // const location = useLocation();
  // console.log(location)
  //  // useEffect hook to reset filtered list when navigating to the Home route
  //  useEffect(() => {
  //   // Check if the current location is the Home route
  //   if (location.pathname === "/") {
  //     // Reset the filtered list to contain all restaurants
  //     setlistOfFilteredrest(listOfRest);
  //     // console.log(listOfFilteredrest)
  //   }
  // }, []); // Re-run effect when location or listOfRest changes


  //shimmering ui
  if (listOfFilteredrest.length === 0) {
    return <Shimmering_ui />;
  }

  //on click event handler for top rated rest.
  const handleTopRatedClick = () => {
    if (topRatedRest === "Top Rated Restaurants") {
      const Filterdlist = listOfRest.filter((res) => res.info.avgRating > 4);

      // console.log(Filterdlist);

      setlistOfFilteredrest(Filterdlist);
      settopRatedRest("All Restaurants"); // Update the button text
    } else {
      setlistOfFilteredrest(listOfRest);
      settopRatedRest("Top Rated Restaurants"); // Update the button text
    }

  };

  //online status
  const x = Useonlinestatus()
  if (x === false)
    return (
      <div>
        <h4 className="internetStatus"> you are offline !! </h4>
        <Shimmering_ui />
      </div>
    );

  const Restcardpromoted = withPromotedlabel(Restcard);



  return (
    <div className="Body">
      <div className="filter">
        {/* search bar */}
        <div className="search_btn ">
          {/* to update the ui with search bar, another state variable is needed, 
        the value is bounded to {searchText} , whenever we type something we want to update the searchText
        this is done by onCHange event handler */}

          <input
            type="text"
            className="searchbar"
            placeholder="Whats on your mind?!"
            value={searchText}
            //event handler
            onChange={(event) => {
              //onchange function
              setsearchText(event.target.value);
              // event -> it is the event which triggers on change, target ->element that triggers the event , value-> property of the input tag, on the basis of which we will say that an event has occured
            }}
          />
          <button
            className="srchbtn"
            //event handdler
            onClick={() => {
              //filter the restaurant and update the ui
              // console.log({ searchText });

              const filteredRestaurant = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(filteredRestaurant);
              setlistOfFilteredrest(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        {/* filtering on the basis of top rated rest. */}
        <button className="filter-btn" onClick={handleTopRatedClick}>
          {topRatedRest}
        </button>

        {/* input user name */}
        {/* <div className="Nameinputbox">
          <label className="Usernamebox"> Username: </label>
          <input
            className="inputBoxforname"
            type="text"
            placeholder="Enter name" 
            value = {loggedInUser}
            onChange={(e) => {
              setuserName(e.target.value)
            }}
            />
        </div> */}
      </div>

      <div className="rest-container">
        {listOfFilteredrest.map((res) => {
          //res is the name of the temporary parameter that helps in looping
          //resData is the name of the prop
          return (
            <Link
              key={res.info.id}
              to={"/restaurant/" + res.info.id}
              className="Restaurant_button"
            >
              {
                res.info.promoted ? <Restcardpromoted resData={res} /> : <Restcard resData={res} />
              }

            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
