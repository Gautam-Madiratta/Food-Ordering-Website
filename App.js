import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    info: {
      id: "405798",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "61955",
      avgRatingString: "4.4",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-26 22:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹149" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "3.9", ratingCount: "25" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-malleshwaram-rest405798",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "10575",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
      locality: "Richmond Town",
      areaName: "Shanti Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-27 01:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹100" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "4.1", ratingCount: "1.7K+" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-richmond-town-shanti-nagar-rest10575",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "23846",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/a543f9e4-cc95-47b6-a728-c8a8538cf7e5_23846.JPG",
      locality: "Rehinus Street",
      areaName: "Richmond Town",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "17K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-27 02:59:00", opened: true },
      badges: {
        imageBadges: [
          { imageId: "Rxawards/_CATEGORY-Pizza.png", description: "Delivery!" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "3.8", ratingCount: "2.3K+" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dominos-pizza-rehinus-street-richmond-town-rest23846",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "432976",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/0c0221a0-018a-4ef5-a4a4-e22ffe28aa95_432976.JPG",
      locality: "Double Road",
      areaName: "Shanti Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-26 23:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹2999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-double-road-shanti-nagar-rest432976",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "43836",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "25K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-27 02:45:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹209" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-ashok-nagar-rest43836",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "77949",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
      locality: "Gandhi Bazar",
      areaName: "Basavanagudi",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "32K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-26 23:59:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹59" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "580691",
      name: "Rollsking",
      cloudinaryImageId: "vzhxq7jvtpx1qllxdbpp",
      locality: "5th Block",
      areaName: "Koramangala",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "Rolls & Wraps", "North Indian", "Snacks"],
      avgRating: 4.3,
      parentId: "4697",
      avgRatingString: "4.3",
      totalRatingsString: "3.6K+",
      sla: {
        deliveryTime: 53,
        lastMileTravel: 6.7,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "6.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-27 09:00:00", opened: true },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹139" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: { aggregatedRating: { rating: "--" } },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/rollsking-5th-block-koramangala-rest580691",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "48230",
      name: "Kanti Sweets",
      cloudinaryImageId: "u0hhfifwmpsnobytv2yf",
      locality: "Brigade Road",
      areaName: "Central Bangalore",
      costForTwo: "₹150 for two",
      cuisines: ["Sweets"],
      avgRating: 4.7,
      parentId: "4700",
      avgRatingString: "4.7",
      totalRatingsString: "6.0K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-11-26 22:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: { rating: "4.1", ratingCount: "1.9K+" },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: { context: "seo-data-bc2a3b59-a4d1-4d7f-90dd-66de029fbb72" },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kanti-sweets-brigade-road-central-bangalore-rest48230",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  const { data } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = data?.info;
  const imageLink = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;
  return (
    <div className="res-card" style={{ backgroundColor: "lightgray" }}>
      <div className="res-logo">
        <img alt="res-logo" src={imageLink}></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantList.map((data) => {
          return (
            <div key={data.info.id}>
              <RestaurantCard data={data}></RestaurantCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
