"use client"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "../BurgerCard/BurgerCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BookList = () => {
  return (
    <div className="pt-[3rem] pb-[3rem]" id="menu">
      <h1 className="heading">
       <span className="text-red-500">Menú</span>
      </h1>

      <div className="w-[80%] mt-[4rem] mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          infinite
          itemClass="item"
          showDots={false}
          responsive={responsive}
        >

                 {/* book card */}   
                 <BookCard title="Ultra Burger" image="/images/b1.png"  reviews="6" price="299.99$" />
                 <BookCard title="Doble Burger" image="/images/b2.png"  reviews="6" price="169.99$" />
                 <BookCard title="Clasica Burger" image="/images/b3.png"  reviews="6" price="119.99$" />
                 <BookCard title="Simple Burger" image="/images/b4.png"  reviews="6" price="99.99$" />
                 <BookCard title="Insta Bruger" image="/images/b5.png"  reviews="6" price="149.99$" />
                 <BookCard title="Cheddar Burger" image="/images/b6.png"  reviews="6" price="259.99$" />
                 <BookCard title="Cebolla Burger" image="/images/b7.png"  reviews="6" price="219.99$" />
                 <BookCard title="Bacon Burger" image="/images/b8.png"  reviews="6" price="249.99$" />
   
          
        </Carousel>
      </div>
    </div>
  );
};

export default BookList;
