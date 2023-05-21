
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App (){
    const unknown = {isFollowing: true} // Pasando objeto como props
    return(
        <div className='container-tw'>
            <TwitterFollowCard  isFollowing userName="java" >
                JavaLover777
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing userName="john">
                John China
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing userName="f3lip3l">
                Felipe Lora
            </TwitterFollowCard>
            <TwitterFollowCard  isFollowing={false} userName="deynox1">
                Pablito
            </TwitterFollowCard>
            <TwitterFollowCard {...unknown}>
                PCR-CODE-BEST
            </TwitterFollowCard>
        </div>
    );
}