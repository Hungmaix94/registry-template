"use client"

import * as React from "react"
import {Button} from "@/registry/default-style/ui/button"
import Footer from "@/registry/default-style/blocks/footer/footer"
import {mockFooterData} from "@/registry/default-style/blocks/footer/mock-data"
import Wrapper from "@/components/Wrapper";

// Import components and their mock data from the registry
import HeroSection from "@/registry/default-style/blocks/hero-section/hero-section"
import {mockHeroSectionData} from "@/registry/default-style/blocks/hero-section/mock-data"
import Banner from "@/registry/default-style/blocks/banner/banner"
import {mockBannerData} from "@/registry/default-style/blocks/banner/mock-data"
import Blog from "@/registry/default-style/blocks/blog/blog"
import {mockBlogData} from "@/registry/default-style/blocks/blog/mock-data"
import Bundles from "@/registry/default-style/blocks/bundles/bundles"
import {mockBundlesData} from "@/registry/default-style/blocks/bundles/mock-data"
import Categories from "@/registry/default-style/blocks/categories/categories"
import {mockCategoriesData} from "@/registry/default-style/blocks/categories/mock-data"
import Contact from "@/registry/default-style/blocks/contact/contact"
import {mockContactData} from "@/registry/default-style/blocks/contact/mock-data"
import Content from "@/registry/default-style/blocks/content/content"
import {mockContentData} from "@/registry/default-style/blocks/content/mock-data"
import Cart from "@/registry/default-style/blocks/cart/cart"
import {mockCartData} from "@/registry/default-style/blocks/cart/mock-data"
import MapComponent from "@/registry/default-style/blocks/map/map"
import {mockMapData} from "@/registry/default-style/blocks/map/mock-data"
import Faq from "@/registry/default-style/blocks/faq/faq"
import {mockFaqData} from "@/registry/default-style/blocks/faq/mock-data"
import Featured from "@/registry/default-style/blocks/featured/featured"
import {mockFeaturedData} from "@/registry/default-style/blocks/featured/mock-data"
import Header from "@/registry/default-style/blocks/header/header"
import {mockHeaderData} from "@/registry/default-style/blocks/header/mock-data"
import Instagram from "@/registry/default-style/blocks/instagram/instagram"
import {mockInstagramData} from "@/registry/default-style/blocks/instagram/mock-data"
import ProductDetail from "@/registry/default-style/blocks/product-detail/product-detail"
import {mockProductDetailData} from "@/registry/default-style/blocks/product-detail/mock-data"
import ProductList from "@/registry/default-style/blocks/product-list/product-list"
import {mockProductListData} from "@/registry/default-style/blocks/product-list/mock-data"
import SideCart from "@/registry/default-style/blocks/side-cart/side-cart"
import {mockSideCartData} from "@/registry/default-style/blocks/side-cart/mock-data"
import StickyTopBar from "@/registry/default-style/blocks/sticky-top-bar/sticky-top-bar"
import {mockStickyTopBarData} from "@/registry/default-style/blocks/sticky-top-bar/mock-data"
import SubscribeNewsletter from "@/registry/default-style/blocks/subscribe-newsletter/subscribe-newsletter"
import {mockSubscribeNewsletterData} from "@/registry/default-style/blocks/subscribe-newsletter/mock-data"
import Testimonial from "@/registry/default-style/blocks/testimonial/testimonial"
import {mockTestimonialData} from "@/registry/default-style/blocks/testimonial/mock-data"
import BenefitsTrust from "@/registry/default-style/blocks/benefits-trust/benefits-trust"
import {mockBenefitsTrustData} from "@/registry/default-style/blocks/benefits-trust/mock-data"
import Carousel from "@/registry/default-style/blocks/carousel/carousel";
import {carouselItems} from "@/registry/default-style/blocks/carousel/mock-data";


export default function Home() {
    const [isSideCartOpen, setIsSideCartOpen] = React.useState(false);

    return (
        <div className="max-w-7xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
            <main className="flex flex-col flex-1 gap-8">
                <header className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight">Custom Registry Components Demo</h1>
                    <p className="text-muted-foreground">
                        A custom registry for distributing code using shadcn. Below are examples of components from the
                        registry.
                    </p>
                </header>

                <Wrapper title="Header" name="header">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Simple Variant</h2>
                            <Header {...mockHeaderData.simpleHeader} navLinks={mockHeaderData.navLinks} ctaButton={mockHeaderData.ctaButton} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Auth Search Variant</h2>
                            <Header {...mockHeaderData.authSearchHeader} navLinks={mockHeaderData.navLinks} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Centered Nav Variant</h2>
                            <Header {...mockHeaderData.centeredNavHeader} navLinks={mockHeaderData.navLinks} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Sticky Top Bar" name="sticky-top-bar">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Announcement Variant</h2>
                            <StickyTopBar {...mockStickyTopBarData.announcement} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Promotional Variant</h2>
                            <StickyTopBar {...mockStickyTopBarData.promotional} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Dismissible Timer Variant</h2>
                            <StickyTopBar {...mockStickyTopBarData.dismissibleTimer} />
                        </div>
                    </div>
                </Wrapper>
                <Wrapper title="Carousel" name="carousel">
                    <Carousel items={carouselItems} showIndicators={false} />
                </Wrapper>

                <Wrapper title="Hero Section" name="hero-section">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Default Variant</h2>
                            <HeroSection {...mockHeroSectionData.default} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Centered Image Variant</h2>
                            <HeroSection {...mockHeroSectionData.centeredImage} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Hero Banner Variant</h2>
                            <HeroSection {...mockHeroSectionData.heroBanner} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Banner" name="banner">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Default Variant</h2>
                            <Banner {...mockBannerData.default} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Compact Variant</h2>
                            <Banner {...mockBannerData.compact} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Full Width Variant</h2>
                            <Banner {...mockBannerData["full-width"]} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Blog" name="blog">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Grid Layout</h2>
                            <Blog {...mockBlogData} variant="grid" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">List Layout</h2>
                            <Blog {...mockBlogData} variant="list" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Carousel Layout</h2>
                            <Blog {...mockBlogData} variant="carousel" />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Bundles" name="bundles">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">List Layout</h2>
                            <Bundles {...mockBundlesData} variant="list" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Grid Layout</h2>
                            <Bundles {...mockBundlesData} variant="grid" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Featured Layout</h2>
                            <Bundles {...mockBundlesData} variant="featured" />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Categories" name="categories">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">List Layout</h2>
                            <Categories {...mockCategoriesData} variant="list" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Grid Layout</h2>
                            <Categories {...mockCategoriesData} variant="grid" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Featured Layout</h2>
                            <Categories {...mockCategoriesData} variant="featured" />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Contact" name="contact">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Basic Form</h2>
                            <Contact {...mockContactData} variant="basic-form" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Form with Info</h2>
                            <Contact {...mockContactData} variant="form-with-info" contactInfo={mockContactData.contactInfo} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Form with Map</h2>
                            <Contact {...mockContactData} variant="form-with-map" contactInfo={mockContactData.contactInfo} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Content" name="content">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Text Only</h2>
                            <Content {...mockContentData.textOnly} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Text with Image</h2>
                            <Content {...mockContentData.textWithImage} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Multi Column</h2>
                            <Content {...mockContentData.multiColumn} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Cart" name="cart">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Full View</h2>
                            <Cart {...mockCartData.fullCart} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Summary View</h2>
                            <Cart {...mockCartData.summaryCart} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Empty View</h2>
                            <Cart {...mockCartData.emptyCart} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Map" name="map">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Single Marker</h2>
                            <MapComponent {...mockMapData.singleMarker} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Multiple Markers</h2>
                            <MapComponent {...mockMapData.multipleMarkers} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Route Area</h2>
                            <MapComponent {...mockMapData.routeArea} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="FAQ" name="faq">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">List Faq</h2>
                            <Faq {...mockFaqData.listFaq} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Accordion Faq</h2>
                            <Faq {...mockFaqData.accordionFaq} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Categorized Faq</h2>
                            <Faq {...mockFaqData.categorizedFaq} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Featured" name="featured">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Single Featured</h2>
                            <Featured {...mockFeaturedData.singleFeatured} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Grid Featured</h2>
                            <Featured {...mockFeaturedData.gridFeatured} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Carousel Featured</h2>
                            <Featured {...mockFeaturedData.carouselFeatured} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Instagram" name="instagram">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Simple Grid</h2>
                            <Instagram {...mockInstagramData} variant="grid-simple" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Grid with Overlay</h2>
                            <Instagram {...mockInstagramData} variant="grid-overlay" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Carousel</h2>
                            <Instagram {...mockInstagramData} variant="carousel" />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Product Detail" name="product-detail">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Standard</h2>
                            <ProductDetail {...mockProductDetailData.standardProduct} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Gallery Focused</h2>
                            <ProductDetail {...mockProductDetailData.galleryProduct} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">With Reviews</h2>
                            <ProductDetail {...mockProductDetailData.reviewsProduct} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Product List" name="product-list">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Simple Grid</h2>
                            <ProductList {...mockProductListData} variant="grid-simple" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Filterable List</h2>
                            <ProductList {...mockProductListData} variant="filterable-list" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Featured Grid</h2>
                            <ProductList {...mockProductListData} variant="featured-grid" />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Side Cart" name="side-cart" className="min-h-[450px]">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-center min-h-[400px] relative">
                            <Button onClick={() => setIsSideCartOpen(true)}>Open Side Cart</Button>
                            <SideCart
                                {...mockSideCartData.detailedCart}
                                isOpen={isSideCartOpen}
                                onClose={() => setIsSideCartOpen(false)}
                            />
                        </div>
                        <div className="flex items-center justify-center min-h-[400px] relative">
                            <Button onClick={() => setIsSideCartOpen(true)}>Open Simple Cart</Button>
                            <SideCart
                                {...mockSideCartData.simpleCart}
                                isOpen={isSideCartOpen}
                                onClose={() => setIsSideCartOpen(false)}
                            />
                        </div>
                        <div className="flex items-center justify-center min-h-[400px] relative">
                            <Button onClick={() => setIsSideCartOpen(true)}>Open Checkout Cart</Button>
                            <SideCart
                                {...mockSideCartData.checkoutCart}
                                isOpen={isSideCartOpen}
                                onClose={() => setIsSideCartOpen(false)}
                            />
                        </div>
                        <div className="flex items-center justify-center min-h-[400px] relative">
                            <Button onClick={() => setIsSideCartOpen(true)}>Open Empty Cart</Button>
                            <SideCart
                                {...mockSideCartData.emptyCart}
                                isOpen={isSideCartOpen}
                                onClose={() => setIsSideCartOpen(false)}
                            />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Subscribe Newsletter" name="subscribe-newsletter">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Simple Inline</h2>
                            <SubscribeNewsletter {...mockSubscribeNewsletterData.simpleInline} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Prominent Section</h2>
                            <SubscribeNewsletter {...mockSubscribeNewsletterData.prominentSection} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Minimalist Icon</h2>
                            <SubscribeNewsletter {...mockSubscribeNewsletterData.minimalistIcon} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Testimonial" name="testimonial">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Single Testimonial</h2>
                            <Testimonial {...mockTestimonialData} variant="single" testimonials={mockTestimonialData.testimonials.slice(0, 1)} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Grid Testimonials</h2>
                            <Testimonial {...mockTestimonialData} variant="grid" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Carousel Testimonials</h2>
                            <Testimonial {...mockTestimonialData} variant="carousel" />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Benefits & Trust" name="benefits-trust">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Icon List</h2>
                            <BenefitsTrust {...mockBenefitsTrustData.iconList} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Trust Badges</h2>
                            <BenefitsTrust {...mockBenefitsTrustData.trustBadges} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Detailed Benefit</h2>
                            <BenefitsTrust {...mockBenefitsTrustData.detailedBenefit} />
                        </div>
                    </div>
                </Wrapper>

                <Wrapper title="Footer" name="footer">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Simple Footer</h2>
                            <Footer {...mockFooterData.simpleFooter} navLinks={mockFooterData.simpleFooter.navLinks} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Multi Column Footer</h2>
                            <Footer {...mockFooterData.multiColumnFooter} navLinks={mockFooterData.multiColumnFooter.navLinks} socialLinks={mockFooterData.multiColumnFooter.socialLinks} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Newsletter Footer</h2>
                            <Footer {...mockFooterData.newsletterFooter} />
                        </div>
                    </div>
                </Wrapper>
            </main>
        </div>
    )
}
