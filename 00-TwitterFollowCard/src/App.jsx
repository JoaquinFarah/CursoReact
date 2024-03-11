import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    
    return(
        <section className='App'>

            <TwitterFollowCard isFollowing userName="pheralb">
            Pablo Hernandez
            </TwitterFollowCard> 

            <TwitterFollowCard isFollowing userName="kaneda1204">
            Joaquin Farah
            </TwitterFollowCard>

        </section>
    )
}