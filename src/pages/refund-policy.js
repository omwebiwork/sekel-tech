// import HeadSection from '@/components/shared/HeadSection'
import RefundCriteria from '@/Components/refund-Policy/RefundCriteria'
import RefundPeriodCardSection from '@/Components/refund-Policy/RefundPeriodCardSection'
import React from 'react'

function RefundPolicy() {
  return (
    <>
      {/* <HeadSection title="Refund Policy - Sekel Tech" description="" canonical="https://sekel.tech/refund-policy" img="/img/sekel-logo.jpg" /> */}
      <RefundPeriodCardSection/>
      <RefundCriteria />
    </>
  )
}

export default RefundPolicy