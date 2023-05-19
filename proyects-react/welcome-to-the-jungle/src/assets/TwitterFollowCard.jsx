/* eslint-disable no-unused-vars */
import './twitterFollowCard.css'
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({userName, name, isFollowing, urlImage}){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="image" src={urlImage}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}