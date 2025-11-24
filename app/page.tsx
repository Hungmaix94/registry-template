"use client"

import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { Button } from "@/registry/default-style/ui/button" // Added import
import Footer from "@/registry/default-style/blocks/footer/footer" // Added import
import { mockFooterData } from "@/registry/default-style/blocks/footer/mock-data" // Added import

// Import components and their mock data from the registry

import HeroSection from "@/registry/default-style/blocks/hero-section/hero-section"
import { mockHeroSectionData } from "@/registry/default-style/blocks/hero-section/mock-data"

import Banner from "@/registry/default-style/blocks/banner/banner"
import { mockBannerData } from "@/registry/default-style/blocks/banner/mock-data"

import Blog from "@/registry/default-style/blocks/blog/blog"
import { mockBlogData } from "@/registry/default-style/blocks/blog/mock-data"

import Bundles from "@/registry/default-style/blocks/bundles/bundles"
import { mockBundlesData } from "@/registry/default-style/blocks/bundles/mock-data"

import Categories from "@/registry/default-style/blocks/categories/categories"
import { mockCategoriesData } from "@/registry/default-style/blocks/categories/mock-data"

import Contact from "@/registry/default-style/blocks/contact/contact"
import { mockContactData } from "@/registry/default-style/blocks/contact/mock-data"

import Content from "@/registry/default-style/blocks/content/content"
import { mockContentData } from "@/registry/default-style/blocks/content/mock-data"

import Cart from "@/registry/default-style/blocks/cart/cart"
import { mockCartData } from "@/registry/default-style/blocks/cart/mock-data"

import MapComponent from "@/registry/default-style/blocks/map/map"
import { mockMapData } from "@/registry/default-style/blocks/map/mock-data"

import Faq from "@/registry/default-style/blocks/faq/faq"
import { mockFaqData } from "@/registry/default-style/blocks/faq/mock-data"

import Featured from "@/registry/default-style/blocks/featured/featured"
import { mockFeaturedData } from "@/registry/default-style/blocks/featured/mock-data"

import Header from "@/registry/default-style/blocks/header/header"
import { mockHeaderData } from "@/registry/default-style/blocks/header/mock-data"

import Instagram from "@/registry/default-style/blocks/instagram/instagram"
import { mockInstagramData } from "@/registry/default-style/blocks/instagram/mock-data"

import ProductDetail from "@/registry/default-style/blocks/product-detail/product-detail"
import { mockProductDetailData } from "@/registry/default-style/blocks/product-detail/mock-data"

import ProductList from "@/registry/default-style/blocks/product-list/product-list"
import { mockProductListData } from "@/registry/default-style/blocks/product-list/mock-data"

import SideCart from "@/registry/default-style/blocks/side-cart/side-cart"
import { mockSideCartData } from "@/registry/default-style/blocks/side-cart/mock-data"

import StickyTopBar from "@/registry/default-style/blocks/sticky-top-bar/sticky-top-bar"
import { mockStickyTopBarData } from "@/registry/default-style/blocks/sticky-top-bar/mock-data"

import SubscribeNewsletter from "@/registry/default-style/blocks/subscribe-newsletter/subscribe-newsletter"
import { mockSubscribeNewsletterData } from "@/registry/default-style/blocks/subscribe-newsletter/mock-data"

import Testimonial from "@/registry/default-style/blocks/testimonial/testimonial"
import { mockTestimonialData } from "@/registry/default-style/blocks/testimonial/mock-data"

import BenefitsTrust from "@/registry/default-style/blocks/benefits-trust/benefits-trust"
import { mockBenefitsTrustData } from "@/registry/default-style/blocks/benefits-trust/mock-data"


export default function Home() {
  const [isSideCartOpen, setIsSideCartOpen] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      {/* Header component */}
      <Header logoText={mockHeaderData.simpleHeader.logoText} logoHref={mockHeaderData.simpleHeader.logoHref} variant={mockHeaderData.simpleHeader.variant} navLinks={mockHeaderData.navLinks} ctaButton={mockHeaderData.ctaButton} />

      <StickyTopBar {...mockStickyTopBarData.announcement} />

      <main className="flex flex-col flex-1 gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Custom Registry Components Demo</h1>
          <p className="text-muted-foreground">
            A custom registry for distributing code using shadcn. Below are examples of components from the registry.
          </p>
        </header>



        {/* Hero Section */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Hero Section (Default Variant)</h2>
            <OpenInV0Button name="hero-section" className="w-fit" />
          </div>
          <HeroSection {...mockHeroSectionData.default} />
        </div>

        {/* Banner */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Banner (Default Variant)</h2>
            <OpenInV0Button name="banner" className="w-fit" />
          </div>
          <Banner {...mockBannerData.default} />
        </div>

        {/* Blog */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Blog (Grid Layout)</h2>
            <OpenInV0Button name="blog" className="w-fit" />
          </div>
          <Blog {...mockBlogData} variant="grid" />
        </div>

        {/* Bundles */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Bundles (Grid Layout)</h2>
            <OpenInV0Button name="bundles" className="w-fit" />
          </div>
          <Bundles {...mockBundlesData} variant="grid" />
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Categories (Grid Layout)</h2>
            <OpenInV0Button name="categories" className="w-fit" />
          </div>
          <Categories {...mockCategoriesData} variant="grid" />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Contact (Basic Form)</h2>
            <OpenInV0Button name="contact" className="w-fit" />
          </div>
          <Contact {...mockContactData} variant="basic-form" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Content (Text Only)</h2>
            <OpenInV0Button name="content" className="w-fit" />
          </div>
          <Content {...mockContentData.textOnly} />
        </div>
        
        {/* Cart */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Cart (Full View)</h2>
            <OpenInV0Button name="cart" className="w-fit" />
          </div>
          <Cart {...mockCartData.fullCart} />
        </div>

        {/* Map */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Map (Single Marker)</h2>
            <OpenInV0Button name="map" className="w-fit" />
          </div>
          <MapComponent {...mockMapData.singleMarker} />
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">FAQ (Accordion)</h2>
            <OpenInV0Button name="faq" className="w-fit" />
          </div>
          <Faq {...mockFaqData.accordionFaq} />
        </div>

        {/* Featured */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Featured (Grid Layout)</h2>
            <OpenInV0Button name="featured" className="w-fit" />
          </div>
          <Featured {...mockFeaturedData.gridFeatured} />
        </div>

        {/* Instagram */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Instagram (Simple Grid)</h2>
            <OpenInV0Button name="instagram" className="w-fit" />
          </div>
          <Instagram {...mockInstagramData} variant="grid-simple" />
        </div>
        
        {/* Product Detail */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Product Detail (Standard)</h2>
            <OpenInV0Button name="product-detail" className="w-fit" />
          </div>
          <ProductDetail {...mockProductDetailData.standardProduct} />
        </div>

        {/* Product List */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Product List (Simple Grid)</h2>
            <OpenInV0Button name="product-list" className="w-fit" />
          </div>
          <ProductList {...mockProductListData} variant="grid-simple" />
        </div>

        {/* Side Cart (needs a toggle button) */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Side Cart (Detailed Controls)</h2>
            <OpenInV0Button name="side-cart" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Button onClick={() => setIsSideCartOpen(true)}>Open Side Cart</Button>
            <SideCart
              {...mockSideCartData.detailedCart}
              isOpen={isSideCartOpen}
              onClose={() => setIsSideCartOpen(false)}
            />
          </div>
        </div>

        {/* Sticky Top Bar (needs to be at top, placed here for demo) */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Sticky Top Bar (Announcement)</h2>
            <OpenInV0Button name="sticky-top-bar" className="w-fit" />
          </div>
          {/* Rendered outside main for proper sticking, but put here for demo context */}
          <StickyTopBar {...mockStickyTopBarData.announcement} />
        </div>

        {/* Subscribe Newsletter */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Subscribe Newsletter (Prominent Section)</h2>
            <OpenInV0Button name="subscribe-newsletter" className="w-fit" />
          </div>
          <SubscribeNewsletter {...mockSubscribeNewsletterData.prominentSection} />
        </div>
        
        {/* Testimonial */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Testimonial (Grid Layout)</h2>
            <OpenInV0Button name="testimonial" className="w-fit" />
          </div>
          <Testimonial {...mockTestimonialData} variant="grid" />
        </div>

        {/* Benefits & Trust */}
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">Benefits & Trust (Icon List)</h2>
            <OpenInV0Button name="benefits-trust" className="w-fit" />
          </div>
          <BenefitsTrust {...mockBenefitsTrustData.iconList} />
        </div>

      </main>

      {/* Footer component */}
      <Footer {...mockFooterData.multiColumnFooter} navLinks={mockFooterData.multiColumnFooter.navLinks} socialLinks={mockFooterData.multiColumnFooter.socialLinks} />

    </div>
  )
}