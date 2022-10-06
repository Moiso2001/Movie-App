import React from 'react'
import { useDispatch } from 'react-redux'									// Card Component :))
import styles from './index.module.css'										// Our "Card" is in charge to render the data from the API saved in our movie redux state, each card is being render in our ./Home/ component
import { addMovieFavorite, removeMovieFavorite } from '../../actions'
import { Link } from 'react-router-dom'
import {MdFavorite} from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'

export default function Card({title, id, year ,img, type}) {            // Card propeties from ./Home/ component which brings the data from 
																		// movie(redux-state), movie 

const dispatch = useDispatch()

  return (
<div className={styles.divCard}>
{/* Our component "Card" have a type argument, this "type" could be "fav" or a simple  
	undefined, this because this component could be render from our Home component or
	our Favorites component, if this was rendered by our home page the icon on the top 
	of the card should be a Fav icon with the addMovieFavorite(redux-action) and if 
	was rendered by our favorite component should have the delete button and the 
	removeMovieFavorite(redux-action), with this "type" we'll know if this would be render
	with the Fav or Delete method and icon.
*/}
			{type === 'fav' 
			? <div className={styles.divButton}>								 
				<MdFavorite className={styles.button} onClick={() => {
					dispatch(addMovieFavorite(id))
					}}/>
			  </div>         
			 : <div className={styles.divButton}>
				<TiDelete className={styles.button} onClick={() => dispatch(removeMovieFavorite(id))}/>
			   </div>
			}
	<Link 
		style={{ 													// Here would be just the rendering of the data
			textDecoration: "none", 								// as the name of the movie, the post image and etc
			color: 'whitesmoke'										// also with the Link tag wrapping all the divs without the 
			}} 														// Fav or Delete button, this link is routed to our Movie
		to={`/movie/${id}`}											// route, passing the ID (Movie component will have more documentation about it)
		>

      	<div className={styles.divImg}>
			<img className={styles.img} src={img}/>
		</div>

		<div className={styles.divFoot}>
			<div className={styles.divName}>
				<h3 className={styles.name}>{title}</h3>
			</div>
			<div className={styles.divYear}>
				<h4 className={styles.year}>{year}</h4>
			</div>
		</div>
	</Link>
</div>

  )
}
