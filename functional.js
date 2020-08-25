/*
 * TODO: Practice the use of map
 *
 * The ids function takes an array of Users.
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * The function ids receives an array of users
 * and it should return a list of ALL the ids of the users
 *
 * So: ids([{ firstName: "Pietje", id: 123 }, { firstName: "Hermientje", id: 124 }])
 * Should return: [123, 124]
 */

const ids = users => [];

/*
 * TODO: Practice the use of map part II
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * The function cartoons receives an array of users
 * and it should return an array of cartoons, one for each user
 */

const cartoons = users => [];

/*
 * TODO: Practice the use of map part III
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * The function names receives an array of users
 * and it should return an array of full names, one for each user
 */

const names = users => [];

/*
 * TODO: Practice the use of map part IV
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * The function cartoonify receives an array of users
 * and it should return an array of names. However, instead of just the first and last name
 * the user should also have a middle name. The middle name is the cartoon.
 *
 * So:
 *
 * cartoonify([{ firstName: "Pauline", lastName: "Kors", cartoon: "Lion King" }])
 * returns ["Pauline 'Lion King' Kors"]
 */

const cartoonify = users => [];

/*
 * TODO: Practice the use of find
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * Find the user whose favorite cartoon is MickeyMouse
 */

const findMickeyFan = users => {};


/*
 * TODO: Practice the use of findIndex
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * Find the position of the user whose favorite cartoon is Donald Duck
 */

const findIndexDonaldFan = users => -1;


/*
 * TODO: Practice the use of filter
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * Return all users that like Spons Bob
 */

const filterSponsBobbers = users => [];


/*
 * TODO: Practice the use of filter II
 *
 * A user is an object, that contains the following properties:
 *
 * - id: number
 * - firstName: string
 * - lastName: string
 * - age: number
 * - favoriteCartoon: string
 *
 * Your task:
 *
 * Return all users that have a favorite cartoon OTHER THAN "Spons Bob"
 */

const filterNonSponsBobbers = users => [];

module.exports = {
  cartoonify,
  cartoons,
  names,
  ids,
  filterNonSponsBobbers,
  filterSponsBobbers,
  findMickeyFan,
  findIndexDonaldFan,
}
