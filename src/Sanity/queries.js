module.exports ={
    SUMMER_CAMP_HERO_QUERY :`*[_type=="heroSection" && slug.current==$heroSlug][0]{
      title { first, second, third },
      tagline,
      description,
      campDates {
        camp1 { title, dates },
        camp2 { title, dates }
      },
      "backgroundVideoUrl": backgroundVideo.asset->url,
      "backgroundVideoSize": backgroundVideo.asset->size,
      "backgroundVideoMimeType": backgroundVideo.asset->mimeType,
      primaryCta { 
        text, 
        url, 
        newTab, 
        actionType 
      }
    }`,
    ADULT_FENCING_HERO_QUERY : `*[_type=="heroSection" && slug.current=="adult-fencing"][0]{
      title { first, second, third },
      tagline,
      description,
      background { asset, alt },
      backgroundMobile { asset, alt },
      primaryCta { text, url, newTab },
      secondaryCta { text, action }
    }`,
    COMPETITIVE_FENCING_HERO_QUERY :`*[_type=="heroSection" && slug.current=="competitiveEdge-section"][0]{
  title { first, second, third },
  tagline,
  description,
  background { asset, alt },
  backgroundMobile { asset, alt },
  primaryCta { text, url, newTab },
  secondaryCta { text, action }
}`,
PRIVATE_TUTORING_HERO_QUERY :`*[_type=="heroSection" && slug.current=="privateFencing-section"][0]{
  title { first, second, third },
  tagline,
  description,
  background { asset, alt },
  backgroundMobile { asset, alt },
  primaryCta { text, url, newTab },
  secondaryCta { text, action }
}`,
PROGRAM_OVERVIEW_HERO_QUERY : `*[_type=="heroSection" && slug.current=="programs-overview"][0]{
  title { first, second, third },
  tagline,
  description,
  background { asset, alt },
  backgroundMobile { asset, alt },
  primaryCta { text, url, newTab },
  secondaryCta { text, action }
}`,
YOUTH_FENCING_HERO_QUERY : `*[_type=="heroSection" && slug.current=="youthfencing-section"][0]{
  title { first, second, third },
  tagline,
  description,
  background { asset, alt },
  backgroundMobile { asset, alt },
  primaryCta { text, url, newTab },
  secondaryCta { text, action }
}`,
LANDING_PAGE_ABOUT_QUERY : `*[_type == "landingPageAbout"][0]{
  sectionHeader,
  contentParagraphs,
  blockquote,
  callToAction,
  video{
    ...,
    posterImage{
      asset->{
        _id,
        url
      },
      alt
    },
    videoFile{
      asset->{
        _id,
        url
      }
    }
  },
  statsWidget,
  seo
}`,
REGISTRATION_SECTION_QUERY : `*[_type == "landingPageRegistrationSection" && slug.current == "registration-section"][0]{
      title,
      header {
        logo {
          asset->,
          alt
        },
        mainHeading {
          prefix,
          highlight
        },
        subtitle
      },
      platformShowcase {
        logo {
          asset->,
          alt
        },
        title,
        description
      },
      features[]{
        title,
        description
      },
      statistics[]{
        number,
        label
      },
      accessPortal {
        title,
        subtitle,
        qrCode {
          asset->,
          alt
        },
        ctaButton {
          text,
          url,
          openInNewTab
        },
        disclaimer
      },
      bottomQuote {
        quote,
        attribution
      }
    }`,
    LANDING_PAGE_GALLERY_SECTION_QUERY : `
      *[_type == "landingPageGallerySection"][0]{
        header {
          label,
          headingPrefix,
          headingHighlight,
          subtitle
        },
        galleryImages[]{
          src { asset-> },
          alt
        }
      }
    `,
    LANDING_PAGE_SOCIAL_MEDIA_QUERY : `
      *[_type == "socialMediaSection"][0]{
        sectionTitle,
        sectionSubtitle,
        instagramUrl,
        ctaLabel,
        ctaButtonText,
        gallery[] {
          image { asset->, alt },
          description
        }
      }
    `
}