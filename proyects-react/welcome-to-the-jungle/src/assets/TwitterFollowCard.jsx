/* eslint-disable no-unused-vars */
import './twitterFollowCard.css'
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({formattedUserName, userName, name, isFollowing}){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="image" src= {`https://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formattedUserName}</span>
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