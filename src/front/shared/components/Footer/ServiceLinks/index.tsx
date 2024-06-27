import CSSModules from 'react-css-modules'
import config from 'helpers/externalConfig'
import styles from '../Footer.scss'

type ServiceLinksProps = {
  versionName: string | null
  versionLink: string | null
}

function ServiceLinks({ versionName, versionLink }: ServiceLinksProps) {
  const serviceLink = 'https://startwaves.co/'

  return (
    <div styleName="serviceLinks">
      {versionName && versionLink && (
        <span>
          
        </span>
      )}
      <span>
        Powered by
        {' '}
        <a href={serviceLink} target="_blank" rel="noreferrer">Start Waves - Banking for All</a>
      </span>
    </div>
  )
}

export default CSSModules(ServiceLinks, styles, { allowMultiple: true })
