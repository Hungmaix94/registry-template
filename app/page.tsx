"use client"

import * as React from "react"
import {Button} from "@/registry/default-style/ui/button" // Added import
import Footer from "@/registry/default-style/blocks/footer/footer" // Added import
import {mockFooterData} from "@/registry/default-style/blocks/footer/mock-data" // Added import
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

                {/* Header components */}
                <Wrapper title="Header (Simple Variant)" name="header">
                    <Header {...mockHeaderData.simpleHeader} navLinks={mockHeaderData.navLinks} ctaButton={mockHeaderData.ctaButton} />
                </Wrapper>
                <Wrapper title="Header (Auth Search Variant)" name="header">
                    <Header {...mockHeaderData.authSearchHeader} navLinks={mockHeaderData.navLinks} />
                </Wrapper>
                <Wrapper title="Header (Centered Nav Variant)" name="header">
                    <Header {...mockHeaderData.centeredNavHeader} navLinks={mockHeaderData.navLinks} />
                </Wrapper>

                {/* Sticky Top Bar components */}
                <Wrapper title="Sticky Top Bar (Announcement Variant)" name="sticky-top-bar">
                    <StickyTopBar {...mockStickyTopBarData.announcement} />
                </Wrapper>
                <Wrapper title="Sticky Top Bar (Promotional Variant)" name="sticky-top-bar">
                    <StickyTopBar {...mockStickyTopBarData.promotional} />
                </Wrapper>
                <Wrapper title="Sticky Top Bar (Dismissible Timer Variant)" name="sticky-top-bar">
                    <StickyTopBar {...mockStickyTopBarData.dismissibleTimer} />
                </Wrapper>

                {/* Hero Section components */}
                <Wrapper title="Hero Section (Default Variant)" name="hero-section">
                    <HeroSection {...mockHeroSectionData.default} />
                </Wrapper>
                <Wrapper title="Hero Section (Centered Image Variant)" name="hero-section">
                    <HeroSection {...mockHeroSectionData.centeredImage} />
                </Wrapper>
                <Wrapper title="Hero Section (Hero Banner Variant)" name="hero-section">
                    <HeroSection {...mockHeroSectionData.heroBanner} />
                </Wrapper>

                {/* Banner components */}
                <Wrapper title="Banner (Default Variant)" name="banner">
                    <Banner {...mockBannerData.default} />
                </Wrapper>
                <Wrapper title="Banner (Compact Variant)" name="banner">
                    <Banner {...mockBannerData.compact} />
                </Wrapper>
                <Wrapper title="Banner (Full Width Variant)" name="banner">
                    <Banner {...mockBannerData["full-width"]} />
                </Wrapper>

                {/* Blog components */}
                <Wrapper title="Blog (Grid Layout)" name="blog">
                    <Blog {...mockBlogData} variant="grid" />
                </Wrapper>
                <Wrapper title="Blog (List Layout)" name="blog">
                    <Blog {...mockBlogData} variant="list" />
                </Wrapper>
                <Wrapper title="Blog (Carousel Layout)" name="blog">
                    <Blog {...mockBlogData} variant="carousel" />
                </Wrapper>

                {/* Bundles components */}
                <Wrapper title="Bundles (List Layout)" name="bundles">
                    <Bundles {...mockBundlesData} variant="list" />
                </Wrapper>
                <Wrapper title="Bundles (Grid Layout)" name="bundles">
                    <Bundles {...mockBundlesData} variant="grid" />
                </Wrapper>
                <Wrapper title="Bundles (Featured Layout)" name="bundles">
                    <Bundles {...mockBundlesData} variant="featured" />
                </Wrapper>

                {/* Categories components */}
                <Wrapper title="Categories (List Layout)" name="categories">
                    <Categories {...mockCategoriesData} variant="list" />
                </Wrapper>
                <Wrapper title="Categories (Grid Layout)" name="categories">
                    <Categories {...mockCategoriesData} variant="grid" />
                </Wrapper>
                <Wrapper title="Categories (Featured Layout)" name="categories">
                    <Categories {...mockCategoriesData} variant="featured" />
                </Wrapper>

                {/* Contact components */}
                <Wrapper title="Contact (Basic Form)" name="contact">
                    <Contact {...mockContactData} variant="basic-form" />
                </Wrapper>
                <Wrapper title="Contact (Form with Info)" name="contact">
                    <Contact {...mockContactData} variant="form-with-info" contactInfo={mockContactData.contactInfo} />
                </Wrapper>
                <Wrapper title="Contact (Form with Map)" name="contact">
                    <Contact {...mockContactData} variant="form-with-map" contactInfo={mockContactData.contactInfo} />
                </Wrapper>

                {/* Content components */}
                <Wrapper title="Content (Text Only)" name="content">
                    <Content {...mockContentData.textOnly} />
                </Wrapper>
                <Wrapper title="Content (Text with Image)" name="content">
                    <Content {...mockContentData.textWithImage} />
                </Wrapper>
                <Wrapper title="Content (Multi Column)" name="content">
                    <Content {...mockContentData.multiColumn} />
                </Wrapper>
                
                {/* Cart components */}
                <Wrapper title="Cart (Full View)" name="cart">
                    <Cart {...mockCartData.fullCart} />
                </Wrapper>
                <Wrapper title="Cart (Summary View)" name="cart">
                    <Cart {...mockCartData.summaryCart} />
                </Wrapper>
                <Wrapper title="Cart (Empty View)" name="cart">
                    <Cart {...mockCartData.emptyCart} />
                </Wrapper>

                {/* Map components */}
                <Wrapper title="Map (Single Marker)" name="map">
                    <MapComponent {...mockMapData.singleMarker} />
                </Wrapper>
                <Wrapper title="Map (Multiple Markers)" name="map">
                    <MapComponent {...mockMapData.multipleMarkers} />
                </Wrapper>
                <Wrapper title="Map (Route Area)" name="map">
                    <MapComponent {...mockMapData.routeArea} />
                </Wrapper>

                {/* FAQ components */}
                <Wrapper title="FAQ (List Faq)" name="faq">
                    <Faq {...mockFaqData.listFaq} />
                </Wrapper>
                <Wrapper title="FAQ (Accordion Faq)" name="faq">
                    <Faq {...mockFaqData.accordionFaq} />
                </Wrapper>
                <Wrapper title="FAQ (Categorized Faq)" name="faq">
                    <Faq {...mockFaqData.categorizedFaq} />
                </Wrapper>

                {/* Featured components */}
                <Wrapper title="Featured (Single Featured)" name="featured">
                    <Featured {...mockFeaturedData.singleFeatured} />
                </Wrapper>
                <Wrapper title="Featured (Grid Featured)" name="featured">
                    <Featured {...mockFeaturedData.gridFeatured} />
                </Wrapper>
                <Wrapper title="Featured (Carousel Featured)" name="featured">
                    <Featured {...mockFeaturedData.carouselFeatured} />
                </Wrapper>

                {/* Instagram components */}
                <Wrapper title="Instagram (Simple Grid)" name="instagram">
                    <Instagram {...mockInstagramData} variant="grid-simple" />
                </Wrapper>
                <Wrapper title="Instagram (Grid with Overlay)" name="instagram">
                    <Instagram {...mockInstagramData} variant="grid-overlay" />
                </Wrapper>
                <Wrapper title="Instagram (Carousel)" name="instagram">
                    <Instagram {...mockInstagramData} variant="carousel" />
                </Wrapper>
                
                {/* Product Detail components */}
                <Wrapper title="Product Detail (Standard)" name="product-detail">
                    <ProductDetail {...mockProductDetailData.standardProduct} />
                </Wrapper>
                <Wrapper title="Product Detail (Gallery Focused)" name="product-detail">
                    <ProductDetail {...mockProductDetailData.galleryProduct} />
                </Wrapper>
                <Wrapper title="Product Detail (With Reviews)" name="product-detail">
                    <ProductDetail {...mockProductDetailData.reviewsProduct} />
                </Wrapper>

                {/* Product List components */}
                <Wrapper title="Product List (Simple Grid)" name="product-list">
                    <ProductList {...mockProductListData} variant="grid-simple" />
                </Wrapper>
                <Wrapper title="Product List (Filterable List)" name="product-list">
                    <ProductList {...mockProductListData} variant="filterable-list" />
                </Wrapper>
                <Wrapper title="Product List (Featured Grid)" name="product-list">
                    <ProductList {...mockProductListData} variant="featured-grid" />
                </Wrapper>

                {/* Side Cart components */}
                <Wrapper title="Side Cart (Detailed Controls)" name="side-cart" className="min-h-[450px]">
                    <div className="flex items-center justify-center min-h-[400px] relative">
                        <Button onClick={() => setIsSideCartOpen(true)}>Open Side Cart</Button>
                        <SideCart
                            {...mockSideCartData.detailedCart}
                            isOpen={isSideCartOpen}
                            onClose={() => setIsSideCartOpen(false)}
                        />
                    </div>
                </Wrapper>
                <Wrapper title="Side Cart (Simple List)" name="side-cart" className="min-h-[450px]">
                    <div className="flex items-center justify-center min-h-[400px] relative">
                        <Button onClick={() => setIsSideCartOpen(true)}>Open Simple Cart</Button>
                        <SideCart
                            {...mockSideCartData.simpleCart}
                            isOpen={isSideCartOpen}
                            onClose={() => setIsSideCartOpen(false)}
                        />
                    </div>
                </Wrapper>
                <Wrapper title="Side Cart (Checkout Ready)" name="side-cart" className="min-h-[450px]">
                    <div className="flex items-center justify-center min-h-[400px] relative">
                        <Button onClick={() => setIsSideCartOpen(true)}>Open Checkout Cart</Button>
                        <SideCart
                            {...mockSideCartData.checkoutCart}
                            isOpen={isSideCartOpen}
                            onClose={() => setIsSideCartOpen(false)}
                        />
                    </div>
                </Wrapper>
                <Wrapper title="Side Cart (Empty Cart)" name="side-cart" className="min-h-[450px]">
                    <div className="flex items-center justify-center min-h-[400px] relative">
                        <Button onClick={() => setIsSideCartOpen(true)}>Open Empty Cart</Button>
                        <SideCart
                            {...mockSideCartData.emptyCart}
                            isOpen={isSideCartOpen}
                            onClose={() => setIsSideCartOpen(false)}
                        />
                    </div>
                </Wrapper>

                {/* Sticky Top Bar (Already handled above for convenience, adding other variants here) */}
                {/* Note: Sticky top bars are usually rendered at the very top of the layout,
                   but for demonstration purposes within Wrapper, they are placed here.
                   The "Announcement" variant is already shown above. */}
                <Wrapper title="Sticky Top Bar (Promotional Variant)" name="sticky-top-bar">
                    <StickyTopBar {...mockStickyTopBarData.promotional} />
                </Wrapper>
                <Wrapper title="Sticky Top Bar (Dismissible Timer Variant)" name="sticky-top-bar">
                    <StickyTopBar {...mockStickyTopBarData.dismissibleTimer} />
                </Wrapper>


                {/* Subscribe Newsletter components */}
                <Wrapper title="Subscribe Newsletter (Simple Inline)" name="subscribe-newsletter">
                    <SubscribeNewsletter {...mockSubscribeNewsletterData.simpleInline} />
                </Wrapper>
                <Wrapper title="Subscribe Newsletter (Prominent Section)" name="subscribe-newsletter">
                    <SubscribeNewsletter {...mockSubscribeNewsletterData.prominentSection} />
                </Wrapper>
                <Wrapper title="Subscribe Newsletter (Minimalist Icon)" name="subscribe-newsletter">
                    <SubscribeNewsletter {...mockSubscribeNewsletterData.minimalistIcon} />
                </Wrapper>
                
                {/* Testimonial components */}
                <Wrapper title="Testimonial (Single Testimonial)" name="testimonial">
                    <Testimonial {...mockTestimonialData} variant="single" testimonials={mockTestimonialData.testimonials.slice(0, 1)} />
                </Wrapper>
                <Wrapper title="Testimonial (Grid Testimonials)" name="testimonial">
                    <Testimonial {...mockTestimonialData} variant="grid" />
                </Wrapper>
                <Wrapper title="Testimonial (Carousel Testimonials)" name="testimonial">
                    <Testimonial {...mockTestimonialData} variant="carousel" />
                </Wrapper>

                {/* Benefits & Trust components */}
                <Wrapper title="Benefits & Trust (Icon List)" name="benefits-trust">
                    <BenefitsTrust {...mockBenefitsTrustData.iconList} />
                </Wrapper>
                <Wrapper title="Benefits & Trust (Trust Badges)" name="benefits-trust">
                    <BenefitsTrust {...mockBenefitsTrustData.trustBadges} />
                </Wrapper>
                <Wrapper title="Benefits & Trust (Detailed Benefit)" name="benefits-trust">
                    <BenefitsTrust {...mockBenefitsTrustData.detailedBenefit} />
                </Wrapper>

                {/* Footer components */}
                <Wrapper title="Footer (Simple Footer)" name="footer">
                    <Footer {...mockFooterData.simpleFooter} navLinks={mockFooterData.simpleFooter.navLinks} />
                </Wrapper>
                <Wrapper title="Footer (Multi Column Footer)" name="footer">
                    <Footer {...mockFooterData.multiColumnFooter} navLinks={mockFooterData.multiColumnFooter.navLinks} socialLinks={mockFooterData.multiColumnFooter.socialLinks} />
                </Wrapper>
                <Wrapper title="Footer (Newsletter Footer)" name="footer">
                    <Footer {...mockFooterData.newsletterFooter} />
                </Wrapper>

            </main>

            {/* Footer component */}
            <Footer {...mockFooterData.multiColumnFooter} navLinks={mockFooterData.multiColumnFooter.navLinks}
                    socialLinks={mockFooterData.multiColumnFooter.socialLinks}/>

        </div>
    )
}