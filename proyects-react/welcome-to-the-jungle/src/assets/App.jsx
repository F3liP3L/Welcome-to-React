
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App (){
    const format = (userName) => `@${userName}`;
    return(
        <div className='container-tw'>
            <TwitterFollowCard formatUserName={format} isFollowing userName="java" name="Java Lover" />
            <TwitterFollowCard formatUserName={format} isFollowing userName="john" name="John China" />
            <TwitterFollowCard formatUserName={format} isFollowing userName="f3lip3l" name="Felipe Lora" />
            <TwitterFollowCard formatUserName={format} isFollowing={false} userName="deynox1" name= "Pablito" />
        </div>
    );
}