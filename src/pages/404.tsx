import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "../components/Link"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Error404Icon, RedIcon } from "../components/Common/Icon"

const NotFoundPage = () => (
  <Layout>
    <div className="relative pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col justify-center items-center">
      <img
        className="absolute top-0 left-0 w-full h-full -z-10 hidden md:block"
        src="/images/404-error-bg.png"
        alt="Background 404 image"
      />
      <img
        className="absolute top-0 left-0 w-full h-full -z-10 block md:hidden"
        src="/images/404-error-bg-mobile.png"
        alt="Background 404 image"
      />
      <div className="max-w-[280px] sm:max-w-[470px] mx-auto px-2">
        <Error404Icon />
      </div>

      <div className="mx-auto max-w-[848px] w-full px-6 lg:px-0 flex flex-col items-center justify-center md:mt-14">
        <div className="self-stretch flex-col justify-center items-center gap-6 flex">
          <div className="self-stretch  flex-col justify-center items-center gap-4 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <RedIcon />
              <div className="text-rose-600 text-base font-bold leading-normal">
                404 Error
              </div>
            </div>
            <div
              className="self-stretch text-center text-white text-[48px] md:text-[56px] leading-[116.667%] md:leading-[114.286%] font-semibold"
            >
              <h1>Sorry, we couldn’t find this page</h1>
            </div>
          </div>
          {/* <div
            className="self-stretch text-center text-white text-[20px] font-normal leading-[140%]"
          >
            Bloggosfär vithetsnorm jeren. Frimester ev kompetensutvisning.
            Förarstödjare rejinat eftersom wiki. Sore kronde, virtuell våldtäkt.
            Preras poneligen sprängbälte.
          </div> */}
          <Link to="/">
            <button className="bg-primary text-white tab-button-text px-6 py-4 rounded-[80px] mt-3">
              {" "}
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Not found" />

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
