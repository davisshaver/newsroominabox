/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('mission.html', this.props.language)}>
              Mission
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://discord.gg/z62uqBB">Project Chat</a>
            <a href="https://twitter.com/davisshaver" target="_blank">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href="https://github.com/davisshaver/newsroominabox">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/davisshaver/newsroominabox/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://phillypublishing.com"
          target="_blank"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/ppc.png'}
            alt="Facebook Open Source"
            width="170"
            height="170"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} Philadelphia Publishing Company
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
