import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            // src="https://help.servmask.com/wp-content/uploads/2018/06/newbannerhelp_1200_AMA-S3_FINAL-01-01.png"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />
            <div className="home__row">
                <Product
                id="12345671"
                title="Cracking the Coding Interview"
                price={419}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61mIq2iJUXL.jpg"
                />
                <Product
                id="12345672"
                title="Apple iPhone 12 256 GB, Black"
                price={94900}
                rating={4}
                image="https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901538-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTMwMTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDYzL2hlNy85NDA3NzQ4ODY2MDc4LmpwZ3w2YWQ3ZDg2MjYzYTg4NzJiNDNkMjQ0ZWUzZmJjZjcwMzhlYzExNmNlMzQ2YjhjOThlNTg5ZjVhN2M1NDQ2YjZj"
                />
            </div>
            <div className="home__row">
                <Product
                id="12345673"
                title="Asus VivoBook 14 Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home)"
                price={55990}
                rating={5}
                image="https://rukminim1.flixcart.com/image/416/416/k91o6fk0/computer/k/8/h/asus-original-imafqxfewfakvj64.jpeg?q=70"
                />
                <Product
                id="12345674"
                title="Redmi Note 7 Pro (Neptune Blue, 128 GB, 6 GB RAM)"
                price={10999}
                rating={5}
                image="https://vlebazaar.in/image/cache/catalog//-Redmi-Note-7-Pro-Neptune-Blue-128-GB-6-GB-RAM/-Redmi-Note-7-Pro-Neptune-Blue-128-GB-6-GB-RAM-550x550h.jpg"
                />
                <Product
                id="12345675"
                title="Mi 4X 125.7 cm (50) Ultra HD (4K) LED Smart Android TV"
                price={31999}
                rating={4}
                image="https://rukminim1.flixcart.com/image/416/416/kc54ivk0/television/y/c/u/mi-l50m5-5ain-original-imaftc5fzuhfdvzm.jpeg?q=70"
                />
            </div>
            <div className="home__row">
                <Product
                id="12345676"
                title="Denim Shirts Men Casual Shirt Long Sleeve Fashion Slim Cotton"
                price={1160}
                rating={3}
                image="https://ae01.alicdn.com/kf/HTB1Q36COFXXXXX6apXXq6xXFXXXd/Denim-Shirts-Men-Casual-Shirt-Long-Sleeve-Fashion-Slim-Cotton-Brand-Designer-Men-s-Shirt-Turn.jpg"
                />
            </div>

        </div>
    )
}

export default Home;
