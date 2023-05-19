/* eslint-disable no-unused-vars */
import './twitterFollowCard.css'
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({userName, name, isFollowing}){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="javasiviris" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" width={150} height={200}/>
                <div className='tw-followCard-info'>
                    <strong>Java Lovers</strong>
                    <span className='tw-followCard-infoUserName'>@javalovers777</span>
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