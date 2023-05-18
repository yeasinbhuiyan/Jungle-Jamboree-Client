import { useEffect, useState } from "react";
import GalleryImg from "./GalleryImg";
import Marquee from "react-fast-marquee";


const Gallery = () => {
    const [toysImg, setToysImg] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allToysImg')
            .then(res => res.json())
            .then(data => setToysImg(data))

    }, [])
    return (
        <div className="my-24">
            <h1 className="text-center text-3xl font-semibold">Adorable Animal Toys Collection</h1>
            <p className="text-center font-semibold w-[80%] my-5 text-sm mx-auto">Step into a world of enchantment and explore our captivating gallery of cuddly companions. Immerse yourself in a delightful showcase of the most lovable and huggable creatures you can imagine. From fluffy teddy bears to charming jungle creatures, our gallery is a treasure trove of joy and wonder. Each handcrafted toy is carefully designed to bring smiles and spark imagination. Whether you are searching for a faithful friend or a whimsical playmate, our Adorable Animal Collection is sure to capture your heart. Prepare to be enchanted as you browse through our gallery and discover the perfect furry companion for your little ones or the young at heart.</p>
            <Marquee pauseOnClick speed={70}>
                <div className="flex gap-5 m-10">
                    {
                      toysImg &&  toysImg.map(toy => <GalleryImg key={toy._id} toy={toy}></GalleryImg>)
                    }
                </div>
            </Marquee>

        </div>

    );
};

export default Gallery;