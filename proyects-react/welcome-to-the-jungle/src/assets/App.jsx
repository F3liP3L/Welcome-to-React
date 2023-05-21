
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App (){
    const unknown = {isFollowing: true} // Pasando objeto como props
    return(
        <div className='container-tw'>
            <TwitterFollowCard userName="java" >
                JavaLover777
            </TwitterFollowCard>
            <TwitterFollowCard userName="john">
                John China
            </TwitterFollowCard>
            <TwitterFollowCard userName="f3lip3l">
                Felipe Lora
            </TwitterFollowCard>
            <TwitterFollowCard userName="deynox1">
                Pablito
            </TwitterFollowCard>
            <TwitterFollowCard {...unknown}>
                PCR-CODE-BEST
            </TwitterFollowCard>
        </div>
    );
}