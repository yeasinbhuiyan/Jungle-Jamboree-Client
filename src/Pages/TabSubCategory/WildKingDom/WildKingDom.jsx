import { useEffect, useState } from "react";
import WildKingCard from "./WildKingCard";


const WildKingDom = () => {
    const [wildKingdom, setWildKingDom] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/allToysTabs')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const filter = data.filter(df => df.subcategory === 'Wild Kingdom')
                    setWildKingDom(filter)
                    // console.log(filter)
                }
            }
            )

    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
            {
                wildKingdom && wildKingdom.map(wildKing => <WildKingCard key={wildKing._id} wildKing={wildKing}></WildKingCard>)
            }
        </div>
    );
};

export default WildKingDom;