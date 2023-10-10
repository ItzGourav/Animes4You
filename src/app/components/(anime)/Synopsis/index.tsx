import { animeT } from '@/types/indes'
import { Divider } from '@nextui-org/react'
import React from 'react'

export default function Synopsis({ anime }: { anime: animeT }) {
    return (
        <div className='bg-white/5 text-lg my-5 rounded-md'>
            <div className='p-3 font-semibold'>Synopsis for {anime?.name}</div>
            <Divider />
            <div className='p-3 text-sm text-white/70 '>
                It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.
                <br />
                <br />
                Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.
                <br />
                <br />
                [Written by MAL Rewrite]
            </div>

        </div>
    )
}
