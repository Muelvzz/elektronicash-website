interface Products {
  ProductTitle: string,
  ProductInfo: string,
  Img: string,
}

export interface Testimonials {
  TestimonialTitle: string,
  TestimonialContent: string,
  TestimonialUser: string,
}

export interface HomePageType {
  HeroInfo: string,
  AboutUsInfo: string,
  ProductsInfo: {
    Caption: string,
    ProductsList: Products[],
  },
  TestimonialsInfo: {
    Caption: string,
    TestimonialsList: Testimonials[],
  }
}