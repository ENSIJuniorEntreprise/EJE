import React, {useState} from 'react'
import DashNav from '../components/DashNav'
import Articles from '../components/Art'
import NewsletterDash from '../components/NewsletterDash'
import AccountSettings from '../components/AccountSettings'
import Event from '../components/Event'

const Dash = () => {
  const [page, setPage] = useState("articles")
  return (
    <div>
      <DashNav setPage={setPage}/>
      {page === "articles" && <Articles/>}
      {page === "newsletter" && <NewsletterDash/>}
      {page === "events" && <Event/>}
      {page === "settings" && <AccountSettings/>}
    </div>
  )
}

export default Dash