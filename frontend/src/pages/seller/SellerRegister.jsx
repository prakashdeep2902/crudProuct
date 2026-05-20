import React from 'react'
import SellerAuthLayout from '../../components/seller/SellerAuthLayout'
import SellerBranding from '../../components/seller/SellerBranding'
import SellerRegisterForm from '../../components/seller/SellerRegisterForm'

const SellerRegister = () => {
  return (
   <SellerAuthLayout   brandingContent={<SellerBranding  />}>
   <SellerRegisterForm/>
   </SellerAuthLayout>
  )
}

export default SellerRegister