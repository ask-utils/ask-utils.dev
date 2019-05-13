import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TitleWithUrl = ({item}) => {
  if (!item.url) return item.title
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      {item.title}
    </a>
  )
}

const InstallCMD = ({item}) => {
  if (!item.cmd) return null;
  return (
    <pre>
      <code>{item.cmd}</code>
    </pre>
  )
}

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => {
      console.log(item)
      return (
        <div key={item.text} className="column is-6">
          <section className="section">
            <div className="has-text-centered">
              {item.image ? (
                <div
                  style={{
                    width: '240px',
                    display: 'inline-block',
                  }}
                >
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
                ): null}
                <h1>
                  <TitleWithUrl item={item} />
                </h1>
                <InstallCMD item={item} />
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      )}
    )}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
