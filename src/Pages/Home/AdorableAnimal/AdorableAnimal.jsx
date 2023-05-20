import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AdorableAnimalImg from "./AdorableAnimalImg";


const AdorableAnimal = () => {
    const [toysImg, setToysImg] = useState([])
    useEffect(() => {
        fetch('https://jungle-jamboree-server.vercel.app/allToysImg')
            .then(res => res.json())
            .then(data => setToysImg(data))

    }, [])
    return (
        <div data-aos="fade-up"  className="my-24">
            <h1 className="text-center text-3xl font-semibold">Adorable Animal Toys Collection</h1>
            <p className="text-center font-semibold w-[80%] my-5 text-sm mx-auto">Welcome to the enchanting world of the Adorable Animal Toys Collection! Prepare to be captivated by a delightful array of charming and cuddly creatures. In this carefully curated collection, you will discover a diverse selection of animal toys that are bound to bring joy and companionship to children and animal lovers alike. From plush pals that offer cozy hugs to safari safari toys that ignite imaginative adventures, from ocean wonders that transport you to underwater realms to feathered friends that celebrate the beauty of birds, our Adorable Animal Toys Collection has something for everyone. Get ready to embark on a whimsical journey filled with love, laughter, and endless playtime possibilities.</p>
            <Marquee pauseOnClick speed={70}>
                <div className="flex gap-5 m-10">
                    {
                      toysImg &&  toysImg.map(toy => <AdorableAnimalImg key={toy._id} toy={toy}></AdorableAnimalImg>)
                    }
                </div>
            </Marquee>

        </div>

    );
};

export default AdorableAnimal;