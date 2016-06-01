import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div>
          <h1>
            Tune in, or watch recorded sessions!
          </h1>
          <h2>Next show: June 14, 2PM EST</h2>
          <h3><Link to={prefixLink('/archive/')}>Archive</Link></h3>

          <h3>Supported file types</h3>
          <ul>
            <li>
              <Link to={prefixLink('/markdown/')}>Markdown</Link>
            </li>
            <li>
              <Link to={prefixLink('/react/')}>JSX (React components)</Link>
            </li>
            <li>
              <Link to={prefixLink('/coffee-react/')}>CJSX (Coffeescript React components)</Link>
            </li>
            <li>
              <Link to={prefixLink('/html/')}>HTML</Link>
            </li>
            <li>
              <Link to={prefixLink('/json/')}>JSON</Link>
            </li>
            <li>
              <Link to={prefixLink('/yaml/')}>YAML</Link>
            </li>
            <li>
              <Link to={prefixLink('/toml/')}>TOML</Link>
            </li>
          </ul>

        </div>
      </DocumentTitle>
    )
  }
}
