import React from 'react'
import goodsQuotes from '../../assets/Quotes/GoodQuotes'
import './lightsidetext.css'

const LightSideText = () => {

    const numberGenerator = Math.floor(Math.random() * goodsQuotes.length)
    const quoteGenerator = goodsQuotes[numberGenerator].split(" ").map((el) => `${el.toString()} `).join("")

    console.log(goodsQuotes)
    return (
        <>
            <h1> <span> {`${quoteGenerator}`} </span></h1>
            <h4>
                <span style={{textIndent:"50px"}}>  In</span> <span>J. R. R.</span> <span>Tolkien's</span> <span>Middle-earth</span> <span>fiction,</span> <span>Man and Men </span> <span>denote</span> <span>humans,</span>  <span>whether</span> <span>male or female,</span> <span> in</span> <span>contrast </span> <span>to</span> <span>Elves,</span> <span>Dwarves,</span> <span>Orcs,</span> <span>and</span> <span>other</span> <span>humanoid</span> <span>races.</span> <span>Men</span> <span>are </span><span>described</span> <span>as</span> <span>the</span> <span>second
                </span> <span>or younger people,</span> <span>created</span> <span>after</span> <span>the </span><span>Elves,</span> <span>and</span> <span>differing</span> <span>from them</span> <span>in being mortal.</span> <span>Along</span> <span>with</span> <span>Ents</span> <span>and</span> <span>Dwarves,</span> <span>these</span> <span>are</span> <span>the</span> <span>"free peoples"</span> <span>of</span> <span>Middle-earth,</span> <span>differing</span> <span>from</span> <span>the</span> <span>enslaved</span> <span>peoples</span> <span>such </span><span>as</span><span> Orcs.</span> <br />
                <span style={{textIndent:"50px"}}>Tolkien</span> <span> uses</span> <span>the </span> <span>Men </span> <span>of</span> <span> Middle-earth,</span> <span>interacting</span> <span> with</span> <span>immortal</span> <span> Elves,</span> <span>to </span> <span>explore</span> <span> a variety </span> <span> of themes</span> <span>in The Lord of the Rings,</span> <span> especially death and immortality.</span> <span>This </span> <span>appears</span> <span>throughout,</span> <span> but </span> <span> is the central</span> <span>theme of an appendix,</span> <span> "The Tale of Aragorn</span> <span>and Arwen".</span> <span> Where</span> <span>the</span> <span> Hobbits</span> <span>stand</span> <span> for</span> <span>simple,</span> <span> earthbound,</span> <span>comfort-loving</span> <span> people,</span> <span>Men</span> <span>are</span> <span> far</span> <span>more</span> <span> varied,</span> <span>from</span> <span> petty</span> <span>villains</span> <span> and</span> <span>slow-witted</span> <span> publicans</span> <span>to</span> <span> the</span> <span>gentle</span> <span> warrior</span> <span>Faramir </span> <span>and </span> <span>the </span> <span>genuinely</span> <span>heroic</span> <span> Aragorn; </span> <span> Tolkien </span> <span> had</span> <span>wanted </span> <span>to</span> <span> create</span> <span>a heroic romance </span> <span>suitable</span> <span> for</span> <span>the</span> <span> modern age.</span> <span>Scholars</span> <span> have</span> <span>identified </span> <span>real-world</span> <span> analogues </span> <span> for</span> <span>each </span> <span>of </span> <span>the varied </span> <span> races of Men, whether</span> <span>from </span> <span>medieval </span> <span>times</span> <span>or </span> <span> classical antiquity.</span>
</h4>
</>
    )
}

export default LightSideText