import React from "react"
import Layout from "../components/atoms/Layout"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t('404Page.title')}>
      <section className="jth-section jth-noMatch">
        <div className="jth-container jth-section-rowGrid-center">
          <h1 data-content={t('404Page.message')}>{t('404Page.message')}</h1>
          <p>{t('404Page.subMessage')}</p>
          <Link to="/">{t('Common.homePage')}</Link>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage