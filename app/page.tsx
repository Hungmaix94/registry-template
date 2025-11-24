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
                <Wrapper title="Header (Default Variant)" name="header">
                    <Header logoText={mockHeaderData.simpleHeader.logoText} logoHref={mockHeaderData.simpleHeader.logoHref}
                            variant={mockHeaderData.simpleHeader.variant} navLinks={mockHeaderData.navLinks}
                            ctaButton={mockHeaderData.ctaButton}/>
                </Wrapper>
                <Wrapper title="StickyTopBar (Announcement Variant)" name="header">
                    <StickyTopBar {...mockStickyTopBarData.announcement} />
                </Wrapper>
                <Wrapper title="Hero Section (Default Variant)" name="hero-section">
                    <HeroSection {...mockHeroSectionData.default} />
                </Wrapper>

                <Wrapper title="Banner (Default Variant)" name="banner">
                    <Banner {...mockBannerData.default} />
                </Wrapper>

                <Wrapper title="Blog (Grid Layout)" name="blog">
                    <Blog {...mockBlogData} variant="grid"/>
                </Wrapper>

                <Wrapper title="Bundles (Grid Layout)" name="bundles">
                    <Bundles {...mockBundlesData} variant="grid"/>
                </Wrapper>

                <Wrapper title="Categories (Grid Layout)" name="categories">
                    <Categories {...mockCategoriesData} variant="grid"/>
                </Wrapper>
                <Wrapper title="Contact (Basic Form)" name="contact">
                    <Contact {...mockContactData} variant="basic-form"/>
                </Wrapper>
                <Wrapper title="Content (Text Only)" name="content">
                    <Content {...mockContentData.textOnly} />
                </Wrapper>
                <Wrapper title="Cart (Full View)" name="cart">
                    <Cart {...mockCartData.fullCart} />
                </Wrapper>
                <Wrapper title="Map (Single Marker)" name="map">
                    <MapComponent {...mockMapData.singleMarker} />
                </Wrapper>
                <Wrapper title="FAQ (Accordion)" name="faq">
                    <Faq {...mockFaqData.accordionFaq} />
                </Wrapper>
                <Wrapper title="Featured (Grid Layout)" name="featured">
                    <Featured {...mockFeaturedData.gridFeatured} />
                </Wrapper>
                <Wrapper title="Instagram (Simple Grid)" name="instagram">
                    <Instagram {...mockInstagramData} variant="grid-simple"/>
                </Wrapper>
                <Wrapper title="Product Detail (Standard)" name="product-detail">
                    <ProductDetail {...mockProductDetailData.standardProduct} />
                </Wrapper>
                <Wrapper title="Product List (Simple Grid)" name="product-list">
                    <ProductList {...mockProductListData} variant="grid-simple"/>
                </Wrapper>

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

                <Wrapper title="Sticky Top Bar (Announcement)" name="sticky-top-bar">
                    {/* Rendered outside main for proper sticking, but put here for demo context */}
                    <StickyTopBar {...mockStickyTopBarData.announcement} />
                </Wrapper>

                <Wrapper title="Subscribe Newsletter (Prominent Section)" name="subscribe-newsletter">
                    <SubscribeNewsletter {...mockSubscribeNewsletterData.prominentSection} />
                </Wrapper>

                <Wrapper title="Testimonial (Grid Layout)" name="testimonial">
                    <Testimonial {...mockTestimonialData} variant="grid"/>
                </Wrapper>
                <Wrapper title="Benefits & Trust (Icon List)" name="benefits-trust">
                    <BenefitsTrust {...mockBenefitsTrustData.iconList} />
                </Wrapper>

            </main>

            {/* Footer component */}
            <Footer {...mockFooterData.multiColumnFooter} navLinks={mockFooterData.multiColumnFooter.navLinks}
                    socialLinks={mockFooterData.multiColumnFooter.socialLinks}/>

        </div>
    )
}