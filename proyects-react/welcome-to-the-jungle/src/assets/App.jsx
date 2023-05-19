
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';
export function App (){
    return(
        <>
            <TwitterFollowCard userName="javalover777" name="Java Lover" urlImage="https://res.cloudinary.com/teepublic/image/private/s--4M3PnU_p--/c_fit,g_north_west,h_920,w_671/co_ffffff,e_outline:41/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/t_watermark_lock/c_limit,f_jpg,h_630,q_90,w_630/v1607436695/production/designs/17067387_0.jpg" />
            <TwitterFollowCard userName="johnxhina" name="John China" urlImage="https://preview.redd.it/my4q5oe1xhz81.jpg?width=640&crop=smart&auto=webp&s=6714d10852bbea9b09bd187097ed9efee0488274" />

        </>
    );
}