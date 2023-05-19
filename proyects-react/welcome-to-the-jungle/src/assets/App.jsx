
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App (){
    return(
        <div className='container-tw'>
            <TwitterFollowCard userName="java" name="Java Lover" />
            <TwitterFollowCard userName="john" name="John China" />
            <TwitterFollowCard userName="f3lip3l" name="Felipe Lora" />
            <TwitterFollowCard userName="deynox1" name= "Pablito" />
        </div>
    );
}