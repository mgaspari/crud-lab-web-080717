
import cuid from 'cuid';
export const cuidFn = cuid;
export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case "ADD_SPOT":
      let restaurant = Object.assign({}, action.restaurant, {id: cuid()})
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }
    case "DELETE_SPOT":
      let restaurants = state.restaurants.filter((rest) => rest.id !== action.id)
      let remReviews = state.reviews.filter((rev)=> rev.resId !== action.id)
      return { restaurants, reviews: remReviews  }
    case "REVIEW_SPOT":
      let review = Object.assign({}, action.review, {id: cuid()})
      return {restaurants: state.restaurants, reviews: state.reviews.concat(review)}
    case "DELETE_REVIEW":
      let reviews = state.reviews.filter((rev)=> rev.id !== action.id)
      return {restaurants: state.restaurants, reviews}
    default:
      return state
  }

}
