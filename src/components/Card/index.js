import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './index.module.css'
import { addMovieFavorite, removeMovieFavorite } from '../../actions'
import { Link } from 'react-router-dom'
import {MdFavorite} from 'react-icons/md'
import { TiDelete } from 'react-icons/ti'

export default function Card({title, id, year ,img, type}) {

const dispatch = useDispatch()

  return (
    <div className={styles.divCard}>
        {type === 'fav' ? 
        <div className={styles.divButton}>
            <MdFavorite className={styles.button} onClick={() => dispatch(addMovieFavorite(id))}/>
        </div>          : 
        <div className={styles.divButton}>
            <TiDelete className={styles.button} onClick={() => dispatch(removeMovieFavorite(id))}/>
        </div>}

      	<div className={styles.divImg}>
			<img className={styles.img} src={img}/>
		</div>

		<div className={styles.divFoot}>
			<div className={styles.divName}>
				<Link 
				style={{ 
					textDecoration: "none", 
					color: 'whitesmoke'
					}} 
				to={`/movie/${id}`}>
				<h3 className={styles.name}>{title}</h3>
				</Link>
			</div>
			<div className={styles.divYear}>
				<h4 className={styles.year}>{year}</h4>
			</div>
		</div>

    </div>
  )
}
