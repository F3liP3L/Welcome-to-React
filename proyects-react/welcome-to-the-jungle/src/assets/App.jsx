
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App (){
    const formatt = <span>@USERNAME</span>;
    return(
        <div className='container-tw'>
            <TwitterFollowCard formattedUserName={formatt} isFollowing userName="java" name="Java Lover" />
            <TwitterFollowCard formattedUserName={formatt} isFollowing userName="john" name="John China" />
            <TwitterFollowCard formattedUserName={formatt} isFollowing userName="f3lip3l" name="Felipe Lora" />
            <TwitterFollowCard formattedUserName={formatt} isFollowing={false} userName="deynox1" name= "Pablito" />
        </div>
    );
}