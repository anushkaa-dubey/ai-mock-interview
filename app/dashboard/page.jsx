import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardLayout() {
  return (
    <div>
      Dashboard
      <UserButton></UserButton>
    </div>
  )
}

export default DashboardLayout
