// Import SVG images
import { ReactComponent as CssBadge } from '../../assets/badges/css_badge.svg';
import { ReactComponent as HtmlBadge } from '../../assets/badges/html_badge.svg';
import { ReactComponent as ReactBadge } from '../../assets/badges/react_badge.svg';
import { ReactComponent as ReduxBadge } from '../../assets/badges/redux_badge.svg';
import { ReactComponent as JavascriptBadge } from '../../assets/badges/javascript_badge.svg';
import { ReactComponent as SassBadge } from '../../assets/badges/sass_badge.svg';
import { ReactComponent as GithubBadge } from '../../assets/badges/github_badge.svg';
import { ReactComponent as WebsiteBadge } from '../../assets/badges/website_badge.svg';

// Function to get SVG component based on technology name
function getBadgeComponent(technology) {
  switch (technology.toLowerCase()) {
    case 'css':
      return <CssBadge />;
    case 'html':
      return <HtmlBadge />;
    case 'react':
      return <ReactBadge />;
    case 'redux':
      return <ReduxBadge />;
    case 'javascript':
      return <JavascriptBadge />;
    case 'scss':
      return <SassBadge />;
    case 'github':
      return <GithubBadge />;
    case 'website':
      return <WebsiteBadge />;
    default:
      return null;
  }
}

export default getBadgeComponent;
