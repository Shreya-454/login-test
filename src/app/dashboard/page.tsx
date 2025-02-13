import DashBoard from '@/components/dashboard/Dashboard'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
        <Suspense>
      <DashBoard/>
      </Suspense>
    </div>
  )
}

export default page
